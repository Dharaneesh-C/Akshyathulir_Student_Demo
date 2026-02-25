import React, { useState, useEffect } from "react";
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
import Api from "./api";
import { Search, Visibility, Edit, Delete } from "@mui/icons-material";

/* -------------------- INITIAL STATE -------------------- */
const initialState = {
  name: "",
  category: "",
  duration: "",
  fees: "",
  status: "Active",
  startDate: "",
  trainer: "",
  description: "",
};

const Courses = () => {
  // add course
  const [courses, setCourses] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [newCourse, setNewCourse] = useState(initialState);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await Api.get("/courses/");
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  /* -------------------- ADD COURSE -------------------- */

  const filteredCourses = courses.filter(
    (c) => c.name && c.name.toLowerCase().includes(search.toLowerCase()),
  );

  /* -------------------- DELETE COURSE -------------------- */
  const handleDeleteCourse = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    try {
      await Api.delete(`/courses/${id}`);
      setCourses((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
      alert("❌ Delete failed");
    }
  };

  const handleAddCourse = async () => {
    try {
      const payload = {
        name: newCourse.name,
        category: newCourse.category,
        duration: newCourse.duration,
        fees: newCourse.fees,
        trainer: newCourse.trainer,
        status: newCourse.status,
        description: newCourse.description,
        syllabus: newCourse.syllabus
          ? newCourse.syllabus.split(",").map((s) => s.trim())
          : [],
        outcomes: newCourse.outcomes
          ? newCourse.outcomes.split(",").map((o) => o.trim())
          : [],
      };

      if (isEdit) {
        // 🔁 UPDATE
        await Api.put(`/courses/${editId}`, payload);
      } else {
        // ➕ ADD
        await Api.post("/courses", { ...payload, enrolled: 0 });
      }

      await fetchCourses();

      setOpenAdd(false);
      setNewCourse(initialState);
      setIsEdit(false);
      setEditId(null);
    } catch (err) {
      console.error(err.response?.data || err);
      alert("❌ Failed to save course");
    }
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
            key={course._id}
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
                    <IconButton
                      size="small"
                      onClick={() => {
                        setIsEdit(true);
                        setEditId(course._id);
                        setNewCourse({
                          name: course.name || "",
                          category: course.category || "",
                          duration: course.duration || "",
                          fees: course.fees || "",
                          trainer: course.trainer || "",
                          status: course.status || "Active",
                          description: course.description || "",
                          syllabus: (course.syllabus || []).join(", "),
                          outcomes: (course.outcomes || []).join(", "),
                        });
                        setOpenAdd(true);
                      }}
                    >
                      <Edit fontSize="small" />
                    </IconButton>

                    <IconButton
                      size="small"
                      sx={{ color: "error.main" }}
                      onClick={() => handleDeleteCourse(course._id)}
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
        onClose={() => {
          setOpenAdd(false);
          setIsEdit(false);
          setEditId(null);
          setNewCourse(initialState);
        }}
        fullWidth
        maxWidth="sm"
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            {isEdit ? "Edit Course" : "Add Course"}
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
                {isEdit ? "Update Course" : "Add Course"}
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
            {(selectedCourse.syllabus || []).map((s, i) => (
              <Typography key={i}>• {s}</Typography>
            ))}

            <Typography fontWeight="bold" mt={2}>
              Outcomes
            </Typography>
            {(selectedCourse.outcomes || []).map((o, i) => (
              <Typography key={i}>• {o}</Typography>
            ))}
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default Courses;
