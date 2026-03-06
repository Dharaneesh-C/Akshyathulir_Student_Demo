from fastapi import APIRouter, HTTPException, status
from bson import ObjectId
from model import Trainer
from database import Trainer_collection

router = APIRouter(prefix="/trainers", tags=["Trainers"])

@router.post("/", status_code=status.HTTP_201_CREATED)
def create_trainer(trainer: Trainer):
    result = Trainer_collection.insert_one(trainer.model_dump())
    return {"message": "Trainer added successfully", "id": str(result.inserted_id)}

@router.get("/")
def get_trainers():
    trainers = []
    for trainer in Trainer_collection.find():
        trainer["_id"] = str(trainer["_id"])
        trainers.append(trainer)
    return trainers

@router.get("/{email}")
def get_trainers_by_email(email: str):
    trainers = []

    for trainer in Trainer_collection.find({"adminEmail": email}):
        trainer["_id"] = str(trainer["_id"])
        trainers.append(trainer)

    return trainers

@router.put("/{trainer_id}")
def update_trainer(trainer_id: str, trainer: Trainer):
    result = Trainer_collection.update_one(
        {"_id": ObjectId(trainer_id)},
        {"$set": trainer.model_dump()}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Trainer not found")

    return {"message": "Trainer updated successfully"}

@router.delete("/{trainer_id}")
def delete_trainer(trainer_id: str):
    result = Trainer_collection.delete_one(
        {"_id": ObjectId(trainer_id)}
    )

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Trainer not found")

    return {"message": "Trainer deleted successfully"}