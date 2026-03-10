import React, { useState, useEffect, useMemo } from "react";
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
    companyPAN: "",
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
    logo:"",
  });

  // ── Company Logo State ──
  const [companyLogoFile, setCompanyLogoFile] = useState(null);

  const [eduErrors, setEduErrors] = useState({});
  const [, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // ── Derive top 5 recruiters dynamically from placement records ──
  const getTopRecruiters = (records, companiesList) => {
    // Group by companyPAN (most reliable key), fallback to name
    const companyMap = {};
    records.forEach((r) => {
      const key = (r.companyPAN || r.companyName || "").trim().toUpperCase();
      const pkg = parseFloat(r.package) || 0;
      if (!companyMap[key] || pkg > companyMap[key].package) {
        // Cross-reference registered companies for the logo
        const registered = companiesList.find(
          (c) =>
            (r.companyPAN && c.companyPAN?.trim().toUpperCase() === r.companyPAN.trim().toUpperCase()) ||
            c.startupName.trim().toLowerCase() === r.companyName.trim().toLowerCase()
        );
        const logo =
          registered?.companyLogo ||
          registered?.companyLogoUrl ||
          r.companyLogo ||
          null;
        companyMap[key] = { name: r.companyName, package: pkg, logo };
      }
    });
    return Object.values(companyMap)
      .sort((a, b) => b.package - a.package)
      .slice(0, 5)
      .map((c) => ({ name: c.name, logo: c.logo }));
  };

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
      // Sort descending by package
      const sorted = (res.data || []).slice().sort(
        (a, b) => parseFloat(b.package) - parseFloat(a.package)
      );
      setPlacementRecords(sorted);
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

  const resolveLogoUrl = (logo) => {
    if (!logo) return "/default-logo.png";
    if (typeof logo !== "string") return "/default-logo.png";
    const normalized = logo.trim();
    if (
      normalized.startsWith("http://") ||
      normalized.startsWith("https://") ||
      normalized.startsWith("data:") ||
      normalized.startsWith("blob:")
    ) {
      return normalized;
    }
    return `http://127.0.0.1:8000/${normalized.replace(/^\/+/ , "")}`;
  };

  // ── Dynamic top recruiters — recomputes when records OR companies load ──
  const topRecruiters = useMemo(() => {
    if (placementRecords.length > 0 && companies.length > 0) {
      return getTopRecruiters(placementRecords, companies);
    }
    return [];
  }, [placementRecords, companies]);

  // ── Placement Record Handlers ──
  const validateRecordForm = () => {
    let newErrors = {};
    if (!recordFormData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!recordFormData.companyPAN.trim()) newErrors.companyPAN = "Company PAN is required";
    else {
      const matchedCompany = companies.find(
        (c) => c.companyPAN.trim().toUpperCase() === recordFormData.companyPAN.trim().toUpperCase()
      );
      if (!matchedCompany) newErrors.companyPAN = "PAN not found. Register the company first.";
    }
    if (!recordFormData.role.trim()) newErrors.role = "Role is required";
    if (!recordFormData.package.trim()) newErrors.package = "Package is required";
    else if (!/^\d+(\.\d+)?$/.test(recordFormData.package)) newErrors.package = "Enter valid number";
    if (!recordFormData.place.trim()) newErrors.place = "Place is required";
    if (!recordFormData.count.trim()) newErrors.count = "Count is required";
    else if (!/^[0-9]+$/.test(recordFormData.count)) newErrors.count = "Enter valid number";
    setRecordErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddRecord = async () => {
    if (!validateRecordForm()) return;
    try {
      const email = localStorage.getItem("userEmail");
      const matchedCompany = companies.find(
        (c) => c.companyPAN.trim().toUpperCase() === recordFormData.companyPAN.trim().toUpperCase()
      );

      const payload = {
        companyName: recordFormData.companyName,
        companyPAN: recordFormData.companyPAN.trim().toUpperCase(),
        companyLogo: matchedCompany?.companyLogo || matchedCompany?.companyLogoUrl || "",
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
      setRecordFormData({ companyName: "", companyPAN: "", role: "", package: "", place: "", count: "" });
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

    // ⭐ FormData — send raw file, no base64
    const formData = new FormData();
    formData.append("startupName", eduFormData.startupName);
    formData.append("legalStatus", eduFormData.legalStatus);
    formData.append("dateOfEstablishment", eduFormData.dateOfEstablishment);
    formData.append("primarySector", eduFormData.primarySector);
    formData.append("secondarySector", eduFormData.secondarySector || "");
    formData.append("companyPAN", eduFormData.companyPAN);
    formData.append("gstin", eduFormData.gstin || "");
    formData.append("currentTeamSize", Number(eduFormData.currentTeamSize));
    formData.append("maleCount", Number(eduFormData.maleCount));
    formData.append("femaleCount", Number(eduFormData.femaleCount));
    formData.append("companyWebsite", eduFormData.companyWebsite || "");
    formData.append("numberOfBranches", Number(eduFormData.numberOfBranches));
    formData.append("adminEmail", email);
    if (companyLogoFile) {
      formData.append("companyLogo", companyLogoFile); // ⭐ raw file
    }

    await Api.post("/placements/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("✅ Company Registered Successfully!");
    getCompanies();
    eduHandleReset();
  } catch (error) {
    console.error("Full error:", error.response?.data || error.message);
    alert("❌ Error: " + (error.response?.data?.detail || error.message));
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
    setCompanyLogoFile(null);
  };

  const sectors = [
    "HealthTech", "FinTech", "EdTech", "AgriTech", "E-Commerce",
    "AI / ML", "IoT", "SaaS", "Blockchain", "Other",
  ];
 const handleLogoUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  setCompanyLogoFile(file); // ⭐ important

  const preview = URL.createObjectURL(file);

  setEduFormData((prev) => ({
    ...prev,
    logo: preview,
  }));
};

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
          {
            icon: <BusinessIcon color="primary" />,
            value: "",
            title: "Top Recruiters",
            subtitle: topRecruiters.length > 0 ? "By highest package" : "No records yet",
            logos: topRecruiters.length > 0 ? topRecruiters : null,
          },
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
                <>
                  <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
                    {card.logos.map((company, i) => (
                      <Box
                        key={i}
                        title={company.name}
                        sx={{
                          width: 36, height: 36, borderRadius: "50%",
                          overflow: "hidden", border: "2px solid #e6f4ea",
                          bgcolor: "#1a3e36", display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {company.logo ? (
                          <img
                            src={company.logo}
                            alt={company.name}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                          />
                        ) : (
                          <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>
                            {company.name.charAt(0).toUpperCase()}
                          </Box>
                        )}
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: 10, lineHeight: 1.3, px: 1 }}>
                    {card.logos.map((c) => c.name).join(", ")}
                  </Typography>
                </>
              ) : (
                <Typography variant="h5" fontWeight="bold">{card.value}</Typography>
              )}
              <Typography fontWeight={600} mt={card.logos ? 0.5 : 0}>{card.title}</Typography>
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
                  height: 80, display: "flex", alignItems: "center", justifyContent: "center", gap: 1, px: 1,
                }}
              >
                {(c.companyLogo || c.companyLogoUrl) && (
                  <Box sx={{ width: 40, height: 40, borderRadius: 2, overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                      src={c.companyLogo || c.companyLogoUrl}
                      alt={c.startupName}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </Box>
                )}
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
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ bgcolor: EDU_COLORS.primary, textTransform: "none", fontWeight: 600, borderRadius: 2, "&:hover": { bgcolor: "#0f2620" } }}
          onClick={() => {
            setRecordFormData({ companyName: "", companyPAN: "", role: "", package: "", place: "", count: "" });
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
              <TableCell sx={{ color: "white", fontWeight: 600 }}>Package (LPA) ↓</TableCell>
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

      {/* New Client Registration Form */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: EDU_COLORS.primary }}>
        New Client Registration
      </Typography>
      <Card sx={{ mb: 3, border: "2px solid #1f4d3a" }}>
        <Box sx={{ backgroundColor: EDU_COLORS.primary, color: "white", p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "20px" }}>Client Details</Typography>
        </Box>
       

        <CardContent sx={{ p: 3 }}>
           {/* ── Company Logo Upload ── */}
            <Box sx={{ alignItems: "center", gap: 3, mb: 3 }}>
              {/* Clickable Logo Upload */}
              <Box component="label" sx={{ width: 100,
                    height: 100,cursor: "pointer", display: "flex" }}>
                <Box
                  component="img"
                  src={resolveLogoUrl(eduFormData.logo)}
                  alt="Institute Logo"
                  sx={{
                    width: 90,
                    height: 90,
                    borderRadius: 1,
                    objectFit: "cover",
                    border: "1px solid #1f4d3a",
                    transition: "0.2s",
                  }}
                />

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleLogoUpload}
                />
              </Box>

              <Typography variant="body2" color="text.secondary">
                Click logo to upload / change
              </Typography>
            </Box>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Startup Name *" value={eduFormData.startupName}
                onChange={eduHandleInputChange("startupName")} error={!!eduErrors.startupName} helperText={eduErrors.startupName} />
            </Grid>
            <Grid size={{ xs:12, md:4}}>
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
            <Grid  size={{ xs: 12, md: 2 }} >
              <TextField select fullWidth label="Primary Sector *" value={eduFormData.primarySector}
                onChange={eduHandleInputChange("primarySector")} error={!!eduErrors.primarySector} helperText={eduErrors.primarySector}>
                {sectors.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 2}}>
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
            <Grid size={{ xs: 12, md: 2 }}   >
              <TextField fullWidth type="number" label="Current Team Size *" value={eduFormData.currentTeamSize}
                onChange={eduHandleInputChange("currentTeamSize")} inputProps={{ min: 0 }}
                error={!!eduErrors.currentTeamSize} helperText={eduErrors.currentTeamSize} />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField fullWidth type="number" label="Male Employees *" value={eduFormData.maleCount}
                onChange={eduHandleInputChange("maleCount")} inputProps={{ min: 0 }}
                error={!!eduErrors.maleCount} helperText={eduErrors.maleCount} />
            </Grid>
            <Grid  size={{ xs: 12, md: 4 }}>
              <TextField fullWidth type="number" label="Female Employees *" value={eduFormData.femaleCount}
                onChange={eduHandleInputChange("femaleCount")} inputProps={{ min: 0 }}
                error={!!eduErrors.femaleCount} helperText={eduErrors.femaleCount} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Company Website" value={eduFormData.companyWebsite} onChange={eduHandleInputChange("companyWebsite")} />
            </Grid>
            <Grid  size={{ xs: 12, md: 4 }}>
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
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
              <IconButton onClick={() => setViewOpen(false)}><CloseIcon /></IconButton>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3, px: 4, pb: 3, mt: -2 }}>
              {(() => {
                const logoSrc = selectedCompany.companyLogo || selectedCompany.companyLogoUrl || null;
                return logoSrc ? (
                  <Box sx={{ width: 90, height: 90, borderRadius: 3, overflow: "hidden", border: "2px solid #e6f4ea", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fff" }}>
                    <img src={logoSrc} alt={selectedCompany.startupName} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </Box>
                ) : (
                  <Avatar
                    src={resolveLogoUrl(selectedCompany.companyLogo || selectedCompany.companyLogoUrl)}
                    sx={{ width: 90, height: 90 }}
                  >
                    {!selectedCompany.companyLogo && selectedCompany.startupName?.charAt(0)}
                  </Avatar>
                );
              })()}
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

            <Box sx={{ px: 4, pb: 3, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
              {[
                { label: "Team Size", value: selectedCompany.currentTeamSize },
                { label: "Male", value: selectedCompany.maleCount },
                { label: "Female", value: selectedCompany.femaleCount },
                { label: "Branches", value: selectedCompany.numberOfBranches },
              ].map((stat) => (
                <Box key={stat.label}
                  sx={{ bgcolor: "#f1f8f4", borderRadius: 2, py: 2, px: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 20 }}>
                  <Typography color="text.secondary" fontSize={12} mb={0.5}>{stat.label}</Typography>
                  <Typography fontWeight={700} fontSize={20}>{stat.value}</Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ borderTop: "1px solid #eee", px: 4, py: 3 }}>
              <Grid container spacing={2}>
                {[
                  { label: "PAN", value: selectedCompany.companyPAN },
                  { label: "GSTIN / CIN", value: selectedCompany.gstin || "—" },
                  {
                    label: "Est. Date",
                    value: selectedCompany.dateOfEstablishment
                      ? new Date(selectedCompany.dateOfEstablishment).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
                      : "—",
                  },
                  { label: "Website", value: selectedCompany.companyWebsite || "—" },
                ].map((row) => (
                  <Grid item xs={12} sm={6} key={row.label}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
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

      {/* ── Add Placement Record Dialog ── */}
      <Dialog open={recordDialogOpen} onClose={() => setRecordDialogOpen(false)} maxWidth="sm" fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}>
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography fontWeight={600} fontSize={18}>Add Placement Record</Typography>
            <IconButton onClick={() => setRecordDialogOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <Grid container spacing={2}>
            {/* Company Name — full width, drives PAN visibility */}
            <Grid item xs={12}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>Company Name *</Typography>
              <TextField
                fullWidth size="small" placeholder="e.g. Google"
                value={recordFormData.companyName}
                onChange={(e) => {
                  const val = e.target.value;
                  // Check if typed name matches any registered company (case-insensitive)
                  const matched = companies.find(
                    (c) => c.startupName.trim().toLowerCase() === val.trim().toLowerCase()
                  );
                  setRecordFormData((prev) => ({
                    ...prev,
                    companyName: val,
                    // Auto-fill PAN if matched, clear if name changed
                    companyPAN: matched ? matched.companyPAN : "",
                  }));
                  if (matched) {
                    setRecordErrors((prev) => ({ ...prev, companyName: "", companyPAN: "" }));
                  }
                }}
                error={!!recordErrors.companyName}
                helperText={
                  recordErrors.companyName ||
                  (companies.find(
                    (c) => c.startupName.trim().toLowerCase() === recordFormData.companyName.trim().toLowerCase()
                  )
                    ? "✅ Registered company matched"
                    : recordFormData.companyName.trim()
                    ? "⚠️ No registered company with this name"
                    : "")
                }
                FormHelperTextProps={{
                  sx: {
                    color: companies.find(
                      (c) => c.startupName.trim().toLowerCase() === recordFormData.companyName.trim().toLowerCase()
                    )
                      ? "success.main"
                      : recordFormData.companyName.trim()
                      ? "warning.main"
                      : undefined,
                  },
                }}
              />
            </Grid>

            {/* Company PAN — only shown when name MATCHES a registered company */}
            {recordFormData.companyName.trim() &&
              companies.find(
                (c) => c.startupName.trim().toLowerCase() === recordFormData.companyName.trim().toLowerCase()
              ) && (
              <Grid item xs={12}>
                <Typography fontSize={14} fontWeight={500} mb={0.5}>Company PAN *</Typography>
                <TextField
                  fullWidth size="small" placeholder="e.g. AABCT1234D"
                  value={recordFormData.companyPAN}
                  inputProps={{ maxLength: 10, style: { textTransform: "uppercase" } }}
                  onChange={(e) => {
                    const val = e.target.value.toUpperCase();
                    const matched = companies.find(
                      (c) => c.companyPAN.trim().toUpperCase() === val
                    );
                    setRecordFormData((prev) => ({
                      ...prev,
                      companyPAN: val,
                      // Auto-fill company name if PAN matches
                      ...(matched ? { companyName: matched.startupName } : {}),
                    }));
                    if (matched) {
                      setRecordErrors((prev) => ({ ...prev, companyPAN: "", companyName: "" }));
                    }
                  }}
                  error={!!recordErrors.companyPAN}
                  helperText={
                    recordErrors.companyPAN ||
                    (recordFormData.companyPAN.length === 10
                      ? companies.find((c) => c.companyPAN.trim().toUpperCase() === recordFormData.companyPAN)
                        ? `✅ Matched: ${companies.find((c) => c.companyPAN.trim().toUpperCase() === recordFormData.companyPAN).startupName}`
                        : "❌ PAN not found in registered companies"
                      : "Enter the 10-character PAN to verify")
                  }
                  FormHelperTextProps={{
                    sx: {
                      color:
                        recordFormData.companyPAN.length === 10
                          ? companies.find((c) => c.companyPAN.trim().toUpperCase() === recordFormData.companyPAN)
                            ? "success.main"
                            : "error.main"
                          : "text.secondary",
                    },
                  }}
                />
              </Grid>
            )}

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
            <Grid item xs={6}>
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

  
    </Box>
  );
};

export default Placements;
