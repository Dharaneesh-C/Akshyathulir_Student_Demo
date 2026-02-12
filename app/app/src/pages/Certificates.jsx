import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Dialog,
  MenuItem,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import Api from "./api";
import {
  Search,
  Download,
  FileCopy,
  Print,
  Visibility,
  EmojiEvents,
  CheckCircle,
  Schedule,
  Close,
} from "@mui/icons-material";

/* -------------------- DATA -------------------- */

const initialCertificates = [
  {
    id: "CERT001",
    studentName: "Alice Johnson",
    course: "Full Stack Web Development",
    completionDate: "2024-01-15",
    status: "Issued",
    issuedDate: "2024-01-18",
    grade: "A",
    score: 95,
  },
  {
    id: "CERT002",
    studentName: "Bob Williams",
    course: "Data Science & Analytics",
    completionDate: "2024-01-20",
    status: "Issued",
    issuedDate: "2024-01-22",
    grade: "A-",
    score: 89,
  },
  {
    id: "CERT003",
    studentName: "Carol Davis",
    course: "AI & Machine Learning",
    completionDate: "2024-01-25",
    status: "Pending",
    issuedDate: "-",
    grade: "B+",
    score: 82,
  },
  {
    id: "CERT004",
    studentName: "David Miller",
    course: "Cloud Computing AWS",
    completionDate: "2024-01-28",
    status: "Issued",
    issuedDate: "2024-01-30",
    grade: "A",
    score: 93,
  },
  {
    id: "CERT005",
    studentName: "Emma Wilson",
    course: "Cyber Security",
    completionDate: "2024-02-01",
    status: "Pending",
    issuedDate: "-",
    grade: "B",
    score: 78,
  },
  {
    id: "CERT006",
    studentName: "Frank Brown",
    course: "Mobile App Development",
    completionDate: "2024-02-05",
    status: "Issued",
    issuedDate: "2024-02-07",
    grade: "A-",
    score: 88,
  },
  {
    id: "CERT007",
    studentName: "Grace Taylor",
    course: "Data Science & Analytics",
    completionDate: "2024-02-10",
    status: "Issued",
    issuedDate: "2024-02-12",
    grade: "A",
    score: 92,
  },
  {
    id: "CERT008",
    studentName: "Henry Anderson",
    course: "Full Stack Web Development",
    completionDate: "2024-02-15",
    status: "Pending",
    issuedDate: "-",
    grade: "B+",
    score: 85,
  },
];

