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

import { Search, Visibility, Edit, Delete } from "@mui/icons-material";

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
  // add course
  const [courses, setCourses] = useState(courses_main);
  const [openAdd, setOpenAdd] = useState(false);
  const [newCourse, setNewCourse] = useState(initialState);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  /* -------------------- ADD COURSE -------------------- */
  const handleAddCourse = () => {
    const newCourseWithId = {
      ...newCourse,
      id: `CRS${courses.length + 1}`,
      status: "Active",
      enrolled: 0,
      syllabus: newCourse.syllabus.split(","),
      outcomes: newCourse.outcomes.split(","),
    };

    setCourses((prev) => [...prev, newCourseWithId]);
    setOpenAdd(false);
    setNewCourse(initialState);
  };

  const filteredCourses = courses.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  /* -------------------- DELETE COURSE -------------------- */
  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  return (
    <Box p={4}>
      {/* HEADER */}
      {/* stack arrange the component */}
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Courses
          </Typography>
          <Typography color="gray">Explore available courses</Typography>
        </Box>

        <Button
          variant="outlined" //border
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
          <Grid
            item
            xs={12}
            md={4}
            key={course.id}
            sx={{ width: 300, height: 350 }}
          >
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
                  backgroundColor: "#1b5e20",
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
                    <IconButton
                      size="small"
                      sx={{ color: "error.main" }}
                      onClick={() => handleDeleteCourse(course.id)}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ADD COURSE DIALOG */}
      <Dialog
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Add Course
          </Typography>

          <Grid container spacing={2}>
            {/* Row 1 */}
            <Grid size={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Course Name *
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. Full Stack Development"
                name="name"
                value={newCourse.name}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, name: e.target.value })
                }
              />
            </Grid>

            <Grid size={6}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  "& .MuiInputBase-root": { width: 268 },
                }}
              >
                <Typography fontSize={14} fontWeight={500} mb={0.5}>
                  Category
                </Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  name="category"
                  value={newCourse.category}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, category: e.target.value })
                  }
                >
                  <MenuItem value="IT & Software">IT & Software</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="Design">Design</MenuItem>
                  <MenuItem value="Marketing">Marketing</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            {/* Row 2 */}
            <Grid size={6}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  "& .MuiInputBase-root": { width: 268 },
                }}
              >
                <Typography fontSize={14} fontWeight={500} mb={0.5}>
                  Duration *
                </Typography>

                <TextField
                  select
                  fullWidth
                  size="small"
                  name="duration"
                  value={newCourse.duration}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, duration: e.target.value })
                  }
                >
                  <MenuItem value="1 month">1 Month</MenuItem>
                  <MenuItem value="2 month">2 Months</MenuItem>
                  <MenuItem value="3 month">3 Months</MenuItem>
                  <MenuItem value="5 month">5 Months</MenuItem>
                  <MenuItem value="6 month">6 Months</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Grid size={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Fees *
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. ₹ 25,000"
                name="fees"
                value={newCourse.fees}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, fees: e.target.value })
                }
              />
            </Grid>

            {/* Row 3 */}
            <Grid size={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Trainer
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Trainer Name"
                name="trainer"
                value={newCourse.trainer}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, trainer: e.target.value })
                }
              />
            </Grid>

            <Grid size={6}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  "& .MuiInputBase-root": { width: 268 },
                }}
              >
                <Typography fontSize={14} fontWeight={500} mb={0.5}>
                  Status
                </Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  name="status"
                  value={newCourse.status}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, status: e.target.value })
                  }
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Draft">Draft</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            {/* Row 4 */}
            <Grid size={12}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Description
              </Typography>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={3}
                name="description"
                value={newCourse.description}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, description: e.target.value })
                }
              />
            </Grid>

            {/* Row 5 */}
            <Grid size={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Syllabus (comma separated)
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="syllabus"
                placeholder="HTML, CSS, React, Node"
                value={newCourse.syllabus || ""}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, syllabus: e.target.value })
                }
              />
            </Grid>

            <Grid size={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Outcomes (comma separated)
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="outcomes"
                placeholder="Build apps, Deploy projects"
                value={newCourse.outcomes || ""}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, outcomes: e.target.value })
                }
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} md={6} textAlign="right">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#1b5e20" }}
                onClick={handleAddCourse}
              >
                Add Course
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Dialog>

      {/* VIEW DETAILS */}
      <Dialog
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        fullWidth
      >
        {selectedCourse && (
          <Box p={3}>
            <Typography variant="h6">{selectedCourse.name}</Typography>

            <Divider sx={{ my: 2 }} />

            <Typography fontWeight="bold">Syllabus</Typography>
            {selectedCourse.syllabus.map((s, i) => (
              <Typography key={i}>• {s}</Typography>
            ))}

            <Typography fontWeight="bold" mt={2}>
              Outcomes
            </Typography>
            {selectedCourse.outcomes.map((o, i) => (
              <Typography key={i}>• {o}</Typography>
            ))}
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default Courses;
