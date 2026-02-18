from fastapi import APIRouter
from model import Placement
from database import placement_collection

router = APIRouter(prefix="/placements", tags=["Placements"])

@router.post("/")
def create_placement(placement: Placement):
    result = placement_collection.insert_one(placement.model_dump())
    return {"message": "Placement added successfully", "id": str(result.inserted_id)}

@router.get("/")
def get_placements():
    placements = []
    for placement in placement_collection.find():
        placement["_id"] = str(placement["_id"])
        placements.append(placement)
    return placements
