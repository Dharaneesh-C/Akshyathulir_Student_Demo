from fastapi import APIRouter
from datetime import datetime
from model import Certificate
from database import certificates_collection, ads_collection

router = APIRouter(prefix="/certificates", tags=["Certificates"])


@router.post("/")
def create_certificate(certificate: Certificate):
    result = certificates_collection.insert_one(certificate.model_dump())
    return {"message": "Certificate added successfully", "id": str(result.inserted_id)}


@router.get("/stats/{email}")
def get_certificate_stats(email: str):

    certificates = list(certificates_collection.find({"adminEmail": email}))

    total_issued = 0
    pending = 0
    verified_this_month = 0

    current_month = datetime.now().month
    current_year = datetime.now().year

    for cert in certificates:

        if cert.get("status") == "Issued":
            total_issued += 1

        if cert.get("status") == "Pending":
            pending += 1

        issued_date = cert.get("issuedDate")

        if issued_date:
            try:
                date_obj = datetime.strptime(issued_date, "%Y-%m-%d")

                if date_obj.month == current_month and date_obj.year == current_year:
                    verified_this_month += 1
            except:
                pass

    return {
        "totalIssued": total_issued,
        "verifiedThisMonth": verified_this_month,
        "pending": pending
    }


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