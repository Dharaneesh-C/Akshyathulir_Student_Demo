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
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Menu as MenuIcon,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TodayIcon from "@mui/icons-material/Today";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

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

const Certificates = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    batchYear: "",
    courseName: "",
    trainerName: "",

    certificationId: "",
    certificationName: "",
    certificationType: "",
    certificateLevel: "",

    issueDate: "",
    expiryDate: "",
    certificateStatus: "",

    verificationCode: "",
    certificateUrl: "",
    issuedBy: "",
    authorizedSignatory: "",

    grade: "",
    assessmentResult: "",

    remarks: "",
    reissueReason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("Certification Submitted Successfully");
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
                  <WorkspacePremiumIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Total Certifications Issued
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
              Certificates Generated
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
                  Certificates Issued Today
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
              Certificates Generated Today
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
                  <VerifiedUserIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Verification Requests
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
              Verified Certificates
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
                  Certification Growth
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
      {/* ===== MAIN CONTENT ===== */}
      <Container maxWidth="lg" sx={{ backgroundColor: "#f3f6f3", p: 4 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
        >
          Student Certification Form
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
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Batch / Academic Year"
                  name="batchYear"
                  value={formData.batchYear}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Course Name"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Trainer Name"
                  name="trainerName"
                  value={formData.trainerName}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Certification Details */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Certification Details</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Certification ID"
                  name="certificationId"
                  value={formData.certificationId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Certification Name"
                  name="certificationName"
                  value={formData.certificationName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  fullWidth
                  name="certificationType"
                  value={formData.certificationType}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Certification Type"}
                >
                  <MenuItem value="">Certification Type</MenuItem>
                  <MenuItem value="Course Completion">
                    Course Completion
                  </MenuItem>
                  <MenuItem value="Merit">Merit</MenuItem>
                  <MenuItem value="Internship">Internship</MenuItem>
                  <MenuItem value="Skill">Skill</MenuItem>
                </Select>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  fullWidth
                  name="certificateLevel"
                  value={formData.certificateLevel}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Certificate Level"}
                >
                  <MenuItem value="">Certificate Level</MenuItem>
                  <MenuItem value="Basic">Basic</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                  <MenuItem value="Professional">Professional</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Issue & Validity */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Issue & Validity</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  type="date"
                  fullWidth
                  label="Issue Date"
                  InputLabelProps={{ shrink: true }}
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  type="date"
                  fullWidth
                  label="Expiry Date"
                  InputLabelProps={{ shrink: true }}
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Select
                  fullWidth
                  name="certificateStatus"
                  value={formData.certificateStatus}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Certificate Status"}
                >
                  <MenuItem value="">Certificate Status</MenuItem>
                  <MenuItem value="Issued">Issued</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Revoked">Revoked</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Verification */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Verification & Tracking</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Verification Code / QR Code"
                  name="verificationCode"
                  value={formData.verificationCode}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Certificate URL / Download Link"
                  name="certificateUrl"
                  value={formData.certificateUrl}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Issued By (Institute Name)"
                  name="issuedBy"
                  value={formData.issuedBy}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Authorized Signatory"
                  name="authorizedSignatory"
                  value={formData.authorizedSignatory}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Performance & Additional Info */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Performance & Additional Information</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Grade / Score"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Assessment Result"
                  name="assessmentResult"
                  value={formData.assessmentResult}
                  onChange={handleChange}
                />
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
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Re-issue Reason (if applicable)"
                  name="reissueReason"
                  value={formData.reissueReason}
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

export default Certificates;
