from fastapi import APIRouter
from model import Certificate
from database import certificates_collection, ads_collection

router = APIRouter(prefix="/certificates", tags=["Certificates"])

@router.post("/")
def create_certificate(certificate: Certificate):
    result = certificates_collection.insert_one(certificate.model_dump())
    return {"message": "Certificate added successfully", "id": str(result.inserted_id)}

@router.get("/{email}")
def get_certificates(email: str):
    certificates = []

    for cert in certificates_collection.find({"adminEmail": email}):
        cert["_id"] = str(cert["_id"])
        certificates.append(cert)

    return certificates
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
