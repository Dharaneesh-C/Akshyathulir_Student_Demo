import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Chip,
  IconButton,
  TextField,
  Button,
  Dialog,
  MenuItem,
} from "@mui/material";
import Api from "./api";
// Icons
import SearchIcon from "@mui/icons-material/Search";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StarIcon from "@mui/icons-material/Star";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

// Dummy data
const trainers = [
  {
    name: "Rajesh Kumar",
    skill: "Full Stack Development",
    status: "Active",
    rating: 4.8,
    exp: "12 Years",
    trained: 340,
    location: "Bangalore",
    courses: 2,
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    skill: "Data Science & ML",
    status: "Active",
    rating: 4.9,
    exp: "8 Years",
    trained: 210,
    location: "Hyderabad",
    courses: 1,
    initials: "PS",
  },
  {
    name: "Amit Patel",
    skill: "Digital Marketing",
    status: "Active",
    rating: 4.6,
    exp: "10 Years",
    trained: 520,
    location: "Mumbai",
    courses: 1,
    initials: "AP",
  },

  {
    name: "Suresh Iyer",
    skill: "Cloud Computing (AWS)",
    status: "Active",
    rating: 4.7,
    exp: "9 Years",
    trained: 180,
    location: "Chennai",
    courses: 2,
    initials: "SI",
  },
  {
    name: "Neha Verma",
    skill: "UI / UX Design",
    status: "Active",
    rating: 4.8,
    exp: "7 Years",
    trained: 260,
    location: "Pune",
    courses: 1,
    initials: "NV",
  },
  {
    name: "Karthik R",
    skill: "Java & Spring Boot",
    status: "Active",
    rating: 4.6,
    exp: "11 Years",
    trained: 410,
    location: "Coimbatore",
    courses: 3,
    initials: "KR",
  },
  {
    name: "Ananya Singh",
    skill: "Cyber Security",
    status: "Active",
    rating: 4.9,
    exp: "6 Years",
    trained: 150,
    location: "Noida",
    courses: 1,
    initials: "AS",
  },
  {
    name: "Vikram Rao",
    skill: "DevOps Engineering",
    status: "Active",
    rating: 4.7,
    exp: "13 Years",
    trained: 390,
    location: "Bangalore",
    courses: 2,
    initials: "VR",
  },
];
/* -------------------- INITIAL TRAINER STATE -------------------- */
const initialTrainerState = {
  name: "",
  skill: "",
  email: "",
  phone: "",
  qualification: "",
  location: "",
  exp: "Select experience",
  trained: "",
  courses: "",
  status: "Active",
};

