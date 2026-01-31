import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

import Api from "./api";

/* ---------- Styles ---------- */
const styles = {
  header: {
    backgroundColor: "#0b5e00",
    color: "#fff",
    padding: "12px 20px",
    fontWeight: 600,
    borderRadius: "6px 6px 0 0",
    textAlign: "left",
  },
  card: {
    border: "1px solid #0b5e00",
    borderRadius: "6px",
    marginBottom: 5,
  },
};
const sectionHeaderStyle = {
  backgroundColor: "#006400",
  color: "#fff",
  padding: "10px 20px",
  fontWeight: 600,
  textAlign: "left",
};

const sectionBodyStyle = {
  border: "1px solid #ccc",
  borderTop: "none",
  padding: "20px",
  backgroundColor: "#fff",
};
const titleStyle = {
  fontSize: "32px",
  fontWeight: 600,
  color: "#006400",
  textAlign: "center",
  marginBottom: "30px",
};

const Allform = () => {
  const initialFormState = {
    instituteName: "",
    registrationName: "",
    establishmentYear: "",
    courseOffered: "",
    trainingMode: "",
    courseDuration: "",
    resourse: "",
    trainersCount: "",
    specialization: "",
    software: "",
    registrationNumber: "",
    yearOfEstablishment: "",
    cseCoursesOffered: "",
    programmingLanguages: "",
    numberOfComputers: "",
    facultyCount: "",
    facultyExpertise: "",
    mecCoursesOffered: "",
    mechanicalLabsAvailable: "",
    numberOfLabs: "",
    mechanicalFacultyCount: "",
    mechanicalFacultyExpertise: "",
    machinesTools: "",
    trainingType: "",
    workshopAvailable: "",
    numberOfMachines: "",
    facultySpecialization: "",
    address: "",
    emailid: "",
    districtcity: "",
    state: "",
    pincode: "",
    contactnumber: "",
    batchstrength: "",
    mootCourt: "",
    legalLibrary: "",
    classroomType: "",
    facultyQualification: "",
    IndustrycourtExperience: "",
    InternshipCourtInternshipAvailable: "",
    internshipPartners: "",
    certificationProvided: "",
    yearofestablishment: "",
    smartClassroom: "",
    computerLab: "",
    simulationLab: "",
    libraryResources: "",
    industryExperience: "",
    areasExpertise: "",
    placementAssistanceAvailable: "",
    topRecruiters: "",
    internshipProgramAvailable: "",
    averagePlacementPackage: "",
    aicteApprovalAvailable: "",
    universityAffiliation: "",
    scienceCoursesOffered: "",
    laboratorySubjects: "",
    scienceLabsAvailable: "",
    facultySubjectExpertise: "",
    labAvailable: "",
    devices: "",
    medicalCourseOffered: "",
    batchStrength: "",
    hospitalAttached: "",
    numberOfBeds: "",
    labFacility: "",
    equipmentAvailable: "",
    numberOfDoctors: "",
    doctorQualification: "",
    specializationsAvailable: "",
    itCoursesOffered: "",
    computerLabAvailable: "",
    internetFacility: "",
    softwareTools: "",
    numberOfTrainers: "",
    trainerQualification: "",
    technologiesKnown: "",
    mcaCourseOffered: "",
    numberOfFaculty: "",
    programmingLanguagesCovered: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const departmentApiMap = {
  arts: "/arts",
  cse: "/cse",
  it: "/it",
  mec: "/mec",
  civil: "/civil",
  eee: "/eee",
  ece: "/ece",
  mba: "/mba",
  mca: "/mca",
  science: "/science",
  law: "/law",
  medical: "/medical",
};

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!Department) {
    alert("❌ Please select a domain first!");
    return;
  }

  const apiPath = departmentApiMap[Department];

  if (!apiPath) {
    alert("❌ Invalid department selected!");
    return;
  }

  try {
    setLoading(true);

    const res = await Api.post(apiPath, {
      ...formData,
      department: Department,
    });

    alert(`✅ ${Department.toUpperCase()} form submitted successfully!`);

    setFormData(initialFormState);
    setDepartment("");
  } catch (error) {
    console.error(error.response?.data || error.message);
    alert("❌ Error while submitting form!");
  } finally {
    setLoading(false);
  }
};



  const [Department, setDepartment] = useState("");

  return (
    <>

      {/* ==== Card HEADER ===== */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          mt: 4,
          mb: 2,
        }}
      >
        <Card
          sx={{
            flex: { xs: "100%", sm: 1 },
            minWidth: { xs: "100%", sm: 240 },
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            bgcolor: "#f1f8e9",
          }}
        >
          <CardContent>
            {/* Header */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar
                  sx={{
                    bgcolor: "#e8f5e9",
                    color: "#2e7d32",
                    width: { xs: 36, sm: 40 },
                    height: { xs: 36, sm: 40 },
                  }}
                >
                  <GroupsIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Total Students
                </Typography>
              </Box>

              <Avatar
                sx={{
                  bgcolor: "#e8f5e9",
                  color: "#2e7d32",
                  width: 32,
                  height: 32,
                }}
              >
                <TrendingUpIcon fontSize="small" />
              </Avatar>
            </Box>

            {/* Count */}
            <Typography
              variant="h3"
              sx={{
                mt: 2,
                fontWeight: 700,
                color: "#2e7d32",
                fontSize: { xs: "1.8rem", sm: "2.5rem" },
              }}
            >
              24
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Registered
            </Typography>

            {/* Footer */}
            <Box display="flex" alignItems="center" gap={1} mt={2}>
              <Typography
                sx={{
                  fontSize: 13,
                  color: "#2e7d32",
                  fontWeight: 600,
                }}
              >
                +0 today
              </Typography>

              <Box
                sx={{
                  ml: "auto",
                  px: 1.2,
                  py: 0.4,
                  bgcolor: "#e8f5e9",
                  borderRadius: 1,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#2e7d32",
                }}
              >
                ↑ 0%
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: { xs: "100%", sm: 1 },
            minWidth: { xs: "100%", sm: 240 },
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            bgcolor: "#f1f8e9",
          }}
        >
          <CardContent>
            {/* Header */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar
                  sx={{
                    bgcolor: "#e8f5e9",
                    color: "#2e7d32",
                    width: { xs: 36, sm: 40 },
                    height: { xs: 36, sm: 40 },
                  }}
                >
                  <MenuBookIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Total Courses
                </Typography>
              </Box>

              <Avatar
                sx={{
                  bgcolor: "#e8f5e9",
                  color: "#2e7d32",
                  width: 32,
                  height: 32,
                }}
              >
                <TrendingUpIcon fontSize="small" />
              </Avatar>
            </Box>

            {/* Count */}
            <Typography
              variant="h3"
              sx={{
                mt: 2,
                fontWeight: 700,
                color: "#2e7d32",
                fontSize: { xs: "1.8rem", sm: "2.5rem" },
              }}
            >
              10
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Available
            </Typography>

            {/* Footer */}
            <Box display="flex" alignItems="center" gap={1} mt={2}>
              <Typography
                sx={{
                  fontSize: 13,
                  color: "#2e7d32",
                  fontWeight: 600,
                }}
              >
                +0 today
              </Typography>

              <Box
                sx={{
                  ml: "auto",
                  px: 1.2,
                  py: 0.4,
                  bgcolor: "#e8f5e9",
                  borderRadius: 1,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#2e7d32",
                }}
              >
                ↑ 0%
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: { xs: "100%", sm: 1 },
            minWidth: { xs: "100%", sm: 240 },
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            bgcolor: "#f1f8e9",
          }}
        >
          <CardContent>
            {/* Header */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar
                  sx={{
                    bgcolor: "#e8f5e9",
                    color: "#2e7d32",
                    width: { xs: 36, sm: 40 },
                    height: { xs: 36, sm: 40 },
                  }}
                >
                  <BusinessCenterIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Placed Students
                </Typography>
              </Box>

              <Avatar
                sx={{
                  bgcolor: "#e8f5e9",
                  color: "#2e7d32",
                  width: 32,
                  height: 32,
                }}
              >
                <TrendingUpIcon fontSize="small" />
              </Avatar>
            </Box>

            {/* Count */}
            <Typography
              variant="h3"
              sx={{
                mt: 2,
                fontWeight: 700,
                color: "#2e7d32",
                fontSize: { xs: "1.8rem", sm: "2.5rem" },
              }}
            >
              6
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Placed
            </Typography>

            {/* Footer */}
            <Box display="flex" alignItems="center" gap={1} mt={2}>
              <Typography
                sx={{
                  fontSize: 13,
                  color: "#2e7d32",
                  fontWeight: 600,
                }}
              >
                +0 today
              </Typography>

              <Box
                sx={{
                  ml: "auto",
                  px: 1.2,
                  py: 0.4,
                  bgcolor: "#e8f5e9",
                  borderRadius: 1,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#2e7d32",
                }}
              >
                ↑ 0%
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            flex: { xs: "100%", sm: 1 },
            minWidth: { xs: "100%", sm: 240 },
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            bgcolor: "#f1f8e9",
          }}
        >
          <CardContent>
            {/* Header */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar
                  sx={{
                    bgcolor: "#e8f5e9",
                    color: "#2e7d32",
                    width: { xs: 36, sm: 40 },
                    height: { xs: 36, sm: 40 },
                  }}
                >
                  <SignalCellularAltIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Placement Success Rate (%)
                </Typography>
              </Box>

              <Avatar
                sx={{
                  bgcolor: "#e8f5e9",
                  color: "#2e7d32",
                  width: 32,
                  height: 32,
                }}
              >
                <TrendingUpIcon fontSize="small" />
              </Avatar>
            </Box>

            {/* Count */}
            <Typography
              variant="h3"
              sx={{
                mt: 2,
                fontWeight: 700,
                color: "#2e7d32",
                fontSize: { xs: "1.8rem", sm: "2.5rem" },
              }}
            >
              8
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Certified
            </Typography>

            {/* Footer */}
            <Box display="flex" alignItems="center" gap={1} mt={2}>
              <Typography
                sx={{
                  fontSize: 13,
                  color: "#2e7d32",
                  fontWeight: 600,
                }}
              >
                +0 today
              </Typography>

              <Box
                sx={{
                  ml: "auto",
                  px: 1.2,
                  py: 0.4,
                  bgcolor: "#e8f5e9",
                  borderRadius: 1,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#2e7d32",
                }}
              >
                ↑ 0%
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {/* ================= SELECT DOMAIN ================= */}
      <Box sx={{ bgcolor: "#f4f6f9", py: 5 }}>
        <Container maxWidth="sm">
          <Card>
            <CardHeader
              title="Select Your Domain"
              sx={{ bgcolor: "#006400", color: "#fff", textAlign: "center" }}
            />
            <CardContent>
              <Select
                fullWidth
                size="small"
                value={Department}
                displayEmpty
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              >
                <MenuItem value="">-- Select Domain --</MenuItem>
                <MenuItem value="it">IT</MenuItem>
                <MenuItem value="ece">ECE</MenuItem>
                <MenuItem value="eee">EEE</MenuItem>
                <MenuItem value="mec">MEC</MenuItem>
                <MenuItem value="civil">CIVIL</MenuItem>
                <MenuItem value="mba">MBA</MenuItem>
                <MenuItem value="mca">MCA</MenuItem>
                <MenuItem value="science">SCIENCE</MenuItem>
                <MenuItem value="arts">ARTS</MenuItem>
                <MenuItem value="law">LAW</MenuItem>
                <MenuItem value="medical">MEDICAL</MenuItem>
                <MenuItem value="cse">CSE</MenuItem>
              </Select>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* ================= All Form ================= */}

      {/* ================= Arts================= */}

      {Department === "arts" && (
        <form onSubmit={handleSubmit}>
          <Box sx={{ backgroundColor: "#f3f6f3", minHeight: "100vh", py: 5 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
            >
              Art Department Form
            </Typography>

            <Card sx={styles.card}>
              <Box sx={styles.header}>Institute Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Institute Name"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Registration Name"
                      name="registrationName"
                      value={formData.registrationName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Year of Establishment"
                      name="establishmentYear"
                      value={formData.establishmentYear}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={styles.card}>
              <Box sx={styles.header}>Art Training Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="courseOffered"
                      value={formData.courseOffered}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="">Courses Offered</MenuItem>
                      <MenuItem value="History">History</MenuItem>
                      <MenuItem value="Economics">Economics</MenuItem>
                      <MenuItem value="Sociology">Sociology</MenuItem>
                      <MenuItem value="Psychology">Psychology</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="trainingMode"
                      value={formData.trainingMode}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Training Mode"}
                    >
                      <MenuItem value="">Training Mode</MenuItem>
                      <MenuItem value="Online">Online</MenuItem>
                      <MenuItem value="Offline">Offline</MenuItem>
                      <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Course Duration"
                      name="courseDuration"
                      value={formData.courseDuration}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Batch Resourse"
                      name="resourse"
                      value={formData.resourse}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={styles.card}>
              <Box sx={styles.header}>Infrastructure</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Teaching Aids/Resources"
                      value={formData.software}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Teaching Aids/Resources"}
                    >
                      <MenuItem value="">Teaching Aids/Resources</MenuItem>
                      <MenuItem value="Projectors">Projectors</MenuItem>
                      <MenuItem value="Smart Boards">Smart Boards</MenuItem>
                      <MenuItem value="Library">Library</MenuItem>
                      <MenuItem value="Audio-Visual Aids">
                        Audio-Visual Aids
                      </MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={styles.card}>
              <Box sx={styles.header}>Trainer Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Number of Faculty"
                      name="trainersCount"
                      value={formData.trainersCount}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || " Arts Specialization"}
                    >
                      <MenuItem value=""> Arts Specialization</MenuItem>
                      <MenuItem value="History">History</MenuItem>
                      <MenuItem value="Literature">Literature</MenuItem>
                      <MenuItem value="Political Science">
                        Political Science
                      </MenuItem>
                      <MenuItem value="Philosophy">Philosophy</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

           <Box textAlign="center" mt={4}>
                       <Button
                         type="submit"
                         variant="contained"
                         disabled={loading}
                         sx={{
                           backgroundColor: "#0b5e00",
                           px: 5,
                           py: 1.5,
                           "&:hover": { backgroundColor: "#094b00" },
                         }}
                       >
                         {loading ? "Submitting..." : "Submit"}
                       </Button>
                     </Box>
          </Container>
        </Box>
          </form>
      )}

      {/* ================= CSE ================= */}
      {Department === "cse" && (
        <form onSubmit={handleSubmit}>
          <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh", py: 5 }}>
          <Container>
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "#006400", mb: 4 }}
            >
              CSE Institute Form
            </Typography>

            <form onSubmit={handleSubmit}>
              {/* Institute Details */}
              <Box mb={6}>
                <Box sx={sectionHeaderStyle}>Institute Details</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={4}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Institute Name"
                        name="instituteName"
                        value={formData.instituteName}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Registration Number"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        type="number"
                        label="Year of Establishment"
                        name="yearOfEstablishment"
                        value={formData.yearOfEstablishment}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              {/* Training Details */}
              <Box mb={4}>
                <Box sx={sectionHeaderStyle}>CSE Training Details</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="CSE Courses Offered"
                        name="cseCoursesOffered"
                        value={formData.cseCoursesOffered}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Programming Languages"
                        name="programmingLanguages"
                        value={formData.programmingLanguages}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Select
                        fullWidth
                        size="small"
                        displayEmpty
                        name="trainingMode"
                        value={formData.trainingMode}
                        onChange={handleChange}
                        required
                      >
                        <MenuItem value="">Training Mode</MenuItem>
                        <MenuItem value="Offline">Offline</MenuItem>
                        <MenuItem value="Online">Online</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              {/* Infrastructure */}
              <Box mb={4}>
                <Box sx={sectionHeaderStyle}>Infrastructure</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Select
                        fullWidth
                        size="small"
                        displayEmpty
                        name="Computer Labs Available"
                        value={formData.trainingMode}
                        onChange={handleChange}
                        required
                      >
                        <MenuItem value="">Computer Labs Available</MenuItem>
                        <MenuItem value="Offline">Yes</MenuItem>
                        <MenuItem value="Online">No</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        type="number"
                        label="Number of Computers"
                        name="numberOfComputers"
                        value={formData.numberOfComputers}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              {/* Faculty */}
              <Box mb={4}>
                <Box sx={sectionHeaderStyle}>Faculty Details</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        type="number"
                        label="Faculty Count"
                        name="facultyCount"
                        value={formData.facultyCount}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Faculty Expertise"
                        name="facultyExpertise"
                        value={formData.facultyExpertise}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              <Box textAlign="center" mt={4}>
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            sx={{
                              backgroundColor: "#0b5e00",
                              px: 5,
                              py: 1.5,
                              "&:hover": { backgroundColor: "#094b00" },
                            }}
                          >
                            {loading ? "Submitting..." : "Submit"}
                          </Button>
                        </Box>
            </form>
          </Container>
        </Box>
          </form>
      )}

      {/* ================= MEC ================= */}
      {Department === "mec" && (
       <form onSubmit={handleSubmit}>
         <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh", py: 5 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#006400", mb: 4 }}
          >
            Mechanical (MEC) Institute Form
          </Typography>
          <Container>
            <form onSubmit={handleSubmit}>
              {/* Institute Details */}
              <Box mb={6}>
                <Box sx={sectionHeaderStyle}>Institute Details</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={4}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Institute Name"
                        name="instituteName"
                        value={formData.instituteName}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Registration Number"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        type="number"
                        label="Year of Establishment"
                        name="yearOfEstablishment"
                        value={formData.yearOfEstablishment}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              {/* Mechanical Training Details */}
              <Box mb={4}>
                <Box sx={sectionHeaderStyle}>Mechanical Training Details</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Mechanical Courses Offered"
                        name="mecCoursesOffered"
                        value={formData.mecCoursesOffered}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Machines / Tools Available"
                        name="machinesTools"
                        value={formData.machinesTools}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Select
                        fullWidth
                        
                        name="trainingType"
                        value={formData.trainingType || ""}
                        onChange={handleChange}
                        displayEmpty
                        required
                      >
                        <MenuItem value="" disabled>
                          Training Type
                        </MenuItem>

                        <MenuItem value="Theory">Theory</MenuItem>
                        <MenuItem value="Practical">Practical</MenuItem>
                        <MenuItem value="Both">Theory + Practical</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              {/* Infrastructure */}
              <Box mb={4}>
                <Box sx={sectionHeaderStyle}>Workshop Infrastructure</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Select
                        fullWidth
                        
                        displayEmpty
                        name="workshopAvailable"
                        value={formData.workshopAvailable || ""}
                        onChange={handleChange}
                        required
                      >
                        <MenuItem value="">Workshop Available</MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        type="number"
                        label="Number of Machines"
                        name="numberOfMachines"
                        value={formData.numberOfMachines}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              {/* Faculty */}
              <Box mb={4}>
                <Box sx={sectionHeaderStyle}>Faculty Details</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        type="number"
                        label="Faculty Count"
                        name="facultyCount"
                        value={formData.facultyCount}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Faculty Specialization"
                        name="facultySpecialization"
                        value={formData.facultySpecialization}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              <Box textAlign="center" mt={4}>
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            sx={{
                              backgroundColor: "#0b5e00",
                              px: 5,
                              py: 1.5,
                              "&:hover": { backgroundColor: "#094b00" },
                            }}
                          >
                            {loading ? "Submitting..." : "Submit"}
                          </Button>
                        </Box>
            </form>
          </Container>
        </Box>
        </form>
      )}

      {/* ================= Law ================= */}
        {Department === "law" && (
        <form onSubmit={handleSubmit}>  
        <Box sx={{ bgcolor: "#f4f6f9", minHeight: "100vh", py: 5 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
            >
              LAW Department Form
            </Typography>

            {/* Institute Details */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Institute Details</Box>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Institute Name"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Registration Name"
                      name="registrationName"
                      value={formData.registrationName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Year of Establishment"
                      name="yearOfEstablishment"
                      value={formData.yearOfEstablishment}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="District / City"
                      name="district/city"
                      value={formData.districtcity}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Contact Number"
                      name="contactnumber"
                      value={formData.contactnumber}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Email ID"
                      name="emailid"
                      value={formData.emailid}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Training Details */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Law Training Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="courseOffered"
                      value={formData.courseOffered}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="">Law Courses Offered</MenuItem>
                      <MenuItem value="LLB">LLB</MenuItem>
                      <MenuItem value="LLM">LLM</MenuItem>
                      <MenuItem value="Corporate Law">Corporate Law</MenuItem>
                      <MenuItem value="Criminal Law">Criminal Law</MenuItem>
                      <MenuItem value="Cyber Law">Cyber Law</MenuItem>
                      <MenuItem value="IPR">IPR</MenuItem>
                      <MenuItem value="Constitutional Law">
                        Constitutional Law
                      </MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="trainingMode"
                      value={formData.trainingMode}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Training Mode"}
                    >
                      <MenuItem value="">Training Mode</MenuItem>
                      <MenuItem value="Online">Online</MenuItem>
                      <MenuItem value="Offline">Offline</MenuItem>
                      <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Course Duration"
                      name="courseDuration"
                      value={formData.courseDuration}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Batch Strength"
                      name="batchstrength"
                      value={formData.batchstrength}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Lab Infrastructure */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Infrastructure & Resources</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="mootCourt"
                      value={formData.mootCourt}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Moot Court Facility"}
                    >
                      <MenuItem value="">
                        <em>Moot Court Facility</em>
                      </MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="legalLibrary"
                      value={formData.legalLibrary}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Legal Library Available"}
                    >
                      <MenuItem value="">Legal Library Available</MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="trainingMode"
                      value={formData.trainingMode}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Online Legal Database Access"}
                    >
                      <MenuItem value="">Online Legal Database Access</MenuItem>
                      <MenuItem value="Manupatra">Manupatra</MenuItem>
                      <MenuItem value="SCC Online">SCC Online</MenuItem>
                      <MenuItem value="Westlaw">Westlaw</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="classroomType"
                      value={formData.classroomType}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Classroom Type"}
                    >
                      <MenuItem value="">Classroom Type</MenuItem>
                      <MenuItem value="Smart Classroom ">
                        Smart Classroom{" "}
                      </MenuItem>
                      <MenuItem value="Traditional">Traditional</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Trainer Details */}
            <Card sx={styles.card}>
              <Box sx={styles.header}> Faculty Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Number of Law Faculty"
                      name="facultyCount"
                      value={formData.facultyCount}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Faculty Qualification"
                      value={formData.facultyQualification}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Faculty Qualification"}
                    >
                      <MenuItem value="">Faculty Qualification</MenuItem>
                      <MenuItem value="LLB">LLB</MenuItem>
                      <MenuItem value="LLM">LLM</MenuItem>
                      <MenuItem value="PhD">PhD</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      label="Industry / Court Experience (Years)"
                      name="IndustrycourtExperience(Years)"
                      value={formData.IndustrycourtExperience}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Specialization"}
                    >
                      <MenuItem value="">Specialization</MenuItem>
                      <MenuItem value="Corporate ">Corporate </MenuItem>
                      <MenuItem value="Criminal">Criminal</MenuItem>
                      <MenuItem value="Constitutional">Constitutional</MenuItem>
                      <MenuItem value="Cyber">Cyber</MenuItem>
                      <MenuItem value="IPR">IPR</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={styles.card}>
              <Box sx={styles.header}>Internship & Certification</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Internship / Court Internship Available "
                      value={formData.InternshipCourtInternshipAvailable}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) =>
                        v || "Internship / Court Internship Available "
                      }
                    >
                      <MenuItem value="">
                        Internship / Court Internship Available{" "}
                      </MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Internship Partners"
                      value={formData.internshipPartners}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Internship Partners"}
                    >
                      <MenuItem value="">Internship Partners</MenuItem>
                      <MenuItem value="Court">Court</MenuItem>
                      <MenuItem value=" Law Firms">Law Firms</MenuItem>
                      <MenuItem value="Advocates">Advocates</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Certification Provided"
                      value={formData.certificationProvided}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Certification Provided"}
                    >
                      <MenuItem value="">Certification Provided</MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Submit */}
            <Box textAlign="center" mt={4}>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={loading}
                          sx={{
                            backgroundColor: "#0b5e00",
                            px: 5,
                            py: 1.5,
                            "&:hover": { backgroundColor: "#094b00" },
                          }}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </Button>
                      </Box>
          </Container>

        </Box>
        </form>
      )}
      {/* ================= Civil ================= */}
      {Department === "civil" && (
        <form onSubmit={handleSubmit}>
           <Box sx={{ bgcolor: "#f4f6f9", minHeight: "100vh", py: 5 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
            >
              Civil Department Form
            </Typography>

            {/* Institute Details */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Institute Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Institute Name"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Registration Name"
                      name="registrationName"
                      value={formData.registrationName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Year of Establishment"
                      name="establishmentYear"
                      value={formData.establishmentYear}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Training Details */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Civil Training Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="courseOffered"
                      value={formData.courseOffered}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Courses Offered"}
                    >
                      <MenuItem value="">Courses Offered</MenuItem>
                      <MenuItem value="AutoCAD">AutoCAD</MenuItem>
                      <MenuItem value="STAAD">STAAD</MenuItem>
                      <MenuItem value="ETABS">ETABS</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="trainingMode"
                      value={formData.trainingMode}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Training Mode"}
                    >
                      <MenuItem value="">Training Mode</MenuItem>
                      <MenuItem value="Online">Online</MenuItem>
                      <MenuItem value="Offline">Offline</MenuItem>
                      <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Course Duration"
                      name="courseDuration"
                      value={formData.courseDuration}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Infrastructure */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Civil Infrastructure</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="software"
                      value={formData.software}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Civil Software / Tools"}
                    >
                      <MenuItem value="">Civil Software / Tools</MenuItem>
                      <MenuItem value="AutoCAD">AutoCAD</MenuItem>
                      <MenuItem value="STAAD">STAAD</MenuItem>
                      <MenuItem value="ETABS">ETABS</MenuItem>
                      <MenuItem value="Primavera">Primavera</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Trainer Details */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Trainer Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Number of Civil Trainers"
                      name="trainersCount"
                      value={formData.trainersCount}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Specialization"}
                    >
                      <MenuItem value="">Specialization</MenuItem>
                      <MenuItem value="Structural">Structural</MenuItem>
                      <MenuItem value="Geotechnical">Geotechnical</MenuItem>
                      <MenuItem value="Transportation">Transportation</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

           <Box textAlign="center" mt={4}>
                       <Button
                         type="submit"
                         variant="contained"
                         disabled={loading}
                         sx={{
                           backgroundColor: "#0b5e00",
                           px: 5,
                           py: 1.5,
                           "&:hover": { backgroundColor: "#094b00" },
                         }}
                       >
                         {loading ? "Submitting..." : "Submit"}
                       </Button>
                     </Box>
          </Container>
        </Box>
          </form>
      )}

      {/* ================= Mba ================= */}
      {Department === "mba" && (
        <form onSubmit={handleSubmit}>
          <Box sx={{ backgroundColor: "#f3f6f3", minHeight: "100vh", py: 5 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
            >
              MBA Department Form
            </Typography>

            {/* Institute Details */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Institute Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Institute Name"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Registration Name"
                      name="registrationName"
                      value={formData.registrationName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Year of Establishment"
                      name="yearofestablishment"
                      value={formData.yearofestablishment}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="District / City"
                      name="district/city"
                      value={formData.districtcity}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Contact Number"
                      name="contactnumber"
                      value={formData.contactnumber}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Email ID"
                      name="emailid"
                      value={formData.emailid}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Training Details */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>MBA Training Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="">MBA Specializations Offered</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="HR">HR</MenuItem>
                      <MenuItem value="Marketing">Marketing</MenuItem>
                      <MenuItem value="Operations">Operations</MenuItem>
                      <MenuItem value="Business Analytics">
                        Business Analytics
                      </MenuItem>
                      <MenuItem value="Entrepreneurship">
                        Entrepreneurship
                      </MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="trainingMode"
                      value={formData.trainingMode}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Training Mode"}
                    >
                      <MenuItem value="">Training Mode</MenuItem>
                      <MenuItem value="Online">Online</MenuItem>
                      <MenuItem value="Offline">Offline</MenuItem>
                      <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Course Duration"
                      name="courseDuration"
                      value={formData.courseDuration}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      size="small"
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      label="Batch Strength"
                      name="batchstrength"
                      value={formData.batchstrength}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Lab Infrastructure */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Infrastructure & Facilities</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="smartClassroom"
                      value={formData.smartClassroom}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Smart Classrooms Available"}
                    >
                      <MenuItem value="">
                        <em>Smart Classrooms Available</em>
                      </MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="computerLab"
                      value={formData.computerLab}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Computer Lab Available "}
                    >
                      <MenuItem value="">Computer Lab Available </MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="simulationLab"
                      value={formData.simulationLab}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) =>
                        v || "Business Simulation Lab Available"
                      }
                    >
                      <MenuItem value="">
                        Business Simulation Lab Available
                      </MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="libraryResources"
                      value={formData.libraryResources}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) =>
                        v || "Library & E-Resources Available "
                      }
                    >
                      <MenuItem value="">
                        Library & E-Resources Available
                      </MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Trainer Details */}
            <Card sx={styles.card}>
              <Box sx={styles.header}> Faculty Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Number of MBA Faculty"
                      name="facultyCount"
                      value={formData.facultyCount}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Faculty Qualification"
                      value={formData.facultyQualification}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Faculty Qualification"}
                    >
                      <MenuItem value="">Faculty Qualification</MenuItem>
                      <MenuItem value="MBA">MBA</MenuItem>
                      <MenuItem value="Industry Experience">
                        Industry Experience
                      </MenuItem>
                      <MenuItem value="PhD">PhD</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Industry Experience (Years)"
                      name="industryExperience"
                      value={formData.industryExperience}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Areas of Expertise"
                      value={formData.areasExpertise}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Areas of Expertise"}
                    >
                      <MenuItem value="">Areas of Expertise</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="HR">HR</MenuItem>
                      <MenuItem value="Marketing">Marketing</MenuItem>
                      <MenuItem value="Operations">Operations</MenuItem>
                      <MenuItem value="Strategy">Strategy</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={styles.card}>
              <Box sx={styles.header}>Placement & Industry Exposure</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Placement Assistance Available "
                      value={formData.placementAssistanceAvailable}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Placement Assistance Available"}
                    >
                      <MenuItem value="">
                        Placement Assistance Available
                      </MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Top Recruiters"
                      name="topRecruiters"
                      value={formData.topRecruiters}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Internship Program Available "
                      value={formData.internshipProgramAvailable}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Internship Program Available"}
                    >
                      <MenuItem value="">Internship Program Available</MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Average Placement Package"
                      name="averagePlacementPackage"
                      value={formData.averagePlacementPackage}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card sx={styles.card}>
              <Box sx={styles.header}>Placement & Industry Exposure</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name=" AICTE Approval Available "
                      value={formData.aicteApprovalAvailable}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "AICTE Approval Available"}
                    >
                      <MenuItem value="">AICTE Approval Available</MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="University Affiliation"
                      name="universityAffiliation"
                      value={formData.universityAffiliation}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="Certification Provided "
                      value={formData.certificationProvided}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Certification Provided"}
                    >
                      <MenuItem value="">Certification Provided</MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Submit */}
            <Box textAlign="center" mt={4}>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={loading}
                          sx={{
                            backgroundColor: "#0b5e00",
                            px: 5,
                            py: 1.5,
                            "&:hover": { backgroundColor: "#094b00" },
                          }}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </Button>
                      </Box>
          </Container>
        </Box>
          </form>
      )}

      {/* ================= Science ================= */}
      {Department === "science" && (
        <form onSubmit={handleSubmit}>
          <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh", py: 5 }}>
          <Container>
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "#006400", mb: 4 }}
            >
              Science Institute Form
            </Typography>

            <form onSubmit={handleSubmit}>
              {/* Institute Details */}
              <Box mb={6}>
                <Box sx={sectionHeaderStyle}>Institute Details</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={4}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Institute Name"
                        name="instituteName"
                        value={formData.instituteName}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Registration Number"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        type="number"
                        label="Year of Establishment"
                        name="yearOfEstablishment"
                        value={formData.yearOfEstablishment}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              {/* Science Training Details */}
              <Box mb={4}>
                <Box sx={sectionHeaderStyle}>Science Training Details</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Science Courses Offered"
                        name="scienceCoursesOffered"
                        value={formData.scienceCoursesOffered}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Laboratory Subjects"
                        name="laboratorySubjects"
                        value={formData.laboratorySubjects}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Select
                        fullWidth
                        size="small"
                        displayEmpty
                        name="trainingMode"
                        value={formData.trainingMode}
                        onChange={handleChange}
                        required
                      >
                        <MenuItem value="">Training Mode</MenuItem>
                        <MenuItem value="Online">Online</MenuItem>
                        <MenuItem value="Offline">Offline</MenuItem>
                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              {/* Infrastructure */}
              <Box mb={4}>
                <Box sx={sectionHeaderStyle}>Laboratory Infrastructure</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Select
                        fullWidth
                        size="small"
                        displayEmpty
                        name="scienceLabsAvailable"
                        value={formData.scienceLabsAvailable || ""}
                        onChange={handleChange}
                        required
                      >
                        <MenuItem value="">Science Labs Available</MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        type="number"
                        label="Number of Laboratories"
                        name="numberOfLabs"
                        value={formData.numberOfLabs}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              {/* Faculty */}
              <Box mb={4}>
                <Box sx={sectionHeaderStyle}>Faculty Details</Box>
                <Box sx={sectionBodyStyle}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        type="number"
                        label="Faculty Count"
                        name="facultyCount"
                        value={formData.facultyCount}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            height: 50,
                          },
                        }}
                        size="small"
                        label="Faculty Subject Expertise"
                        name="facultySubjectExpertise"
                        value={formData.facultySubjectExpertise}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              <Box textAlign="center" mt={4}>
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            sx={{
                              backgroundColor: "#0b5e00",
                              px: 5,
                              py: 1.5,
                              "&:hover": { backgroundColor: "#094b00" },
                            }}
                          >
                            {loading ? "Submitting..." : "Submit"}
                          </Button>
                        </Box>
            </form>
          </Container>
        </Box>
          </form>
      )}

      {/* ================= ECE ================= */}
      {Department === "ece" && (
        <form onSubmit={handleSubmit}>
          <Box sx={{ bgcolor: "#f4f6f9", minHeight: "100vh", py: 5 }}>
          <Container maxWidth="lg" sx={{ backgroundColor: "#f3f6f3", p: 4 }}>
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
            >
              ECE Department Form
            </Typography>

            <Card sx={styles.card}>
              <Box sx={styles.header}>Institute Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Institute Name"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Registration Name"
                      name="registrationName"
                      value={formData.registrationName}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={styles.card}>
              <Box sx={styles.header}>Electronic Training Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="courseOffered"
                      value={formData.courseOffered}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="">Courses Offered</MenuItem>
                      <MenuItem value="Embedded Systems">
                        Embedded Systems
                      </MenuItem>
                      <MenuItem value="IoT">IoT</MenuItem>
                      <MenuItem value="Communication">Communication</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="trainingMode"
                      value={formData.trainingMode}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Training Mode"}
                    >
                      <MenuItem value="">Training Mode</MenuItem>
                      <MenuItem value="Online">Online</MenuItem>
                      <MenuItem value="Offline">Offline</MenuItem>
                      <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Course Duration"
                      name="courseDuration"
                      value={formData.courseDuration}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={styles.card}>
              <Box sx={styles.header}>Lab Infrastructure</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Electronics Lab Available"
                      name="labAvailable"
                      value={formData.labAvailable}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="devices"
                      value={formData.devices}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="">Devices</MenuItem>
                      <MenuItem value="Microcontrollers">
                        Microcontrollers
                      </MenuItem>
                      <MenuItem value="Sensors">Sensors</MenuItem>
                      <MenuItem value="Kits">Kits</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={styles.card}>
              <Box sx={styles.header}>Trainer Details</Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Number of ECE Trainers"
                      name="trainersCount"
                      value={formData.trainersCount}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Specialization Area"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Box textAlign="center" mt={4}>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={loading}
                          sx={{
                            backgroundColor: "#0b5e00",
                            px: 5,
                            py: 1.5,
                            "&:hover": { backgroundColor: "#094b00" },
                          }}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </Button>
                      </Box>
          </Container>
        </Box>
          </form>
      )}

      {/* ================= Medical ================= */}
      {Department === "medical" && (
        <form onSubmit={handleSubmit}>
          <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh", py: 4 }}>
          <Container maxWidth="lg">
            <Typography sx={titleStyle}>
              Medical Training Institute Form
            </Typography>

            {/* ---------- Institute Details ---------- */}
            <Box mb={4}>
              <Box sx={sectionHeaderStyle}>Institute Details</Box>
              <Box sx={sectionBodyStyle}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Institute Name"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Registration Number"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      type="number"
                      label="Year of Establishment"
                      name="yearOfEstablishment"
                      value={formData.yearOfEstablishment}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* ---------- Medical Training Details ---------- */}
            <Box mb={4}>
              <Box sx={sectionHeaderStyle}>Medical Training Details</Box>
              <Box sx={sectionBodyStyle}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Medical Course Offered"
                      name="medicalCourseOffered"
                      value={formData.medicalCourseOffered}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      label="Training Mode"
                      name="trainingMode"
                      value={formData.trainingMode}
                      onChange={handleChange}
                    >
                      <MenuItem value="Online">Online</MenuItem>
                      <MenuItem value="Offline">Offline</MenuItem>
                      <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Course Duration"
                      name="courseDuration"
                      value={formData.courseDuration}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      type="number"
                      label="Batch Strength"
                      name="batchStrength"
                      value={formData.batchStrength}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* ---------- Hospital & Infrastructure ---------- */}
            <Box mb={4}>
              <Box sx={sectionHeaderStyle}>Hospital & Infrastructure</Box>
              <Box sx={sectionBodyStyle}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      label="Hospital Attached"
                      name="hospitalAttached"
                      value={formData.hospitalAttached}
                      onChange={handleChange}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      type="number"
                      label="Number of Beds"
                      name="numberOfBeds"
                      value={formData.numberOfBeds}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      label="Lab Facility"
                      name="labFacility"
                      value={formData.labFacility}
                      onChange={handleChange}
                    >
                      <MenuItem value="Available">Available</MenuItem>
                      <MenuItem value="Not Available">Not Available</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Equipment Available"
                      name="equipmentAvailable"
                      value={formData.equipmentAvailable}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* ---------- Doctor / Faculty Details ---------- */}
            <Box mb={4}>
              <Box sx={sectionHeaderStyle}>Doctor / Faculty Details</Box>
              <Box sx={sectionBodyStyle}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      type="number"
                      label="Number of Doctors"
                      name="numberOfDoctors"
                      value={formData.numberOfDoctors}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Doctor Qualification"
                      name="doctorQualification"
                      value={formData.doctorQualification}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      multiline
                      minRows={2}
                      label="Specializations Available"
                      name="specializationsAvailable"
                      value={formData.specializationsAvailable}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* ---------- Button ---------- */}
            <Box textAlign="center" mt={4}>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={loading}
                          sx={{
                            backgroundColor: "#0b5e00",
                            px: 5,
                            py: 1.5,
                            "&:hover": { backgroundColor: "#094b00" },
                          }}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </Button>
                      </Box>
          </Container>
        </Box>
          </form>
      )}

      {/* ================= It ================= */}
      {Department === "it" && (
        <form onSubmit={handleSubmit}>
          <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh", py: 4 }}>
          <Container maxWidth="lg">
            <Typography sx={titleStyle}>IT Training Institute Form</Typography>
            <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh", py: 4 }}>
              <Container maxWidth="lg">
                {/* ---------- Institute Details ---------- */}
                <Box mb={4}>
                  <Box sx={sectionHeaderStyle}>Institute Details</Box>
                  <Box sx={sectionBodyStyle}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          label="Institute Name"
                          name="instituteName"
                          value={formData.instituteName}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          label="Registration Number"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          type="number"
                          label="Year of Establishment"
                          name="yearOfEstablishment"
                          value={formData.yearOfEstablishment}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                {/* ---------- IT Training Details ---------- */}
                <Box mb={4}>
                  <Box sx={sectionHeaderStyle}>IT Training Details</Box>
                  <Box sx={sectionBodyStyle}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          label="IT Courses Offered"
                          name="itCoursesOffered"
                          value={formData.itCoursesOffered}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          select
                          fullWidth
                          size="small"
                          label="Training Mode"
                          name="trainingMode"
                          value={formData.trainingMode}
                          onChange={handleChange}
                        >
                          <MenuItem value="Online">Online</MenuItem>
                          <MenuItem value="Offline">Offline</MenuItem>
                          <MenuItem value="Hybrid">Hybrid</MenuItem>
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          label="Course Duration"
                          name="courseDuration"
                          value={formData.courseDuration}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          type="number"
                          label="Batch Strength"
                          name="batchStrength"
                          value={formData.batchStrength}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                {/* ---------- IT Infrastructure ---------- */}
                <Box mb={4}>
                  <Box sx={sectionHeaderStyle}>IT Infrastructure</Box>
                  <Box sx={sectionBodyStyle}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          select
                          fullWidth
                          size="small"
                          label="Computer Lab Available"
                          name="computerLabAvailable"
                          value={formData.computerLabAvailable}
                          onChange={handleChange}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          type="number"
                          label="Number of Computers"
                          name="numberOfComputers"
                          value={formData.numberOfComputers}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          select
                          fullWidth
                          size="small"
                          label="Internet Facility"
                          name="internetFacility"
                          value={formData.internetFacility}
                          onChange={handleChange}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          label="Software / Tools Available"
                          multiline
                          minRows={2}
                          name="softwareTools"
                          value={formData.softwareTools}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                {/* ---------- Trainer Details ---------- */}
                <Box mb={4}>
                  <Box sx={sectionHeaderStyle}>Trainer Details</Box>
                  <Box sx={sectionBodyStyle}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          type="number"
                          label="Number of IT Trainers"
                          name="numberOfTrainers"
                          value={formData.numberOfTrainers}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          label="Trainer Qualification"
                          name="trainerQualification"
                          value={formData.trainerQualification}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextField
                          fullWidth
                          sx={{
                            "& .MuiInputBase-input": {
                              height: 50,
                            },
                          }}
                          size="small"
                          label="Technologies Known"
                          multiline
                          minRows={2}
                          name="technologiesKnown"
                          value={formData.technologiesKnown}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

                {/* ---------- Button ---------- */}
                <Box textAlign="center" mt={4}>
                            <Button
                              type="submit"
                              variant="contained"
                              disabled={loading}
                              sx={{
                                backgroundColor: "#0b5e00",
                                px: 5,
                                py: 1.5,
                                "&:hover": { backgroundColor: "#094b00" },
                              }}
                            >
                              {loading ? "Submitting..." : "Submit"}
                            </Button>
                          </Box>
              </Container>
            </Box>
          </Container>
        </Box>
          </form>
      )}

      {/* ================= Mca ================= */}
      {Department === "mca" && (
        <form onSubmit={handleSubmit}>
          <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh", py: 4 }}>
          <Container maxWidth="lg">
            <Typography sx={titleStyle}>MCA Training Institute Form</Typography>

            {/* ---------- Institute Details ---------- */}
            <Box mb={4}>
              <Box sx={sectionHeaderStyle}>Institute Details</Box>
              <Box sx={sectionBodyStyle}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Institute Name"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Register Number"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      type="number"
                      label="Year of Establishment"
                      name="yearOfEstablishment"
                      value={formData.yearOfEstablishment}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* ---------- MCA Training Details ---------- */}
            <Box mb={4}>
              <Box sx={sectionHeaderStyle}>MCA Training Details</Box>
              <Box sx={sectionBodyStyle}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="MCA Course Offered"
                      name="mcaCourseOffered"
                      value={formData.mcaCourseOffered}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      label="Training Mode"
                      name="trainingMode"
                      value={formData.trainingMode}
                      onChange={handleChange}
                    >
                      <MenuItem value="Online">Online</MenuItem>
                      <MenuItem value="Offline">Offline</MenuItem>
                      <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Course Duration"
                      name="courseDuration"
                      value={formData.courseDuration}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      type="number"
                      label="Batch Strength"
                      name="batchStrength"
                      value={formData.batchStrength}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* ---------- IT Infrastructure ---------- */}
            <Box mb={4}>
              <Box sx={sectionHeaderStyle}>IT Infrastructure</Box>
              <Box sx={sectionBodyStyle}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      label="Computer Lab Available"
                      name="computerLabAvailable"
                      value={formData.computerLabAvailable}
                      onChange={handleChange}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      type="number"
                      label="Number of Computers"
                      name="numberOfComputers"
                      value={formData.numberOfComputers}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      label="Internet Facility"
                      name="internetFacility"
                      value={formData.internetFacility}
                      onChange={handleChange}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      multiline
                      minRows={2}
                      label="Software / Tools"
                      name="softwareTools"
                      value={formData.softwareTools}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* ---------- Faculty Details ---------- */}
            <Box mb={4}>
              <Box sx={sectionHeaderStyle}>Faculty Details</Box>
              <Box sx={sectionBodyStyle}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      type="number"
                      label="Number of Faculty"
                      name="numberOfFaculty"
                      value={formData.numberOfFaculty}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Faculty Qualification"
                      name="facultyQualification"
                      value={formData.facultyQualification}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      multiline
                      minRows={2}
                      label="Programming Languages"
                      name="programmingLanguagesCovered"
                      value={formData.programmingLanguagesCovered}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* ---------- Button ---------- */}
            <Box textAlign="center" mt={4}>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={loading}
                          sx={{
                            backgroundColor: "#0b5e00",
                            px: 5,
                            py: 1.5,
                            "&:hover": { backgroundColor: "#094b00" },
                          }}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </Button>
                      </Box>
          </Container>
        </Box>
          </form>
      )}

      {/* ================= EEE ================= */}
      {Department === "eee" && (
        <form onSubmit={handleSubmit}>
          <Box sx={{ bgcolor: "#f4f6f9", minHeight: "100vh", py: 5 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
            >
              EEE Department Form
            </Typography>

            {/* ================= Institute Details ================= */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Institute Details</Box>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Institute Name"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Registration Name"
                      name="registrationName"
                      value={formData.registrationName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Year of Establishment"
                      name="establishmentYear"
                      value={formData.establishmentYear}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* ================= EEE Training Details ================= */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>EEE Training Details</Box>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="courseOffered"
                      value={formData.courseOffered}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="">Courses Offered</MenuItem>
                      <MenuItem value="Power Systems">Power Systems</MenuItem>
                      <MenuItem value="Electrical Machines">
                        Electrical Machines
                      </MenuItem>
                      <MenuItem value="Control Systems">
                        Control Systems
                      </MenuItem>
                      <MenuItem value="Power Electronics">
                        Power Electronics
                      </MenuItem>
                      <MenuItem value="PLC & SCADA">PLC & SCADA</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="trainingMode"
                      value={formData.trainingMode}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Training Mode"}
                    >
                      <MenuItem value="">Training Mode</MenuItem>
                      <MenuItem value="Online">Online</MenuItem>
                      <MenuItem value="Offline">Offline</MenuItem>
                      <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Course Duration"
                      placeholder="e.g. 6 Months"
                      name="courseDuration"
                      value={formData.courseDuration}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Batch Strength"
                      name="resourse"
                      value={formData.resourse}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* ================= EEE Infrastructure ================= */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>EEE Infrastructure</Box>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="eeeLab"
                      value={formData.software}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "Laboratories / Equipment"}
                    >
                      <MenuItem value="">Laboratories / Equipment</MenuItem>
                      <MenuItem value="Electrical Machines Lab">
                        Electrical Machines Lab
                      </MenuItem>
                      <MenuItem value="Power Electronics Lab">
                        Power Electronics Lab
                      </MenuItem>
                      <MenuItem value="Control Systems Lab">
                        Control Systems Lab
                      </MenuItem>
                      <MenuItem value="Simulation Lab">Simulation Lab</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* ================= Trainer Details ================= */}
            <Card sx={styles.card}>
              <Box sx={styles.header}>Trainer Details</Box>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiInputBase-input": {
                          height: 50,
                        },
                      }}
                      size="small"
                      label="Number of EEE Faculty"
                      name="trainersCount"
                      value={formData.trainersCount}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Select
                      fullWidth
                      size="small"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={(v) => v || "EEE Specialization"}
                    >
                      <MenuItem value="">EEE Specialization</MenuItem>
                      <MenuItem value="Power Systems">Power Systems</MenuItem>
                      <MenuItem value="Power Electronics">
                        Power Electronics
                      </MenuItem>
                      <MenuItem value="Control Systems">
                        Control Systems
                      </MenuItem>
                      <MenuItem value="Renewable Energy">
                        Renewable Energy
                      </MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* ================= Submit ================= */}
            <Box textAlign="center" mt={4}>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={loading}
                          sx={{
                            backgroundColor: "#0b5e00",
                            px: 5,
                            py: 1.5,
                            "&:hover": { backgroundColor: "#094b00" },
                          }}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </Button>
                      </Box>
          </Container>
        </Box>
          </form>
      )}
    </>
  );
};
export default Allform;
