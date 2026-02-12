from pydantic import BaseModel,EmailStr
from typing import Optional,List

class Trainer(BaseModel):
    name: str
    skill: str
    status: str = "Active"
    exp: str
    trained: int
    location: str
    courses: int
    
    
    
class Courses(BaseModel):
    name: str
    category: str
    duration: str
    fees: str
    status: str
    startDate: str
    trainer: str
    description: str
    

    
class Placement(BaseModel):
    startupName: str
    legalStatus: str
    dateOfEstablishment: str
    primarySector: str
    secondarySector: str
    companyPAN: str
    gstin: str
    currentTeamSize: str
    maleCount: str
    femaleCount: str
    companyWebsite: str
    numberOfBranches: str   
    


class Certificate(BaseModel):
    studentName: str
    course: str
    completionDate: str
    issuedDate: Optional[str] = "-"
    grade: Optional[str] = "-"
    score: Optional[int] = None
    status: str = "Pending"


class Address(BaseModel):
    fullAddress: str
    country: str
    state: str
    district: str
    city: str
    area: str
    pinCode: str
    isPrimary: bool

class StartupApplication(BaseModel):
    # Personal
    firstName: str
    lastName: str
    email: EmailStr
    phone: str
    linkedin: Optional[str] = None
    dateOfBirth: str
    gender: str
    designation: str

    # Startup
    startupName: str
    legalStatus: str
    dateOfEstablishment: str
    primarySector: str
    secondarySector: Optional[str] = None
    companyPAN: str
    gstin: Optional[str] = None
    companyWebsite: Optional[str] = None

    currentTeamSize: int
    maleCount: int
    femaleCount: int
    numberOfBranches: int
    branchAddresses: List[Address]

    # Founder
    founderFirstName: str
    founderLastName: str
    founderEmail: EmailStr
    founderPhone: str
    founderDOB: str
    founderGender: str
    founderLinkedIn: Optional[str] = None
    founderFacebook: Optional[str] = None

    # Student Opportunities
    placementOffered: str
    placementType: Optional[str] = None
    internshipOffered: str
    internshipType: Optional[str] = None
    trainingOffered: str
    trainingType: List[str]
    fypOffered: str

    # Requirements
    fundingNeeded: str
    mentorshipNeeded: str
    technologySupport: str
    incubationSpace: str
    registrationNeeded: str
    supportInterest: Optional[str] = None
    governmentSchemes: Optional[str] = None    