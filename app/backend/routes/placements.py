from fastapi import APIRouter
from model import Placement
from database import placement_collection, ads_collection

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
