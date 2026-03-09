import shutil,os

from fastapi import APIRouter, HTTPException, UploadFile, File
from model import StartupApplication
from database import profile_collection

router = APIRouter(prefix="/startup", tags=["Startups"])

@router.post("/")
def submit_startup(startup: StartupApplication):
    result = profile_collection.insert_one(startup.model_dump())
    return {"message": "Startup application submitted", "id": str(result.inserted_id)}

@router.get("/by-email/{email}")
def get_startup_by_email(email: str):
    startup = profile_collection.find_one({"email": email})
    if not startup:
        raise HTTPException(status_code=404, detail="Startup not found")

    startup["_id"] = str(startup["_id"])
    return startup

@router.put("/")
def update_startup(data: StartupApplication):
    result = profile_collection.update_one(
        {"email": data.email},
        {"$set": data.model_dump(exclude_unset=True)}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Startup not found")

    return {"message": "Startup updated successfully"}

@router.delete("/{email}")
def delete_startup(email: str):
    result = profile_collection.delete_one({"email": email})

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Startup not found")

    return {"message": "Startup deleted successfully"}
@router.get("/logo/{email}")
def get_logo(email: str):

    startup = profile_collection.find_one({"email": email})

    if not startup:
        return {"logo": None}

    startup["_id"] = str(startup["_id"])

    return {"logo": startup.get("logo")}
def save_startup_controller(data):

    profile_collection.update_one(
        {"email": data["email"]},
        {"$set": data},
        upsert=True
    )

    return {"message": "Startup saved"}

UPLOAD_FOLDER = "uploads"

@router.post("/upload-logo/{email}")
async def upload_logo(email: str, file: UploadFile = File(...)):

    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    filename = f"{email}_{file.filename}"
    filepath = os.path.join(UPLOAD_FOLDER, filename)

    # save file
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # save path in MongoDB
    profile_collection.update_one(
        {"email": email},
        {"$set": {"logo": filepath}}
    )

    return {
        "logo": filepath
    }