function Trainers() {
  const [open, setOpen] = React.useState(false);
  const [trainerList, setTrainerList] = React.useState(trainers);
  const [viewOpen, setViewOpen] = React.useState(false);
  const [selectedTrainer, setSelectedTrainer] = React.useState(null);

  const [formData, setFormData] = React.useState(initialTrainerState);

const handleAddTrainer = async () => {
  try {
    const payload = {
      name: formData.name,
      skill: formData.skill,
      email: formData.email,
      phone: formData.phone,
      qualification: formData.qualification,
      location: formData.location,
      exp: formData.exp,
      trained: Number(formData.trained || 0),
      courses: Number(formData.courses || 0),
      status: formData.status,
    };

    await Api.post("/trainers", payload);

    const formattedTrainer = {
      name: payload.name,
      skill: payload.skill,
      status: payload.status,
      rating: 4.5,
      exp: payload.exp,
      trained: payload.trained,
      location: payload.location,
      courses: payload.courses,
      initials:
        payload.name
          ?.split(" ")
          .map((n) => n[0])
          .join("") || "NA",
    };

    setTrainerList((prev) => [...prev, formattedTrainer]);
    setOpen(false);
    setFormData(initialTrainerState);

    alert("✅ Trainer added successfully!");
  } catch (error) {
    console.error("FULL ERROR:", error);
    alert("❌ Error while adding trainer");
  }
};




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };
  

  return (
    <Box sx={{ p: 4, backgroundColor: "#eef8ee", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Trainers
          </Typography>
          <Typography color="text.secondary">
            Manage trainer information
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: "#2e7d32",
            px: 3,
            py: 1,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { bgcolor: "#1b5e20" },
          }}
          onClick={() => setOpen(true)}
        >
          Add Trainer
        </Button>
      </Box>

      {/* Search */}
      <TextField
        fullWidth
        placeholder="Search trainers..."
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 1 }} />,
        }}
        sx={{ mb: 4, backgroundColor: "#fff", borderRadius: 1 }}
      />

      {/* Trainer Cards */}
      <Grid container spacing={3}>
        {trainerList.map((t, i) => (
          <Grid item xs={12} md={4} key={i} sx={{ width: 400,}}>
            <Card sx={{ borderRadius: 3, height:220 }}>
              <CardContent>
                {/* Top */}
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: "#e6f4ea",
                      color: "#1b5e20",
                      fontWeight: 700,
                    }}
                  >
                    {t.initials}
                  </Avatar>

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography fontWeight={600}>{t.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t.skill}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                      <Chip
                        label={t.status}
                        size="small"
                        color={t.status === "Active" ? "success" : "warning"}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <StarIcon fontSize="small" color="warning" />
                        <Typography variant="body2">{t.rating}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Details */}
                <Grid container spacing={1} sx={{ mb: 2 }}>
                  <Grid item xs={6}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <WorkOutlineIcon fontSize="small" />
                      <Typography variant="body2">{t.exp}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <PeopleOutlineIcon fontSize="small" />
                      <Typography variant="body2">
                        {t.trained} trained
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <LocationOnOutlinedIcon fontSize="small" />
                      <Typography variant="body2">{t.location}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <SchoolOutlinedIcon fontSize="small" />
                      <Typography variant="body2">
                        {t.courses} courses
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* Actions */}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton
                    onClick={() => {
                      setSelectedTrainer(t);
                      setViewOpen(true);
                    }}
                  >
                    <VisibilityOutlinedIcon />
                  </IconButton>

                  <IconButton>
                    <EditOutlinedIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ADD TRAINER DIALOG */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography fontWeight={600} fontSize={18}>
              Add New Trainer
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Form */}
          <Grid container spacing={2}>
            {/* Row 1 */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Full Name *
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. Rajesh Kumar"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Specialization *
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. Full Stack Development"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
              />
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Email *
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="email@institute.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Phone *
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </Grid>

            {/* Row 3 */}
            <Grid item xs={12} md={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Qualification
              </Typography>
              <TextField
                fullWidth
                size="small"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="e.g. M.Tech (CSE)"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                courses
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. 5"
                name="courses"
                value={formData.courses}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Trained
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. 200"
                name="trained"
                value={formData.trained}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Location
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="e.g. Bangalore"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </Grid>

            {/* Row 4 ✅ Experience BELOW */}
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  "& .MuiInputBase-root": { width: 210 },
                }}
              >
                <Typography fontSize={14} fontWeight={500} mb={0.5}>
                  Experience
                </Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  name="exp"
                  value={formData.exp}
                  onChange={handleChange}
                >
                  <MenuItem value="Select experience"></MenuItem>
                  <MenuItem value="1-3 Years">1–3 Years</MenuItem>
                  <MenuItem value="3-5 Years">3–5 Years</MenuItem>
                  <MenuItem value="5-10 Years">5–10 Years</MenuItem>
                  <MenuItem value="10+ Years">10+ Years</MenuItem>
                </TextField>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  "& .MuiInputBase-root": { width: 210 },
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
                  value={formData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="On Leave">On Leave</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Grid>

          {/* Footer */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 3,
            }}
          >
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#2e7d32",
                "&:hover": { bgcolor: "#1b5e20" },
              }}
              onClick={handleAddTrainer}
            >
              Add Trainer
            </Button>
          </Box>
        </Box>
      </Dialog>
      <Dialog
        open={viewOpen}
        onClose={() => setViewOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        {selectedTrainer && (
          <Box sx={{ p: 3 }}>
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography fontWeight={600} fontSize={18}>
                Trainer Profile
              </Typography>
              <IconButton onClick={() => setViewOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Profile */}
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Avatar
                sx={{
                  bgcolor: "#e6f4ea",
                  color: "#1b5e20",
                  width: 56,
                  height: 56,
                  fontWeight: 700,
                }}
              >
                {selectedTrainer.initials}
              </Avatar>

              <Box>
                <Typography fontWeight={600} fontSize={16}>
                  {selectedTrainer.name}
                </Typography>
                <Typography color="text.secondary">
                  {selectedTrainer.skill}
                </Typography>
              </Box>
            </Box>

            {/* Stats */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Experience
                </Typography>
                <Typography fontWeight={500}>{selectedTrainer.exp}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Rating
                </Typography>
                <Typography fontWeight={500}>
                  ⭐ {selectedTrainer.rating}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Students Trained
                </Typography>
                <Typography fontWeight={500}>
                  {selectedTrainer.trained}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Location
                </Typography>
                <Typography fontWeight={500}>
                  {selectedTrainer.location}
                </Typography>
              </Grid>
            </Grid>

            {/* Status */}
            <Chip label={selectedTrainer.status} color="success" />
          </Box>
        )}
      </Dialog>
    </Box>
  );
}

export default Trainers;