/* -------------------- COMPONENT -------------------- */
const Certificates = () => {
  const [certificates, setCertificates] = React.useState(initialCertificates);

  const [open, setOpen] = React.useState(false);

  const [genOpen, setGenOpen] = React.useState(false);

  const [formData, setFormData] = React.useState({
    studentName: "",
    course: "",
    grade: "",
    score: "",
    issueDate: "",
    expiryDate: "",
    status: "Pending",
  });

  const handleIssueCertificate = async () => {
    try {
      const payload = {
        studentName: formData.studentName,
        course: formData.course,
        grade: formData.grade,
        score: Number(formData.score),
        completionDate: formData.expiryDate,
        issuedDate: formData.issueDate,
        status: formData.status,
      };

      const res = await Api.post("/certificates", payload);

      const certFromBackend = res.data?.data || res.data;

      setCertificates((prev) => [
        ...prev,
        {
          ...certFromBackend,
          id: certFromBackend._id, // frontend id
        },
      ]);

      setFormData({
        studentName: "",
        course: "",
        grade: "",
        score: "",
        issueDate: "",
        expiryDate: "",
        status: "Pending",
      });

      setGenOpen(false);
      alert("✅ Certificate issued successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Error issuing certificate");
    }
  };

  return (
    <Box p={4}>
      {/* Header */}
      <Grid container justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Certificates
          </Typography>
          <Typography color="text.secondary">
            Issue and manage student certificates.
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => setOpen(true)}
            sx={{
              borderColor: "#1f4d3a",
              color: "#1f4d3a",
              "&:hover": {
                borderColor: "#1f4d3a",
                backgroundColor: "rgba(9,75,0,0.04)",
              },
            }}
          >
            Verify Certificate
          </Button>
          <Button
            variant="contained"
            startIcon={<FileCopy />}
            sx={{
              backgroundColor: "#1f4d3a",
              "&:hover": { backgroundColor: "#1f4d3a" },
            }}
            onClick={() => setGenOpen(true)}
          >
            Issuse Certificate
          </Button>
        </Stack>
      </Grid>

      {/* Stats */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              flex: { xs: "100%", sm: 1 },
              minWidth: { xs: "100%", sm: 240 },
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              bgcolor: "#f1f8e9",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.06)",
                boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
              },
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography color="text.secondary">Total Issued</Typography>
                  <Typography variant="h5">2,150</Typography>
                </Box>
                <EmojiEvents color="success" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              flex: { xs: "100%", sm: 1 },
              minWidth: { xs: "100%", sm: 240 },
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              bgcolor: "#f1f8e9",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.06)",
                boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
              },
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography color="text.secondary">
                    Verified This Month
                  </Typography>
                  <Typography variant="h5">156</Typography>
                </Box>
                <CheckCircle color="primary" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              flex: { xs: "100%", sm: 1 },
              minWidth: { xs: "100%", sm: 240 },
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              bgcolor: "#f1f8e9",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.06)",
                boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
              },
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography color="text.secondary">Pending Issue</Typography>
                  <Typography variant="h5">24</Typography>
                </Box>
                <Schedule color="warning" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/*Certificate Pre View*/}
      <Card sx={{ mb: 4 }}>
        <CardHeader
          title={
            <Typography variant="h6" fontWeight="bold">
              Certificate Template Preview
            </Typography>
          }
        />

        <CardContent>
          <Box
            sx={{
              border: "2px dashed",
              borderColor: "divider",
              borderRadius: 3,
              p: 4,
              bgcolor: "action.hover",
            }}
          >
            <Box maxWidth="600px" mx="auto" textAlign="center">
              {/* Icon */}
              <Box mb={2} display="flex" justifyContent="center">
                <EmojiEvents sx={{ fontSize: 64, color: "primary.main" }} />
              </Box>

              {/* Title */}
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Certificate of Completion
              </Typography>

              <Typography color="text.secondary" mb={2}>
                This is to certify that
              </Typography>

              <Typography variant="h5" fontWeight="bold" color="primary" mb={2}>
                [Student Name]
              </Typography>

              <Typography color="text.secondary" mb={2}>
                has successfully completed the course
              </Typography>

              <Typography variant="h6" fontWeight="medium" mb={4}>
                [Course Name]
              </Typography>

              {/* Footer */}
              <Grid container justifyContent="center" spacing={6}>
                <Grid item>
                  <Typography fontWeight="bold">Date</Typography>
                  <Typography color="text.secondary">
                    [Completion Date]
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography fontWeight="bold">Certificate ID</Typography>
                  <Typography color="text.secondary">[CERT-XXXXX]</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Search */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <TextField
            fullWidth
            placeholder="Search by student name or certificate ID..."
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

      {/* Table */}
      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Certificate ID</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Completion Date</TableCell>
                <TableCell>Issued Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {certificates.map((c) => (
                <TableRow key={c.id} hover>
                  <TableCell sx={{ fontFamily: "monospace" }}>{c.id}</TableCell>
                  <TableCell>{c.studentName}</TableCell>
                  <TableCell>{c.course}</TableCell>
                  <TableCell>{c.grade ?? "-"}</TableCell>
                  <TableCell>{c.score != null ? c.score : "-"}</TableCell>
                  <TableCell>{c.completionDate}</TableCell>
                  <TableCell>{c.issuedDate}</TableCell>

                  <TableCell>
                    <Chip
                      label={c.status}
                      color={c.status === "Issued" ? "success" : "warning"}
                      size="small"
                    />
                  </TableCell>

                  <TableCell align="right">
                    <IconButton>
                      <Visibility />
                    </IconButton>
                    {c.status === "Issued" && (
                      <>
                        <IconButton>
                          <Download />
                        </IconButton>
                        <IconButton>
                          <Print />
                        </IconButton>
                      </>
                    )}
                    {c.status === "Pending" && (
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          backgroundColor: "#1f4d3a",
                          "&:hover": { backgroundColor: "#1f4d3a" },
                        }}
                      >
                        Issue
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Verify Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <Box p={3}>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="bold">Verify Certificate</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </Stack>

          <Stack spacing={2} mt={2}>
            <TextField label="Certificate ID" placeholder="e.g., CERT001" />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1f4d3a",
                "&:hover": { backgroundColor: "#1f4d3a" },
              }}
            >
              Verify
            </Button>
          </Stack>
        </Box>
      </Dialog>
      {/* Issue New Certificate Dialog */}
      <Dialog
        open={genOpen}
        onClose={() => setGenOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <Box p={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight="bold">
              Issue New Certificate
            </Typography>
            <IconButton onClick={() => setGenOpen(false)}>
              <Close />
            </IconButton>
          </Stack>

          <Stack spacing={2} mt={2}>
            <TextField
              label="Student Name *"
              placeholder="e.g. Arjun Mehta"
              fullWidth
              value={formData.studentName}
              onChange={(e) =>
                setFormData({ ...formData, studentName: e.target.value })
              }
            />

            <TextField
              select
              label="Course *"
              fullWidth
              value={formData.course}
              onChange={(e) =>
                setFormData({ ...formData, course: e.target.value })
              }
            >
              <MenuItem value="">Select course</MenuItem>
              <MenuItem value="Full Stack">Full Stack</MenuItem>
              <MenuItem value="Data Science">Data Science</MenuItem>
              <MenuItem value="UI/UX">UI/UX</MenuItem>
              <MenuItem value="Cyber Security">Cyber Security</MenuItem>
            </TextField>

            <Stack direction="row" spacing={2}>
              <TextField
                select
                label="Grade"
                fullWidth
                value={formData.grade}
                onChange={(e) =>
                  setFormData({ ...formData, grade: e.target.value })
                }
              >
                <MenuItem value="">Select grade</MenuItem>
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B">B</MenuItem>
              </TextField>

              <TextField
                label="Score"
                placeholder="e.g. 95%"
                fullWidth
                value={formData.score}
                onChange={(e) =>
                  setFormData({ ...formData, score: e.target.value })
                }
              />
            </Stack>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  type="date"
                  label="Issue Date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={formData.issueDate}
                  onChange={(e) =>
                    setFormData({ ...formData, issueDate: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  type="date"
                  label="Expiry Date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={formData.expiryDate}
                  onChange={(e) =>
                    setFormData({ ...formData, expiryDate: e.target.value })
                  }
                />
              </Grid>
            </Grid>

            <TextField
              select
              label="Status"
              fullWidth
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Issued">Issued</MenuItem>
            </TextField>

            <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2}>
              <Button variant="outlined" onClick={() => setGenOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1f4d3a",
                  "&:hover": { backgroundColor: "#1f4d3a" },
                }}
                onClick={handleIssueCertificate}
              >
                Issue Certificate
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Certificates;
