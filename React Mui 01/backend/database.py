from pymongo import MongoClient

MONGO_URL = "mongodb://localhost:27017/"
client = MongoClient(MONGO_URL)

db = client["certification_db"]

certificates_collection = db["certificates"]
arts_collection = db["arts"]
cse_collection = db["cse"]
mec_collection = db["mec"]
law_collection = db["law"]
civil_collection = db["civil"]
mba_collection = db["mba"]
science_collection = db["science"]
ece_collection = db["ece"]
medical_collection = db["medical"]
it_collection = db["it"]
eee_collection = db["eee"]
mca_collection = db["mca"]
courses_collection = db["courses"]
trainers_collection = db["trainers"]
placements_collection = db["placements"]
