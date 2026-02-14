from fastapi import APIRouter, status, HTTPException
from model import Courses,Trainer,Placement,StartupApplication,Certificate
from database import courses_collection,Trainer_collection,placement_collection,profile_collection,certificates_collection

router = APIRouter()


@router.post("/courses", status_code=status.HTTP_201_CREATED)
def create_course(course: Courses):
    result = courses_collection.insert_one(course.model_dump())

    return {
        "message": "Course added successfully",
        "id": str(result.inserted_id)
    }


@router.get("/courses")
def get_courses():
    courses = []

    for course in courses_collection.find():
        course["_id"] = str(course["_id"]) 
        courses.append(course)

    return courses


@router.post("/trainers")
def create_Trainer(Trainer: Trainer):
    result = Trainer_collection.insert_one(Trainer.model_dump())

    return {
        "message": "Trainer added successfully",
        "id": str(result.inserted_id)
    }
    
@router.get("/trainers")
def get_Trainer():
    trainers = []

    for trainer in Trainer_collection.find():
        trainer["_id"] = str(trainer["_id"]) 
        trainers.append(trainer)

    return trainers   

@router.post("/placements")
def create_placement(placement: Placement):
    result = placement_collection.insert_one(placement.model_dump())

    return {
        "message": "Placement added successfully",
        "id": str(result.inserted_id)
    }

@router.get("/placements")
def get_placements():
    placements = []

    for placement in placement_collection.find():
        placement["_id"] = str(placement["_id"])
        placements.append(placement)

    return placements 




@router.post("/startup")
def submit_startup(startup: StartupApplication):
    data = startup.model_dump()

    result = profile_collection.insert_one(data)

    return {
        "message": "Startup application submitted successfully",
        "id": str(result.inserted_id)
    }


@router.get("/startup/by-email/{email}")
def get_startup_by_email(email: str):
    startup = profile_collection.find_one({"email": email})

    if not startup:
        raise HTTPException(status_code=404, detail="Startup not found")

    startup["_id"] = str(startup["_id"])
    return startup

@router.put("/startup")
def update_startup(data: StartupApplication):
    update_data = data.model_dump(exclude_unset=True)

    result = profile_collection.update_one(
        {"email": data.email},
        {"$set": update_data}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Startup not found")

    return {"message": "Startup updated successfully"}

@router.delete("/startup/{email}")
def delete_startup(email: str):
    result = profile_collection.delete_one({"email": email})

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Startup not found")

    return {"message": "Startup deleted successfully"}



@router.post("/certificates")
def create_certificate(certificate: Certificate):
    result = certificates_collection.insert_one(
        certificate.model_dump()
    )

    return {
        "message": "Certificate added successfully",
        "id": str(result.inserted_id)
    }



@router.get("/certificates")
def get_certificates():
    certificates = []

    for cert in certificates_collection.find():
        cert["_id"] = str(cert["_id"])
        certificates.append(cert)

    return certificates

