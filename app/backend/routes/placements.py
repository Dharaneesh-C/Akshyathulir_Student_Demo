from fastapi import APIRouter, UploadFile, File, Form
from typing import Optional
from model import PlacementRecord
from database import placement_collection, ads_collection, placement_records_collection
import shutil, os, uuid

router = APIRouter(prefix="/placements", tags=["Placements"])


UPLOAD_DIR = "uploads/logos"

# ⭐ make sure folder exists
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.get("/logo/{email}")
def get_logo(email: str):

    startup = placement_collection.find_one({"adminEmail": email})

    if not startup:
        return {"logo": None}

    startup["_id"] = str(startup["_id"])

    # Stored field for the logo in the placement document
    return {"logo": startup.get("companyLogo")}


def save_startup_controller(data):

    placement_collection.update_one(
        {"adminEmail": data.get("adminEmail")},
        {"$set": data},
        upsert=True
    )

    return {"message": "Startup saved"}

UPLOAD_DIR = "uploads/logos"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@router.post("/upload-logo/{email}")
async def upload_logo(email: str, file: UploadFile = File(...)):

    os.makedirs(UPLOAD_DIR, exist_ok=True)

    filename = f"{email}_{file.filename}"
    filepath = os.path.join(UPLOAD_DIR, filename)

    # save file
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # save path in MongoDB (consistent with create_placement field name)
    logo_url = f"http://127.0.0.1:8000/uploads/logos/{filename}"
    placement_collection.update_one(
        {"adminEmail": email},
        {"$set": {"companyLogo": logo_url}}
    )

    return {
        "logo": logo_url
    }

# CREATE placement
@router.post("/")
async def create_placement(
    startupName: str = Form(...),
    legalStatus: str = Form(...),
    dateOfEstablishment: str = Form(...),
    primarySector: str = Form(...),
    secondarySector: str = Form(""),
    companyPAN: str = Form(...),
    gstin: str = Form(""),
    currentTeamSize: int = Form(...),
    maleCount: int = Form(...),
    femaleCount: int = Form(...),
    companyWebsite: str = Form(""),
    numberOfBranches: int = Form(...),
    adminEmail: str = Form(...),
    companyLogo: Optional[UploadFile] = File(None),
):
    logo_url = ""
    if companyLogo and companyLogo.filename:
        ext = companyLogo.filename.split(".")[-1]
        filename = f"{uuid.uuid4()}.{ext}"
        filepath = os.path.join(UPLOAD_DIR, filename)
        with open(filepath, "wb") as f:
            shutil.copyfileobj(companyLogo.file, f)
        logo_url = f"http://127.0.0.1:8000/uploads/logos/{filename}"
        print("Logo saved:", logo_url)

    placement_data = {
        "startupName": startupName,
        "legalStatus": legalStatus,
        "dateOfEstablishment": dateOfEstablishment,
        "primarySector": primarySector,
        "secondarySector": secondarySector,
        "companyPAN": companyPAN,
        "gstin": gstin,
        "currentTeamSize": currentTeamSize,
        "maleCount": maleCount,
        "femaleCount": femaleCount,
        "companyWebsite": companyWebsite,
        "numberOfBranches": numberOfBranches,
        "companyLogo": logo_url,
        "adminEmail": adminEmail,
    }

    result = placement_collection.insert_one(placement_data)
    return {"message": "Placement added successfully", "id": str(result.inserted_id)}


# GET all placements
@router.get("/")
def get_placements():
    placements = []
    for placement in placement_collection.find():
        placement["_id"] = str(placement["_id"])
        placements.append(placement)
    return placements


# GET placements by admin email
@router.get("/admin/{email}")
def get_placements_by_admin(email: str):
    placements = []
    for placement in placement_collection.find({"adminEmail": email}):
        placement["_id"] = str(placement["_id"])
        placements.append(placement)
    return placements


# GET placement dashboard stats
@router.get("/stats/{email}")
def get_placement_stats(email: str):
    records = list(placement_records_collection.find({"adminEmail": email}))
    companies = list(placement_collection.find({"adminEmail": email}))
    total_students = sum(int(r.get("count", 0)) for r in records)
    packages = [float(r.get("package", 0)) for r in records if r.get("package", 0)]
    highest_package = max(packages) if packages else 0
    average_package = round(sum(packages) / len(packages), 2) if packages else 0
    total_companies = len(companies)
    return {
        "highestPackage": highest_package,
        "studentsPlaced": total_students,
        "recruiters": total_companies,
        "averagePackage": average_package
    }


# GET ads
@router.get("/ads/{email}/{page}")
async def get_ads(email: str, page: str):
    ads = list(ads_collection.find({"adminEmail": email, "page": page}))
    for ad in ads:
        ad["_id"] = str(ad["_id"])
    return ads


# CREATE placement record
@router.post("/records")
def create_record(record: PlacementRecord):
    company = placement_collection.find_one({"startupName": record.companyName})
    record_data = record.model_dump()
    if company:
        record_data["companyPAN"] = company.get("companyPAN")
        record_data["companyLogo"] = company.get("companyLogo")
    result = placement_records_collection.insert_one(record_data)
    return {"message": "Placement record added", "id": str(result.inserted_id)}


# GET placement records
@router.get("/records/{email}")
def get_records(email: str):
    records = []
    for record in placement_records_collection.find({"adminEmail": email}):
        record["_id"] = str(record["_id"])
        records.append(record)
    return records