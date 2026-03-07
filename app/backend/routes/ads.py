from fastapi import APIRouter
from database import ads_collection, ads_controller_collection
from model import Ads

router = APIRouter()


# CREATE AD
@router.post("/ads")
async def create_ad(ad: Ads):

    ad_dict = ad.dict()

    result = ads_collection.insert_one(ad_dict)

    return {
        "message": "Ad created successfully",
        "id": str(result.inserted_id)
    }


# GET ADS BY EMAIL + PAGE
@router.get("/ads/{email}/{page}")
async def get_ads(email: str, page: str):

    controller = ads_controller_collection.find_one()

    # if ads OFF return empty
    if not controller or controller.get("ads") != "on":
        return []

    ads_list = list(
        ads_collection.find({
            "adminEmail": email,
            "page": page
        })
    )

    for ad in ads_list:
        ad["_id"] = str(ad["_id"])

    return ads_list