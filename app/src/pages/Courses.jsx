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
import Avatar from "@mui/material/Avatar";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ScheduleIcon from "@mui/icons-material/Schedule";
import VerifiedIcon from "@mui/icons-material/Verified";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import Api from "./api";

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

const Courses = () => {
  const initialFormState ={
    courseId: "",
    courseName: "",
    category: "",
    description: "",
    level: "",

    duration: "",
    totalHours: "",
    startDate: "",
    endDate: "",
    schedule: "",

    trainer: "",
    prerequisites: "",
    language: "",
    trainingMode: "",
    certificationProvided: "",

    batchSize: "",
    minEnrollment: "",
    maxEnrollment: "",
    totalEnrolled: "",

    courseFee: "",
    feeType: "",
    discount: "",
    tax: "",

    courseStatus: "",
    rating: "",
    lastUpdated: "",

    syllabus: "",
    learningOutcomes: "",
    remarks: "",
  };



   const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  // ✅ Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await Api.post("/courses", formData);


      alert("✅ Certification Submitted Successfully!\nID: " + res.data.id);

      // ✅ Clear form after submit
      setFormData(initialFormState);
    } catch (error) {
      console.log(error);
      alert("❌ Error while submitting certificate!");
    } finally {
      setLoading(false);
    }
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
                  <MenuBookIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Total Course
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
              Programs
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
                  <PlayCircleFilledIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Active Courses
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
              Live
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
                  <ScheduleIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Upcoming Course
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
                  <VerifiedIcon fontSize="small" />
                </Avatar>

                <Typography fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>
                  Certificated Courses
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

      {/* ===== FORM STARTS HERE ===== */}
     <form onSubmit={handleSubmit}>
       <Container maxWidth="lg" sx={{ backgroundColor: "#f3f6f3", p: 4 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#0b5e00", fontWeight: 700, mb: 4 }}
        >
          Course Management Form
        </Typography>

        {/* Basic Course Information */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Basic Course Information</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Course ID"
                  name="courseId"
                  value={formData.courseId}
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
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Course Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  multiline
                  rows={3}
                  fullWidth
                  label="Course Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  fullWidth
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Course Level"}
                >
                  <MenuItem value="">Course Level</MenuItem>
                  <MenuItem value="Beginner">Beginner</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Duration & Schedule */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Duration & Schedule</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Course Duration (Weeks / Months)"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Total Hours"
                  name="totalHours"
                  value={formData.totalHours}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  type="date"
                  fullWidth
                  label="Start Date"
                  InputLabelProps={{ shrink: true }}
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  type="date"
                  fullWidth
                  label="End Date"
                  InputLabelProps={{ shrink: true }}
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Select
                  fullWidth
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Class Schedule"}
                >
                  <MenuItem value="">Class Schedule</MenuItem>
                  <MenuItem value="Morning">Morning</MenuItem>
                  <MenuItem value="Evening">Evening</MenuItem>
                  <MenuItem value="Weekend">Weekend</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Academic & Training */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Academic & Training Details</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Trainer Assigned"
                  name="trainer"
                  value={formData.trainer}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Prerequisites"
                  name="prerequisites"
                  value={formData.prerequisites}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Course Language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  fullWidth
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
              <Grid size={{ xs: 12 }}>
                <Select
                  fullWidth
                  name="certificationProvided"
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

        {/* Enrollment */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Enrollment Details</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="Batch Size"
                  name="batchSize"
                  value={formData.batchSize}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="Minimum Enrollment"
                  name="minEnrollment"
                  value={formData.minEnrollment}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="Maximum Enrollment"
                  name="maxEnrollment"
                  value={formData.maxEnrollment}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="Total Enrolled Students"
                  name="totalEnrolled"
                  value={formData.totalEnrolled}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Fee Structure */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Fee Structure</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="Course Fee"
                  name="courseFee"
                  value={formData.courseFee}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Select
                  fullWidth
                  name="feeType"
                  value={formData.feeType}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Fee Type"}
                >
                  <MenuItem value="">Fee Type</MenuItem>
                  <MenuItem value="One-time">One-time</MenuItem>
                  <MenuItem value="Installments">Installments</MenuItem>
                </Select>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="Discount (%)"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  fullWidth
                  label="Tax / GST"
                  name="tax"
                  value={formData.tax}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Status & Tracking */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Course Status & Tracking</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Select
                  fullWidth
                  name="courseStatus"
                  value={formData.courseStatus}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(v) => v || "Course Status"}
                >
                  <MenuItem value="">Course Status</MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                  <MenuItem value="Upcoming">Upcoming</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  fullWidth
                  label="Course Rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  type="date"
                  fullWidth
                  label="Last Updated Date"
                  InputLabelProps={{ shrink: true }}
                  name="lastUpdated"
                  value={formData.lastUpdated}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card sx={styles.card}>
          <Box sx={styles.header}>Additional Information</Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Course Syllabus (Upload / Link)"
                  name="syllabus"
                  value={formData.syllabus}
                  onChange={handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  multiline
                  rows={3}
                  fullWidth
                  label="Learning Outcomes"
                  name="learningOutcomes"
                  value={formData.learningOutcomes}
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
     </form>
    </>
  );
};

export default Courses;
