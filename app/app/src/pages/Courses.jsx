import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Grid,
  IconButton,
  Chip,
  Dialog,
  MenuItem,
  InputAdornment,
  Stack,
  Divider,
} from "@mui/material";

import { Search, Close, Visibility, Edit, Delete } from "@mui/icons-material";
import Api from "./api";

/* -------------------- DATA -------------------- */
const courses_main = [
  {
    id: "CRS001",
    name: "FullStack Development",
    duration: "6 months",
    fees: "$2,500",
    trainer: "John Smith",
    status: "Active",
    enrolled: 45,
    schedule: "Mon - Fri | 9 AM - 11 AM",
    eligibility: "Basic programming knowledge",
    description:
      "Learn frontend and backend development using modern frameworks and tools.",
    syllabus: [
      "HTML, CSS, JavaScript",
      "React.js",
      "Node.js & Express",
      "MongoDB",
      "Project & Deployment",
    ],
    outcomes: [
      "Build full stack applications",
      "Deploy real-world projects",
      "Industry-ready skills",
    ],
  },

  {
    id: "CRS002",
    name: "Data Science & Analytics",
    duration: "8 months",
    fees: "$3,200",
    trainer: "Sarah Johnson",
    status: "Active",
    enrolled: 38,
    schedule: "Mon - Sat | 10 AM - 12 PM",
    eligibility: "Basic math & Python",
    description:
      "Master data analysis, visualization, and machine learning techniques.",
    syllabus: [
      "Python & NumPy",
      "Pandas & Visualization",
      "Statistics",
      "Machine Learning",
      "Capstone Project",
    ],
    outcomes: [
      "Analyze real datasets",
      "Build ML models",
      "Data Scientist career",
    ],
  },

  {
    id: "CRS003",
    name: "Mobile App Development",
    duration: "5 months",
    fees: "$2,800",
    trainer: "Mike Brown",
    status: "Active",
    enrolled: 32,
    schedule: "Mon - Fri | 2 PM - 4 PM",
    eligibility: "Basic Java or Kotlin",
    description:
      "Build Android & cross-platform mobile applications from scratch.",
    syllabus: [
      "UI/UX Basics",
      "Android Studio",
      "Kotlin",
      "API Integration",
      "Play Store Deployment",
    ],
    outcomes: [
      "Create Android apps",
      "Publish apps",
      "Mobile developer skills",
    ],
  },

  {
    id: "CRS004",
    name: "Cloud Computing (AWS)",
    duration: "4 months",
    fees: "$2,000",
    trainer: "Emily Davis",
    status: "Active",
    enrolled: 28,
    schedule: "Weekend | 10 AM - 1 PM",
    eligibility: "Basic networking knowledge",
    description: "Learn cloud infrastructure, deployment, and AWS services.",
    syllabus: [
      "Cloud Basics",
      "EC2 & S3",
      "IAM",
      "Cloud Security",
      "Deployment Projects",
    ],
    outcomes: [
      "AWS certification ready",
      "Deploy cloud apps",
      "Cloud engineer role",
    ],
  },

  {
    id: "CRS005",
    name: "Cyber Security",
    duration: "6 months",
    fees: "$3,000",
    trainer: "Alex Turner",
    status: "Active",
    enrolled: 40,
    schedule: "Mon - Fri | 11 AM - 1 PM",
    eligibility: "Basic networking",
    description: "Protect systems and networks from cyber threats.",
    syllabus: [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Firewalls",
      "Security Tools",
    ],
    outcomes: [
      "Cyber security analyst",
      "Ethical hacker skills",
      "Security certifications",
    ],
  },

  {
    id: "CRS006",
    name: "UI / UX Design",
    duration: "3 months",
    fees: "$1,800",
    trainer: "Jessica Lee",
    status: "Active",
    enrolled: 25,
    schedule: "Mon - Thu | 4 PM - 6 PM",
    eligibility: "Creativity & interest in design",
    description:
      "Design user-friendly and visually appealing digital products.",
    syllabus: [
      "Design Principles",
      "Figma",
      "Wireframing",
      "Prototyping",
      "Portfolio Project",
    ],
    outcomes: [
      "UI/UX designer role",
      "Design portfolio",
      "User-centered thinking",
    ],
  },

  {
    id: "CRS007",
    name: "Artificial Intelligence",
    duration: "7 months",
    fees: "$3,500",
    trainer: "Dr. Robert White",
    status: "Active",
    enrolled: 30,
    schedule: "Mon - Fri | 8 AM - 10 AM",
    eligibility: "Python & Math basics",
    description: "Learn AI concepts, algorithms, and real-world applications.",
    syllabus: [
      "AI Fundamentals",
      "Search Algorithms",
      "Neural Networks",
      "Deep Learning",
      "AI Projects",
    ],
    outcomes: [
      "AI engineer skills",
      "Build intelligent systems",
      "Advanced ML knowledge",
    ],
  },

  {
    id: "CRS008",
    name: "Digital Marketing",
    duration: "3 months",
    fees: "$1,500",
    trainer: "Rachel Green",
    status: "Active",
    enrolled: 50,
    schedule: "Weekend | 2 PM - 5 PM",
    eligibility: "Basic internet knowledge",
    description: "Promote brands and products using digital platforms.",
    syllabus: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Email Marketing",
      "Campaign Analytics",
    ],
    outcomes: [
      "Digital marketer role",
      "Run ad campaigns",
      "Marketing analytics",
    ],
  },
];
/* -------------------- INITIAL STATE -------------------- */
const initialState = {
  name: "",
  category: "",
  duration: "",
  fees: "",
  status: "Draft",
  startDate: "",
  trainer: "",
  description: "",
};

