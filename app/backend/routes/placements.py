from fastapi import APIRouter
from model import Placement, PlacementRecord
from database import placement_collection, ads_collection, placement_records_collection

router = APIRouter(prefix="/placements", tags=["Placements"])


# CREATE placement
@router.post("/")
def create_placement(placement: Placement):
    result = placement_collection.insert_one(placement.model_dump())
    return {
        "message": "Placement added successfully",
        "id": str(result.inserted_id)
    }


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


# ⭐ GET placement dashboard stats by admin email
@router.get("/stats/{email}")
def get_placement_stats(email: str):

    records = list(placement_records_collection.find({"adminEmail": email}))
    companies = list(placement_collection.find({"adminEmail": email}))

    # Students placed = sum of all count fields in placement records
    total_students = sum(int(r.get("count", 0)) for r in records)

    # Highest package from placement records
    packages = [float(r.get("package", 0)) for r in records if r.get("package", 0)]
    highest_package = max(packages) if packages else 0

    # Average package from placement records
    average_package = round(sum(packages) / len(packages), 2) if packages else 0

    # Recruiters = number of registered companies
    total_companies = len(companies)

    return {
        "highestPackage": highest_package,
        "studentsPlaced": total_students,
        "recruiters": total_companies,
        "averagePackage": average_package
    }


# GET ads for page
@router.get("/ads/{email}/{page}")
async def get_ads(email: str, page: str):

    ads = list(
        ads_collection.find({
            "adminEmail": email,
            "page": page
        })
    )

    for ad in ads:
        ad["_id"] = str(ad["_id"])

    return ads
    

# CREATE placement record
@router.post("/records")
def create_record(record: PlacementRecord):

    result = placement_records_collection.insert_one(record.model_dump())

    return {
        "message": "Placement record added",
        "id": str(result.inserted_id)
    }


@router.get("/records/{email}")
def get_records(email: str):

    records = []

    for record in placement_records_collection.find({"adminEmail": email}):
        record["_id"] = str(record["_id"])
        records.append(record)

    return records