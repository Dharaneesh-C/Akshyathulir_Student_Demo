import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  AvatarGroup,
  Chip,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Button,
  Dialog,
  IconButton,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CloseIcon from "@mui/icons-material/Close";

import AddIcon from "@mui/icons-material/Add";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Ads from "./ads";
import Api from "./api";

const EDU_COLORS = {
  primary: "#1a3e36",
  secondary: "#8db596",
  background: "#f1f8f4",
  accent: "#4caf50",
};

const initialAddress = {
  country: "",
  state: "",
  district: "",
  city: "",
  pinCode: "",
};

const Placements = () => {
  const [placementStats, setPlacementStats] = useState({
    highestPackage: 0,
    studentsPlaced: 0,
    recruiters: 0,
    averagePackage: 0,
  });

  const [placementRecords, setPlacementRecords] = useState([]);

  const [recordDialogOpen, setRecordDialogOpen] = useState(false);

  const [recordFormData, setRecordFormData] = useState({
    companyName: "",
    role: "",
    package: "",
    place: "",
    count: "",
  });

  const [recordErrors, setRecordErrors] = useState({});


  const eduToday = new Date().toISOString().split("T")[0];
  const eduDate = new Date();
  eduDate.setFullYear(eduDate.getFullYear() - 2);
  const eduTwoYearsAgo = eduDate.toISOString().split("T")[0];

  const [eduFormData, setEduFormData] = useState({
    startupName: "",
    legalStatus: "",
    dateOfEstablishment: "",
    primarySector: "",
    secondarySector: "",
    companyPAN: "",
    gstin: "",
    currentTeamSize: "",
    maleCount: "",
    femaleCount: "",
    companyWebsite: "",
    numberOfBranches: "1",
    branchAddresses: [{ ...initialAddress }],
  });

  const [eduErrors, setEduErrors] = useState({});
  const [, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // ── Placement Records State ──
  // const [placementRecords, setPlacementRecords] = useState([]);
  // const [recordDialogOpen, setRecordDialogOpen] = useState(false);
  // const [recordFormData, setRecordFormData] = useState({
  //   companyName: "", role: "", package: "", place: "", count: "",
  // });
  // const [recordErrors, setRecordErrors] = useState({});

  const topRecruiters = [
    { name: "TCS", logo: "https://www.google.com/s2/favicons?domain=tcs.com&sz=64" },
    { name: "Infosys", logo: "https://www.google.com/s2/favicons?domain=infosys.com&sz=64" },
    { name: "Wipro", logo: "https://www.google.com/s2/favicons?domain=wipro.com&sz=64" },
    { name: "Cognizant", logo: "https://www.google.com/s2/favicons?domain=cognizant.com&sz=64" },
    { name: "Accenture", logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=64" },
  ];

  const getCompanies = async () => {
    try {
      const email = localStorage.getItem("userEmail");
      const res = await Api.get(`/placements/admin/${email}`);
      setCompanies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPlacementRecords = async () => {
    try {
      const email = localStorage.getItem("userEmail");
      const res = await Api.get(`/placements/records/${email}`);
      setPlacementRecords(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    axios
      .get(`http://127.0.0.1:8000/api/placements/stats/${email}`)
      .then((res) => {
        setPlacementStats({
          highestPackage: res.data.highestPackage || 0,
          studentsPlaced: res.data.studentsPlaced || 0,
          recruiters: res.data.recruiters || 0,
          averagePackage: res.data.averagePackage || 0,
        });
      })
      .catch((err) => console.log(err));
    getCompanies();
    getPlacementRecords();
  }, []);

  const getInitials = (name = "") =>
    name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2) || "CO";

  // ── Placement Record Handlers ──
 

const handleAddRecord = async () => {
  try {
    const email = localStorage.getItem("userEmail");

    const payload = {
      companyName: recordFormData.companyName,
      role: recordFormData.role,
      package: Number(recordFormData.package),
      place: recordFormData.place,
      count: Number(recordFormData.count),
      adminEmail: email,
    };

    console.log("Sending placement record:", payload);

    await Api.post("/placements/records", payload);

    alert("✅ Placement Record Added!");

    getPlacementRecords();

    setRecordDialogOpen(false);

    setRecordFormData({
      companyName: "",
      role: "",
      package: "",
      place: "",
      count: "",
    });

  } catch (err) {
    console.error(err);
    alert("❌ Error adding record");
  }
};

  // ── Company Registration Handlers ──
  const eduHandleBranchCountChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setEduFormData({ ...eduFormData, numberOfBranches: "", branchAddresses: [] });
      setEduErrors((prev) => ({ ...prev, numberOfBranches: "Number of branches is required" }));
      return;
    }
    let count = Number(value);
    if (isNaN(count) || count < 1) return;
    if (count > 20) {
      setEduErrors((prev) => ({ ...prev, numberOfBranches: "Maximum allowed branches is 20" }));
      return;
    } else {
      setEduErrors((prev) => ({ ...prev, numberOfBranches: "" }));
    }
    const updatedAddresses = [...eduFormData.branchAddresses];
    if (count > updatedAddresses.length) {
      for (let i = updatedAddresses.length; i < count; i++) updatedAddresses.push({ ...initialAddress });
    } else {
      updatedAddresses.length = count;
    }
    setEduFormData({ ...eduFormData, numberOfBranches: value, branchAddresses: updatedAddresses });
  };

  const eduHandleInputChange = (field) => (event) => {
    const value = event.target.value;
    if (field === "startupName") {
      if (!/^[A-Za-z ]*$/.test(value)) {
        setEduErrors((prevErr) => ({ ...prevErr, startupName: "Letters only" }));
        return;
      } else if (eduErrors.startupName) {
        setEduErrors((prevErr) => ({ ...prevErr, startupName: "" }));
      }
    }
    setEduFormData((prev) => {
      const updated = { ...prev, [field]: value };
      const teamSize = Number(updated.currentTeamSize || 0);
      const male = Number(updated.maleCount || 0);
      const female = Number(updated.femaleCount || 0);
      if (teamSize > 0 && male + female > teamSize) {
        setEduErrors((prevErr) => ({
          ...prevErr,
          maleCount: "Male + Female cannot exceed team size",
          femaleCount: "Male + Female cannot exceed team size",
        }));
      } else {
        setEduErrors((prevErr) => ({ ...prevErr, maleCount: "", femaleCount: "" }));
      }
      return updated;
    });
    if (eduErrors[field]) setEduErrors((prevErr) => ({ ...prevErr, [field]: "" }));
  };

  const eduHandleSubmit = async () => {
    try {
      setLoading(true);
      const email = localStorage.getItem("userEmail");

      // Duplicate check
      const isDuplicate = companies.some(
        (c) =>
          c.startupName.trim().toLowerCase() === eduFormData.startupName.trim().toLowerCase() &&
          c.companyPAN.trim().toUpperCase() === eduFormData.companyPAN.trim().toUpperCase()
      );
      if (isDuplicate) {
        setEduErrors((prev) => ({
          ...prev,
          startupName: "This company is already registered",
          companyPAN: "This PAN is already registered",
        }));
        setLoading(false);
        return;
      }

      await Api.post("/placements/", {
        startupName: eduFormData.startupName,
        legalStatus: eduFormData.legalStatus,
        dateOfEstablishment: eduFormData.dateOfEstablishment,
        primarySector: eduFormData.primarySector,
        secondarySector: eduFormData.secondarySector || "",
        companyPAN: eduFormData.companyPAN,
        gstin: eduFormData.gstin || "",
        currentTeamSize: Number(eduFormData.currentTeamSize),
        maleCount: Number(eduFormData.maleCount),
        femaleCount: Number(eduFormData.femaleCount),
        companyWebsite: eduFormData.companyWebsite || "",
        numberOfBranches: Number(eduFormData.numberOfBranches),
        adminEmail: email,
      });
      alert("✅ Company Registered Successfully!");
      getCompanies();
      eduHandleReset();
    } catch (error) {
      console.log(error);
      alert("❌ Error while submitting!");
    } finally {
      setLoading(false);
    }
  };

  const eduHandleReset = () => {
    setEduFormData({
      startupName: "", legalStatus: "", dateOfEstablishment: "",
      primarySector: "", secondarySector: "", companyPAN: "", gstin: "",
      currentTeamSize: "", maleCount: "", femaleCount: "", companyWebsite: "",
      numberOfBranches: "1", branchAddresses: [{ ...initialAddress }],
    });
    setEduErrors({});
  };

  const sectors = ["HealthTech","FinTech","EdTech","AgriTech","E-Commerce","AI / ML","IoT","SaaS","Blockchain","Other"];

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: EDU_COLORS.background, minHeight: "100vh" }}>

      {/* Header */}
      <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4" fontWeight="800" color={EDU_COLORS.primary}
          sx={{ letterSpacing: "-0.5px", fontSize: { xs: "1.75rem", md: "2.125rem" } }}>
          Career Launchpad
        </Typography>
      </Box>

      {/* Placement Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { icon: <TrendingUpIcon color="primary" />, value: `₹${placementStats.highestPackage} LPA`, title: "Highest Package", subtitle: "CTC offered" },
          { icon: <PeopleIcon color="primary" />, value: placementStats.studentsPlaced, title: "Students Placed", subtitle: "Total placements" },
          { icon: <BusinessIcon color="primary" />, value: placementStats.recruiters, title: "Recruiters", subtitle: "Companies visited" },
          { icon: <TrendingUpIcon color="primary" />, value: `₹${placementStats.averagePackage} LPA`, title: "Average Package", subtitle: "Across all branches" },
          { icon: <BusinessIcon color="primary" />, value: "", title: "Top Recruiters", subtitle: "", logos: topRecruiters },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Card sx={{
              width: 220, height: 220, margin: "auto", display: "flex", flexDirection: "column",
              justifyContent: "center", alignItems: "center", textAlign: "center",
              borderRadius: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.08)", transition: "0.3s",
              "&:hover": { transform: "translateY(-6px)", boxShadow: "0 10px 25px rgba(0,0,0,0.15)" },
            }}>
              <Box sx={{ width: 55, height: 55, borderRadius: 2, bgcolor: "#eef2ff", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                {card.icon}
              </Box>
              {card.logos ? (
                <AvatarGroup max={5} sx={{ justifyContent: "center", mb: 1 }}>
                  {card.logos.map((company, i) => (
                    <Avatar key={i} src={company.logo} alt={company.name} sx={{ width: 40, height: 40, bgcolor: "#1a3e36", fontSize: 14 }}>
                      {company.name.charAt(0)}
                    </Avatar>
                  ))}
                </AvatarGroup>
              ) : (
                <Typography variant="h5" fontWeight="bold">{card.value}</Typography>
              )}
              <Typography fontWeight={600}>{card.title}</Typography>
              <Typography variant="body2" color="text.secondary">{card.subtitle}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Our Top Recruiters Grid */}
      {companies.length > 0 && (
        <>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", color: EDU_COLORS.primary }}>
            Our Top Recruiters
          </Typography>
          
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, mb: 4 }}>
            {companies.map((c, index) => (
              <Card
                key={c._id || index}
                onClick={() => { setSelectedCompany(c); setViewOpen(true); }}
                sx={{
                  borderRadius: 3, cursor: "pointer", textAlign: "center",
                  border: "1px solid #e0e0e0", boxShadow: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  "&:hover": { borderColor: "#1a3e36", boxShadow: "0 0 0 2px #1a3e3620" },
                  height: 80, display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <Typography fontWeight={600} fontSize={15}>{c.startupName}</Typography>
              </Card>
            ))}
          </Box>
        </>
      )}

     

      {/* Placement Records Table */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: EDU_COLORS.primary }}>
          Placement Records
        </Typography>
        {/* OPTION 1 — Standalone Add Record Button */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ bgcolor: EDU_COLORS.primary, textTransform: "none", fontWeight: 600, borderRadius: 2, "&:hover": { bgcolor: "#0f2620" } }}
          onClick={() => {
            setRecordFormData({ companyName: "", role: "", package: "", place: "", count: "" });
            setRecordErrors({});
            setRecordDialogOpen(true);
          }}
        >
          Add Record
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ borderRadius: 3, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1a3e36" }}>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>#</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Company Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Role</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Package (LPA)</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Place</TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {placementRecords.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 4, color: "text.secondary" }}>No placement records found</TableCell>
              </TableRow>
            ) : (
              placementRecords.map((row, index) => {
                const pkg = parseFloat(row.package);
                const isHigh = pkg >= 20;
                return (
                  <TableRow key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4faf6",
                      "&:not(:last-child) td": { borderBottom: "1px solid #e8f5e9" },
                      "&:hover": { backgroundColor: "#e6f4ea" },
                    }}
                  >
                    <TableCell sx={{ color: "text.secondary", py: 2.5 }}>{index + 1}</TableCell>
                    <TableCell sx={{ fontWeight: 700, py: 2.5 }}>{row.companyName}</TableCell>
                    <TableCell sx={{ color: "text.secondary", py: 2.5 }}>{row.role}</TableCell>
                    <TableCell sx={{ py: 2.5 }}>
                      <Chip label={`₹${row.package}L`} size="small"
                        sx={{ bgcolor: isHigh ? "#2563eb" : "#e2e8f0", color: isHigh ? "#fff" : "#334155", fontWeight: 600, borderRadius: "20px" }} />
                    </TableCell>
                    <TableCell sx={{ color: "text.secondary", py: 2.5 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <LocationOnOutlinedIcon fontSize="small" sx={{ color: "#94a3b8" }} />
                        {row.place}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, py: 2.5 }}>{row.count}</TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* New Company Registration Form */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: EDU_COLORS.primary }}>
        New Company Registration
      </Typography>
      <Card sx={{ mb: 3, border: "2px solid #1f4d3a" }}>
        <Box sx={{ backgroundColor: EDU_COLORS.primary, color: "white", p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "20px" }}>Company Details</Typography>
        </Box>
        <CardContent sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Startup Name *" value={eduFormData.startupName}
                onChange={eduHandleInputChange("startupName")} error={!!eduErrors.startupName} helperText={eduErrors.startupName} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField select fullWidth label="Legal Status *" value={eduFormData.legalStatus}
                onChange={eduHandleInputChange("legalStatus")} error={!!eduErrors.legalStatus} helperText={eduErrors.legalStatus}>
                <MenuItem value="Private Limited">Private Limited</MenuItem>
                <MenuItem value="LLP">LLP</MenuItem>
                <MenuItem value="Partnership">Partnership</MenuItem>
                <MenuItem value="Sole Proprietorship">Sole Proprietorship</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField type="date" fullWidth label="Date of Establishment *" InputLabelProps={{ shrink: true }}
                value={eduFormData.dateOfEstablishment} onChange={eduHandleInputChange("dateOfEstablishment")}
                inputProps={{ min: eduTwoYearsAgo, max: eduToday }}
                error={!!eduErrors.dateOfEstablishment} helperText={eduErrors.dateOfEstablishment} />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField select fullWidth label="Primary Sector *" value={eduFormData.primarySector}
                onChange={eduHandleInputChange("primarySector")} error={!!eduErrors.primarySector} helperText={eduErrors.primarySector}>
                {sectors.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField select fullWidth label="Secondary Sector" value={eduFormData.secondarySector}
                onChange={eduHandleInputChange("secondarySector")}>
                <MenuItem value="">None</MenuItem>
                {sectors.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField fullWidth label="Company PAN *" value={eduFormData.companyPAN}
                onChange={eduHandleInputChange("companyPAN")} inputProps={{ maxLength: 10 }}
                error={!!eduErrors.companyPAN} helperText={eduErrors.companyPAN} />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField fullWidth label="GSTIN / CIN" value={eduFormData.gstin} onChange={eduHandleInputChange("gstin")} />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField fullWidth type="number" label="Current Team Size *" value={eduFormData.currentTeamSize}
                onChange={eduHandleInputChange("currentTeamSize")} inputProps={{ min: 0 }}
                error={!!eduErrors.currentTeamSize} helperText={eduErrors.currentTeamSize} />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField fullWidth type="number" label="Male Employees *" value={eduFormData.maleCount}
                onChange={eduHandleInputChange("maleCount")} inputProps={{ min: 0 }}
                error={!!eduErrors.maleCount} helperText={eduErrors.maleCount} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth type="number" label="Female Employees *" value={eduFormData.femaleCount}
                onChange={eduHandleInputChange("femaleCount")} inputProps={{ min: 0 }}
                error={!!eduErrors.femaleCount} helperText={eduErrors.femaleCount} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Company Website" value={eduFormData.companyWebsite} onChange={eduHandleInputChange("companyWebsite")} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth type="number" label="Number of Branches *" value={eduFormData.numberOfBranches}
                onChange={eduHandleBranchCountChange} inputProps={{ min: 1, max: 20 }}
                error={!!eduErrors.numberOfBranches} helperText={eduErrors.numberOfBranches} />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
                <Button type="submit" variant="contained" size="large" onClick={eduHandleSubmit}
                  sx={{ backgroundColor: EDU_COLORS.primary, px: 4 }}>
                  Submit Application
                </Button>
                <Button variant="outlined" color="error" size="large" onClick={eduHandleReset}>
                  Reset Form
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* ── View Company Dialog ── */}
      <Dialog open={viewOpen} onClose={() => setViewOpen(false)} maxWidth="sm" fullWidth
        PaperProps={{ sx: { borderRadius: 4, overflow: "hidden" } }}>
       {selectedCompany && (
  <Box>
    {/* Close */}
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
      <IconButton onClick={() => setViewOpen(false)}><CloseIcon /></IconButton>
    </Box>

    {/* Header */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 3, px: 4, pb: 3, mt: -2 }}>
      <Avatar sx={{ width: 90, height: 90, fontSize: 28, fontWeight: 700, bgcolor: "#e6f4ea", color: EDU_COLORS.primary }}>
        {getInitials(selectedCompany.startupName)}
      </Avatar>
      <Box>
        <Typography variant="h5" fontWeight={700}>{selectedCompany.startupName}</Typography>
        <Typography color="text.secondary" mb={1}>{selectedCompany.primarySector}</Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Chip label={selectedCompany.legalStatus} size="small"
            sx={{ bgcolor: "#e6f4ea", color: EDU_COLORS.primary, fontWeight: 600 }} />
          {selectedCompany.secondarySector && (
            <Chip label={selectedCompany.secondarySector} size="small" variant="outlined" />
          )}
        </Box>
      </Box>
    </Box>

    {/* Stats Row — equal size cards */}
    <Box sx={{ px: 4, pb: 3, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
      {[
        { label: "Team Size", value: selectedCompany.currentTeamSize },
        { label: "Male", value: selectedCompany.maleCount },
        { label: "Female", value: selectedCompany.femaleCount },
        { label: "Branches", value: selectedCompany.numberOfBranches },
      ].map((stat) => (
        <Box key={stat.label}
          sx={{
            bgcolor: "#f1f8f4", borderRadius: 2,
            py: 2, px: 1, textAlign: "center",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            minHeight: 20,
          }}
        >
          <Typography color="text.secondary" fontSize={12} mb={0.5}>{stat.label}</Typography>
          <Typography fontWeight={700} fontSize={20}>{stat.value}</Typography>
        </Box>
      ))}
    </Box>

    {/* Details Section */}
    <Box sx={{ borderTop: "1px solid #eee", px: 4, py: 3 }}>
      <Grid container spacing={2}>
        {[
          { label: "PAN", value: selectedCompany.companyPAN },
          { label: "GSTIN / CIN", value: selectedCompany.gstin || "—" },
          {
            // icon: <BusinessIcon fontSize="small" />,
            label: "Est. Date",
            value: selectedCompany.dateOfEstablishment
              ? new Date(selectedCompany.dateOfEstablishment).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
              : "—"
          },
          {  label: "Website", value: selectedCompany.companyWebsite || "—" },
        ].map((row) => (
          <Grid item xs={12} sm={6} key={row.label}>
            <Box sx={{
              display: "flex", alignItems: "flex-start", gap: 1.5,
              
            }}>
              <Box sx={{ color: EDU_COLORS.primary, mt: 0.3 }}>{row.icon}</Box>
              <Box>
                <Typography fontSize={11} color="text.secondary" mb={0.3}>{row.label}</Typography>
                <Typography fontSize={14} fontWeight={600}>{row.value}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
)}
      </Dialog>

      {/* ── OPTION 1: Add Placement Record Dialog (company name empty, user fills manually) ── */}
      <Dialog open={recordDialogOpen} onClose={() => setRecordDialogOpen(false)} maxWidth="sm" fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}>
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography fontWeight={600} fontSize={18}>Add Placement Record</Typography>
            <IconButton onClick={() => setRecordDialogOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>Company Name *</Typography>
              <TextField fullWidth size="small" placeholder="e.g. Google"
                value={recordFormData.companyName}
                onChange={(e) => setRecordFormData({ ...recordFormData, companyName: e.target.value })}
                error={!!recordErrors.companyName} helperText={recordErrors.companyName} />
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>Role *</Typography>
              <TextField fullWidth size="small" placeholder="e.g. Software Engineer"
                value={recordFormData.role}
                onChange={(e) => setRecordFormData({ ...recordFormData, role: e.target.value })}
                error={!!recordErrors.role} helperText={recordErrors.role} />
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>Package (LPA) *</Typography>
              <TextField fullWidth size="small" placeholder="e.g. 12"
                value={recordFormData.package}
                onChange={(e) => setRecordFormData({ ...recordFormData, package: e.target.value })}
                error={!!recordErrors.package} helperText={recordErrors.package} />
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>Place *</Typography>
              <TextField fullWidth size="small" placeholder="e.g. Bangalore"
                value={recordFormData.place}
                onChange={(e) => setRecordFormData({ ...recordFormData, place: e.target.value })}
                error={!!recordErrors.place} helperText={recordErrors.place} />
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>Students Count *</Typography>
              <TextField fullWidth size="small" placeholder="e.g. 10"
                value={recordFormData.count}
                onChange={(e) => setRecordFormData({ ...recordFormData, count: e.target.value })}
                error={!!recordErrors.count} helperText={recordErrors.count} />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
            <Button variant="outlined" onClick={() => setRecordDialogOpen(false)}>Cancel</Button>
            <Button variant="contained"
              sx={{ bgcolor: EDU_COLORS.primary, "&:hover": { bgcolor: "#0f2620" } }}
              onClick={handleAddRecord}>
              Add Record
            </Button>
          </Box>
        </Box>
      </Dialog>

      <Ads page="placements" />
    </Box>
  );
};

export default Placements;
