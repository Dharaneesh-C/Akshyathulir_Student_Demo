from pydantic import BaseModel
from typing import Optional


class Certificate(BaseModel):
    studentId: str
    studentName: str
    batchYear: str
    courseName: str
    trainerName: str
    certificationId: str
    certificationName: str
    certificationType: str
    certificateLevel: str
    issueDate: str
    expiryDate: str
    certificateStatus: str
    verificationCode: str
    certificateUrl: str
    issuedBy: str
    authorizedSignatory: str
    grade: str
    assessmentResult: str
    remarks: Optional[str] = ""
    reissueReason: Optional[str] = ""
    
class Arts(BaseModel):
    instituteName: str
    registrationName: str
    establishmentYear: str
    courseOffered: str
    trainingMode: str
    courseDuration: str
    resourse: str
    software: str
    trainersCount: str
    specialization: str
    
class CSE(BaseModel):
    instituteName: str
    registrationNumber: str
    yearOfEstablishment: str
    cseCoursesOffered: str
    programmingLanguages: str
    trainingMode:str
    numberOfComputers: str
    facultyCount: str
    facultyExpertise: str


class MEC(BaseModel):
    instituteName: str
    registrationNumber: str
    yearOfEstablishment: str
    mecCoursesOffered: str
    machinesTools: str
    trainingType: str
    workshopAvailable: str
    numberOfMachines: str
    facultyCount: str
    facultySpecialization: str


class LAW(BaseModel):
    instituteName: str
    registrationName: str
    yearOfEstablishment: str
    address: str
    districtcity: str
    contactnumber: str
    emailid: str

    courseOffered: str
    trainingMode: str
    courseDuration: str
    batchstrength: str

    mootCourt: str
    legalLibrary: str
    classroomType: str

    facultyCount: str
    facultyQualification: str
    IndustrycourtExperience: str
    specialization: str

    InternshipCourtInternshipAvailable: str
    internshipPartners: str
    certificationProvided: str


class CIVIL(BaseModel):
    instituteName: str
    registrationName: str
    establishmentYear: str

    courseOffered: str
    trainingMode: str
    courseDuration: str

    software: str

    trainersCount: str
    specialization: str
    


class MBA(BaseModel):
    instituteName: str
    registrationName: str
    yearofestablishment: str
    address: str
    districtcity: str
    contactnumber: str
    emailid: str

    specialization: str
    trainingMode: str
    courseDuration: str
    batchstrength: str

    smartClassroom: str
    computerLab: str
    simulationLab: str
    libraryResources: str

    facultyCount: str
    facultyQualification: str
    industryExperience: str
    areasExpertise: str

    placementAssistanceAvailable: str
    topRecruiters: str
    internshipProgramAvailable: str
    averagePlacementPackage: str

    aicteApprovalAvailable: str
    universityAffiliation: str
    certificationProvided: str
    

class SCIENCE(BaseModel):
    instituteName: str
    registrationNumber: str
    yearOfEstablishment: str

    scienceCoursesOffered: str
    laboratorySubjects: str
    trainingMode: str

    scienceLabsAvailable: str
    numberOfLabs: str

    facultyCount: str
    facultySubjectExpertise: str



class ECE(BaseModel):
    instituteName: str
    registrationName: str

    courseOffered: str
    trainingMode: str
    courseDuration: str

    labAvailable: str
    devices: str

    trainersCount: str
    specialization: str


class MEDICAL(BaseModel):
    instituteName: str
    registrationNumber: str
    yearOfEstablishment: str

    medicalCourseOffered: str
    trainingMode: str
    courseDuration: str
    batchStrength: str

    hospitalAttached: str
    numberOfBeds: str
    labFacility: str
    equipmentAvailable: str

    numberOfDoctors: str
    doctorQualification: str
    specializationsAvailable: str
    


class IT(BaseModel):
    instituteName: str
    registrationNumber: str
    yearOfEstablishment: str

    itCoursesOffered: str
    trainingMode: str
    courseDuration: str
    batchStrength: str

    computerLabAvailable: str
    numberOfComputers: str
    internetFacility: str
    softwareTools: str

    numberOfTrainers: str
    trainerQualification: str
    technologiesKnown: str
    

class MCA(BaseModel):
    instituteName: str
    registrationNumber: str
    yearOfEstablishment: str

    mcaCourseOffered: str
    trainingMode: str
    courseDuration: str
    batchStrength: str

    computerLabAvailable: str
    numberOfComputers: str
    internetFacility: str
    softwareTools: str

    numberOfFaculty: str
    facultyQualification: str
    programmingLanguagesCovered: str


class EEE(BaseModel):
    instituteName: str
    registrationName: str
    establishmentYear: str

    courseOffered: str
    trainingMode: str
    courseDuration: str
    resourse: str  

    eeeLab: str

    trainersCount: str
    specialization: str


class Course(BaseModel):
    courseId: str
    courseName: str
    category: str
    description: str
    level: str

    duration: str
    totalHours: str
    startDate: str
    endDate: str
    schedule: str

    trainer: str
    prerequisites: str
    language: str
    trainingMode: str
    certificationProvided: str

    batchSize: str
    minEnrollment: str
    maxEnrollment: str
    totalEnrolled: str

    courseFee: str
    feeType: str
    discount: str
    tax: str

    courseStatus: str
    rating: str
    lastUpdated: str

    syllabus: str
    learningOutcomes: str
    remarks: str
    
    
from pydantic import BaseModel

class Trainer(BaseModel):
    trainerId: str
    trainerName: str
    gender: str
    dob: str

    qualification: str
    specialization: str
    certifications: str
    totalExperience: str
    industryExperience: str

    coursesAssigned: str
    subjectsHandled: str
    batchCount: str
    trainingMode: str
    sessionType: str

    studentsTrained: str
    feedbackRating: str
    performanceGrade: str
    lastEvaluationDate: str

    email: str
    mobile: str
    alternateMobile: str

    joiningDate: str
    employmentType: str
    salary: str
    status: str

    address: str
    remarks: str
    
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