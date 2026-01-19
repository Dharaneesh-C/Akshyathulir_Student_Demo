import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Menu as MenuIcon,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import TodayIcon from "@mui/icons-material/Today";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Avatar from "@mui/material/Avatar";

const styles = {
  header: {
    backgroundColor: "#0b5e00",
    color: "#fff",
    padding: "12px 20px",
    fontWeight: 600,
    borderRadius: "6px 6px 0 0",
  },
  card: {
    border: "1px solid #0b5e00",
    borderRadius: "6px",
    mb: 4,
  },
};

const Placements = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    batchYear: "",
    programName: "",
    department: "",

    companyName: "",
    companyIndustry: "",
    companyLocation: "",
    hrName: "",
    hrContact: "",
    hrEmail: "",

    jobRole: "",
    employmentType: "",
    jobLocation: "",
    workMode: "",

    ctc: "",
    salary: "",
    offerLetterDate: "",
    joiningDate: "",
    bond: "",
    bondDuration: "",

    placementDate: "",
    placementStatus: "",
    offerAcceptance: "",

    selectionRound: "",
    placementSource: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("Placement Details Submitted Successfully");
  };

  return (
    <>
      {/* ===== TOP HEADER ===== */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#0b5e00" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Training Institute Dashboard
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* ===== Card ===== */}
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
                  <BusinessCenterIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Total Placement
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
              Completed
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
                  <PersonIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Students Placed
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
              Unique Students
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
                  <TodayIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Placements Today
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
              Planned
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
                  <CheckCircleIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Placement Success Rate
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
      {/* ===== PLACEMENT FORM ===== */}
      <Container maxWidth="lg" sx={{ backgroundColor: "#f3f6f3", p: 4 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
        >
          Student Placement Form
        </Typography>

        {/* Student Details */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Student Details</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Student ID"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Student Name"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Batch / Academic Year"
                  name="batchYear"
                  value={formData.batchYear}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Course / Program Name"
                  name="programName"
                  value={formData.programName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Department / Stream"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Company Details */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Company Details</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Company Industry"
                  name="companyIndustry"
                  value={formData.companyIndustry}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Company Location"
                  name="companyLocation"
                  value={formData.companyLocation}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="HR Name"
                  name="hrName"
                  value={formData.hrName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="HR Contact Number"
                  name="hrContact"
                  value={formData.hrContact}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="HR Email ID"
                  name="hrEmail"
                  value={formData.hrEmail}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Job Details */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Job Details</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Job Role / Designation"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  fullWidth
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Employment Type"}
                >
                  <MenuItem value="">Employment Type</MenuItem>
                  <MenuItem value="Full-Time">Full-Time</MenuItem>
                  <MenuItem value="Internship">Internship</MenuItem>
                  <MenuItem value="Contract">Contract</MenuItem>
                </Select>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Job Location"
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  fullWidth
                  name="workMode"
                  value={formData.workMode}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Work Mode"}
                >
                  <MenuItem value="">Work Mode</MenuItem>
                  <MenuItem value="Onsite">Onsite</MenuItem>
                  <MenuItem value="Remote">Remote</MenuItem>
                  <MenuItem value="Hybrid">Hybrid</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Offer Details */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Offer Details</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Package (CTC)"
                  name="ctc"
                  value={formData.ctc}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Monthly Salary / Stipend"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  type="date"
                  fullWidth
                  label="Offer Letter Date"
                  InputLabelProps={{ shrink: true }}
                  name="offerLetterDate"
                  value={formData.offerLetterDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  type="date"
                  fullWidth
                  label="Joining Date"
                  InputLabelProps={{ shrink: true }}
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Select
                  fullWidth
                  name="bond"
                  value={formData.bond}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Bond / Service Agreement"}
                >
                  <MenuItem value="">Bond / Service Agreement</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Bond Duration (if applicable)"
                  name="bondDuration"
                  value={formData.bondDuration}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Placement Tracking */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Placement Tracking</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  type="date"
                  fullWidth
                  label="Placement Date"
                  InputLabelProps={{ shrink: true }}
                  name="placementDate"
                  value={formData.placementDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Select
                  fullWidth
                  name="placementStatus"
                  value={formData.placementStatus}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Placement Status"}
                >
                  <MenuItem value="">Placement Status</MenuItem>
                  <MenuItem value="Placed">Placed</MenuItem>
                  <MenuItem value="Offer Released">Offer Released</MenuItem>
                  <MenuItem value="Joined">Joined</MenuItem>
                  <MenuItem value="Not Joined">Not Joined</MenuItem>
                </Select>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Select
                  fullWidth
                  name="offerAcceptance"
                  value={formData.offerAcceptance}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Offer Acceptance Status"}
                >
                  <MenuItem value="">Offer Acceptance Status</MenuItem>
                  <MenuItem value="Accepted">Accepted</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Additional Information</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Selection Round Cleared"
                  name="selectionRound"
                  value={formData.selectionRound}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  fullWidth
                  name="placementSource"
                  value={formData.placementSource}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Placement Source"}
                >
                  <MenuItem value="">Placement Source</MenuItem>
                  <MenuItem value="Campus">Campus</MenuItem>
                  <MenuItem value="Off-Campus">Off-Campus</MenuItem>
                  <MenuItem value="Referral">Referral</MenuItem>
                </Select>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  multiline
                  rows={3}
                  fullWidth
                  label="Remarks / Notes"
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#0b5e00", px: 5, py: 1.5 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Placements;
