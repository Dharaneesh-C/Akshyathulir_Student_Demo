from fastapi import APIRouter, HTTPException, status
from typing import Dict, Type
from pydantic import BaseModel
from bson import ObjectId
from bson.errors import InvalidId

# Database collections
from database import (
    certificates_collection, arts_collection, cse_collection,
    mec_collection, law_collection, civil_collection, mba_collection,
    science_collection, ece_collection, medical_collection,
    it_collection, mca_collection, eee_collection,
    courses_collection, trainers_collection, placements_collection
)

# Pydantic models
from models import (
    Certificate, Arts, CSE, MEC, LAW, CIVIL, MBA,
    SCIENCE, ECE, MEDICAL, IT, MCA, EEE,
    Course, Trainer, Placement
)

router = APIRouter()


# -------------------------------------------------
# ✅ ObjectId Validator (SIMPLE)
# -------------------------------------------------
def validate_object_id(id: str) -> ObjectId:
    try:
        return ObjectId(id)
    except (InvalidId, TypeError):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid MongoDB ID format"
        )

# -------------------------------------------------
# 🔁 COLLECTION MAP
# -------------------------------------------------
COLLECTION_MAP: Dict[str, any] = {
    "certificates": certificates_collection,
    "arts": arts_collection,
    "cse": cse_collection,
    "mec": mec_collection,
    "law": law_collection,
    "civil": civil_collection,
    "mba": mba_collection,
    "science": science_collection,
    "ece": ece_collection,
    "medical": medical_collection,
    "it": it_collection,
    "mca": mca_collection,
    "eee": eee_collection,
    "courses": courses_collection,
    "trainers": trainers_collection,
    "placements": placements_collection,
}

# -------------------------------------------------
# 🔁 MODEL MAP
# -------------------------------------------------
MODEL_MAP: Dict[str, Type[BaseModel]] = {
    "certificates": Certificate,
    "arts": Arts,
    "cse": CSE,
    "mec": MEC,
    "law": LAW,
    "civil": CIVIL,
    "mba": MBA,
    "science": SCIENCE,
    "ece": ECE,
    "medical": MEDICAL,
    "it": IT,
    "mca": MCA,
    "eee": EEE,
    "courses": Course,
    "trainers": Trainer,
    "placements": Placement,
}

# -------------------------------------------------
# ✅ SINGLE POST (ALL DEPARTMENTS)
# -------------------------------------------------
@router.post("/{department}", status_code=status.HTTP_201_CREATED)
def create_data(department: str, data: dict):
    department = department.lower()

    if department not in COLLECTION_MAP:
        raise HTTPException(status_code=400, detail="Invalid department ❌")

    try:
        model = MODEL_MAP[department](**data)
    except Exception as e:
        raise HTTPException(status_code=422, detail=str(e))

    result = COLLECTION_MAP[department].insert_one(model.model_dump())

    return {
        "message": f"{department.upper()} data added successfully ✅",
        "id": str(result.inserted_id)
    }

# -------------------------------------------------
# ✅ SINGLE GET (ALL DEPARTMENTS)
# -------------------------------------------------
@router.get("/{department}")
def get_all_data(department: str):
    department = department.lower()

    if department not in COLLECTION_MAP:
        raise HTTPException(status_code=400, detail="Invalid department ❌")

    result = []
    for item in COLLECTION_MAP[department].find():
        item["_id"] = str(item["_id"])
        result.append(item)

    return result

# -------------------------------------------------
# ✅ GET BY ID
# -------------------------------------------------
@router.get("/{department}/{id}")
def get_data_by_id(department: str, id: str):
    department = department.lower()
    _id = validate_object_id(id)

    if department not in COLLECTION_MAP:
        raise HTTPException(status_code=400, detail="Invalid department ❌")

    data = COLLECTION_MAP[department].find_one({"_id": _id})
    if not data:
        raise HTTPException(status_code=404, detail="Data not found ❌")

    data["_id"] = str(data["_id"])
    return data

# -------------------------------------------------
# ✅ UPDATE
# -------------------------------------------------
@router.put("/{department}/{id}")
def update_data(department: str, id: str, data: dict):
    department = department.lower()
    _id = validate_object_id(id)

    if department not in COLLECTION_MAP:
        raise HTTPException(status_code=400, detail="Invalid department ❌")

    try:
        model = MODEL_MAP[department](**data)
    except Exception as e:
        raise HTTPException(status_code=422, detail=str(e))

    result = COLLECTION_MAP[department].update_one(
        {"_id": _id},
        {"$set": model.model_dump()}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Data not found ❌")

    return {"message": "Data updated successfully ✅"}

# -------------------------------------------------
# ✅ DELETE
# -------------------------------------------------
@router.delete("/{department}/{id}")
def delete_data(department: str, id: str):
    department = department.lower()
    _id = validate_object_id(id)

    if department not in COLLECTION_MAP:
        raise HTTPException(status_code=400, detail="Invalid department ❌")

    result = COLLECTION_MAP[department].delete_one({"_id": _id})

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Data not found ❌")

    return {"message": "Data deleted successfully ✅"}