const Courses = () => {
  const [courses, setCourses] = useState(courses_main);
  const [openAdd, setOpenAdd] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newCourse, setNewCourse] = useState(initialState);
  





  

  /* -------------------- ADD COURSE -------------------- */
  
  const handleAddCourse = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await Api.post("/courses", newCourse);

      // Update UI with backend response
      setCourses((prev) => [...prev, res.data.data]);

      alert("✅ Course Added Successfully!");
      setOpenAdd(false);
      setNewCourse(initialState);
    } catch (err) {
      console.error(err);
      alert("❌ Error while adding course");
    } finally {
      setLoading(false);
    }
  };

 const filteredCourses = courses.filter((c) => {
  if (!c || !c.name) return false;

  return `${c.name} ${c.id ?? ""} ${c.trainer ?? ""}`
    .toLowerCase()
    .includes(search.toLowerCase());
});



  return (
    <Box p={4}>
      {/* HEADER */}
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Courses
          </Typography>
          <Typography color="text.secondary">
            Explore available courses
          </Typography>
        </Box>

        <Button
          variant="outlined"
          onClick={() => setOpenAdd(true)}
          sx={{
            borderColor: "#1f4d3a",
            color: "#1f4d3a",
            height: 32,
            px: 1.5,
            fontSize: "0.8rem",
          }}
        >
          Add Course
        </Button>
      </Stack>

      {/* SEARCH */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <TextField
            fullWidth
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>

      {/* COURSE CARDS */}
      <Grid container spacing={3}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} md={4} key={course.id} sx={{width:300,height:350}}>
            <Card
              sx={{
                borderRadius: 2,
                flexDirection: "column",
                overflow: "hidden",
                "&:hover": { boxShadow: 8 },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#1f4d3a",
                  color: "white",
                  p: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold" noWrap>
                  {course.name}
                </Typography>
              </Box>

              {/* Body Content */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Description */}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2 }}
                >
                  {course.description}
                </Typography>

                {/* Details */}
                <Box>
                  <Stack spacing={0.5} sx={{ mb: 2 }}>
                    <Typography variant="body2">⏱ {course.duration}</Typography>
                    <Typography variant="body2">₹ {course.fees}</Typography>
                    <Typography variant="body2">
                      👥 {course.enrolled} Students
                    </Typography>
                    <Typography variant="body2">👤 {course.trainer}</Typography>
                  </Stack>
                </Box>

                {/* Category Tag and Actions */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Chip
                    label={course.category || "IT & Software"}
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                  <Stack direction="row" spacing={0.5}>
                    <IconButton
                      size="small"
                      onClick={() => {
                        setSelectedCourse(course);
                        setDetailsOpen(true);
                      }}
                    >
                      <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton size="small">
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Delete fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ADD COURSE MODAL */}
      <Dialog
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        maxWidth="sm"
        fullWidth
      >
        <Box p={3}>
          <Stack direction="row" justifyContent="space-between" mb={2}>
            <Typography variant="h6">Add New Course</Typography>
            <IconButton onClick={() => setOpenAdd(false)}>
              <Close />
            </IconButton>
          </Stack>

          <Stack spacing={2}>
            <TextField
              label="Course Name"
              placeholder="eg:FullStack Developer"
              fullWidth
              value={newCourse.name}
              onChange={(e) =>
                setNewCourse({ ...newCourse, name: e.target.value })
              }
            />

            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  select
                  label="Category"
                  fullWidth
                  value={newCourse.category}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, category: e.target.value })
                  }
                >
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="Design">Design</MenuItem>

                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="Language">Language</MenuItem>
                </TextField>
              </Grid>

              <Grid size={6}>
                <TextField
                  select
                  label="Duration"
                  placeholder=""
                  fullWidth
                  value={newCourse.duration}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, duration: e.target.value })
                  }
                >
                  <MenuItem value="1 month">1 month</MenuItem>
                  <MenuItem value="2 month">2 month</MenuItem>

                  <MenuItem value="3 month">3 month</MenuItem>
                  <MenuItem value="4 month">4 month</MenuItem>
                  <MenuItem value="5 month">5 month</MenuItem>
                  <MenuItem value="6 month">6 month</MenuItem>
                  <MenuItem value="12 month">12 month</MenuItem>
                </TextField>
              </Grid>
              <Grid size={6}>
                <TextField
                  label="Fees"
                  placeholder="eg:25000"
                  fullWidth
                  value={newCourse.fees}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, fees: e.target.value })
                  }
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  label="Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  placeholder="DD / MM / YYYY"
                  fullWidth
                />
              </Grid>

              <TextField
                label="Trainer"
                placeholder="Trainer Name"
                fullWidth
                value={newCourse.trainer}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, trainer: e.target.value })
                }
              />
            </Grid>

            <TextField
              label="Description"
              placeholder="Course details, benefits "
              multiline
              rows={3}
              fullWidth
              value={newCourse.description}
              onChange={(e) =>
                setNewCourse({ ...newCourse, description: e.target.value })
              }
            />

            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
              <Button
                variant="contained"
                onClick={handleAddCourse}
                disabled={loading}
                sx={{
                  backgroundColor: "#1f4d3a",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#163d2f" },
                }}
              >
                {loading ? "Adding..." : "Add Course"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Dialog>

      {/* VIEW DETAILS */}
      <Dialog
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        {selectedCourse && (
          <Box>
            {/* Header with close button */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 3, pb: 0 }}
            >
              <Typography variant="h6" fontWeight="bold">
                {selectedCourse.name}
              </Typography>
              <IconButton onClick={() => setDetailsOpen(false)} size="small">
                <Close />
              </IconButton>
            </Stack>

            {/* Category and Status Chips */}
            <Stack direction="row" spacing={1} sx={{ px: 3, pt: 1, pb: 2 }}>
              <Chip
                label={selectedCourse.category || "IT & Software"}
                size="small"
                sx={{ fontWeight: 600 }}
              />
              <Chip
                label={selectedCourse.status || "Active"}
                color={
                  selectedCourse.status === "Active" ? "success" : "default"
                }
                size="small"
              />
            </Stack>

            {/* Divider */}
            <Divider />

            {/* Content */}
            <Box sx={{ p: 3 }}>
              {/* Description */}
              <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                {selectedCourse.description}
              </Typography>

              {/* Course Details Grid */}
              <Box
                sx={{
                  backgroundColor: "#f5f5f5",
                  p: 2,
                  borderRadius: 1,
                  mb: 3,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="caption" color="textSecondary">
                      Duration
                    </Typography>
                    <Typography fontWeight="bold">
                      {selectedCourse.duration}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption" color="textSecondary">
                      Fee
                    </Typography>
                    <Typography fontWeight="bold">
                      {selectedCourse.fees}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption" color="textSecondary">
                      Students
                    </Typography>
                    <Typography fontWeight="bold">
                      {selectedCourse.enrolled}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption" color="textSecondary">
                      Trainer
                    </Typography> 
                    <Typography fontWeight="bold">
                      {selectedCourse.trainer}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption" color="textSecondary">
                      Start Date
                    </Typography>
                    <Typography fontWeight="bold">2025-01-15</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default Courses;
