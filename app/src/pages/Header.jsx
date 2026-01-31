import React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

import PersonIcon from "@mui/icons-material/Person";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BusinessIcon from "@mui/icons-material/Business";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts";

export default function Header() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

      {/* ===== SECOND NAV BAR WITH TABS ===== */}
      <Box sx={{ width: "100%", typography: "body1", mt: 2 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              centered
              sx={{
                "& .MuiTab-root": {
                  color: "#0b5e00",
                  fontWeight: 500,
                },
                "& .Mui-selected": {
                  color: "#0b5e00",
                  fontWeight: 700,
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#0b5e00",
                },
              }}
            >
              <Tab label="TOTAL" value="1" />
              <Tab label="TODAY" value="2" />
              <Tab label="THIS WEEK" value="3" />
              <Tab label="THIS MONTH" value="4" />
              <Tab label="6 MONTHS" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
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
                        <PersonIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Total Users
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
                    20
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                        <MenuBookIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Courses
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
                    All courses
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
                        <BusinessIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Placements
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
                    20
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                        <SupervisorAccountIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Trainers
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
                    20
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 2,
                mt: 4,
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  bgcolor: "white",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    Student Enrollment
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                    Month-wise student admissions & growth trend
                  </Typography>

                  <Box sx={{ height: 300 }}>
                    <LineChart
                      xAxis={[
                        {
                          scaleType: "point",
                          data: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ],
                        },
                      ]}
                      series={[
                        {
                          data: [
                            120, 150, 180, 220, 260, 300, 350, 400, 450, 520,
                            600, 680,
                          ],
                          label: "Students",
                          color: "#4ade80",
                          area: true,
                        },
                      ]}
                      grid={{ horizontal: true }}
                      sx={{
                        "& .MuiChartsAxis-tickLabel": { fill: "#cbd5e1" },
                        "& .MuiChartsAxis-line": { stroke: "#334155" },
                        "& .MuiChartsGrid-line": { stroke: "#1e293b" },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  bgcolor: "white",
                  color: "black",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    Placement Status
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                    Student placement overview
                  </Typography>

                  <Box sx={{ height: 300 }}>
                    <PieChart
                      series={[
                        {
                          innerRadius: 70,
                          outerRadius: 120,
                          paddingAngle: 3,
                          data: [
                            {
                              id: 0,
                              value: 120,
                              label: "Placed",
                              color: "#22c55e",
                            },
                            {
                              id: 1,
                              value: 60,
                              label: "In Progress",
                              color: "#facc15",
                            },
                            {
                              id: 2,
                              value: 40,
                              label: "Not Placed",
                              color: "#ef4444",
                            },
                          ],
                        },
                      ]}
                      slotProps={{
                        legend: {
                          labelStyle: { fill: "#e5e7eb" },
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
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
                        <PersonIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Total Users
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
                    20
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +20 today
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
                      ↑ 20%
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
                        <MenuBookIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Courses
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
                    All courses
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
                      +6 today
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
                      ↑ 6%
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
                        <BusinessIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Placements
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
                    22
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +22 today
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
                      ↑ 22%
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
                        <SupervisorAccountIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Trainers
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
                    23
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +23 today
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
                      ↑ 23%
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 2,
                mt: 4,
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  bgcolor: "white",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    Student Enrollment
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                    Month-wise student admissions & growth trend
                  </Typography>

                  <Box sx={{ height: 300 }}>
                    <LineChart
                      xAxis={[
                        {
                          scaleType: "point",
                          data: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ],
                        },
                      ]}
                      series={[
                        {
                          data: [
                            120, 150, 180, 220, 260, 300, 350, 400, 450, 520,
                            600, 680,
                          ],
                          label: "Students",
                          color: "#4ade80",
                          area: true,
                        },
                      ]}
                      grid={{ horizontal: true }}
                      sx={{
                        "& .MuiChartsAxis-tickLabel": { fill: "#cbd5e1" },
                        "& .MuiChartsAxis-line": { stroke: "#334155" },
                        "& .MuiChartsGrid-line": { stroke: "#1e293b" },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  bgcolor: "white",
                  color: "black",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    Placement Status
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                    Student placement overview
                  </Typography>

                  <Box sx={{ height: 300 }}>
                    <PieChart
                      series={[
                        {
                          innerRadius: 70,
                          outerRadius: 120,
                          paddingAngle: 3,
                          data: [
                            {
                              id: 0,
                              value: 120,
                              label: "Placed",
                              color: "#22c55e",
                            },
                            {
                              id: 1,
                              value: 60,
                              label: "In Progress",
                              color: "#facc15",
                            },
                            {
                              id: 2,
                              value: 40,
                              label: "Not Placed",
                              color: "#ef4444",
                            },
                          ],
                        },
                      ]}
                      slotProps={{
                        legend: {
                          labelStyle: { fill: "#e5e7eb" },
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </TabPanel>
          <TabPanel value="3">
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Card
                sx={{
                  flex: { xs: "100%", sm: 1 }, // full width on mobile, equal on desktop
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

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Total Users
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
                    40
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +40 today
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
                      ↑ 40%
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
                        <MenuBookIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Courses
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
                    16
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All courses
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
                      +16 today
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
                      ↑ 16%
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
                        <BusinessIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Placements
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
                    22
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +22 today
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
                      ↑ 22%
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
                        <SupervisorAccountIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Trainers
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
                    20
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +20 today
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
                      ↑ 20%
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 2,
                mt: 4,
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  bgcolor: "white",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    Student Enrollment
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                    Month-wise student admissions & growth trend
                  </Typography>

                  <Box sx={{ height: 300 }}>
                    <LineChart
                      xAxis={[
                        {
                          scaleType: "point",
                          data: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ],
                        },
                      ]}
                      series={[
                        {
                          data: [
                            120, 150, 180, 220, 260, 300, 350, 400, 450, 520,
                            600, 680,
                          ],
                          label: "Students",
                          color: "#4ade80",
                          area: true,
                        },
                      ]}
                      grid={{ horizontal: true }}
                      sx={{
                        "& .MuiChartsAxis-tickLabel": { fill: "#cbd5e1" },
                        "& .MuiChartsAxis-line": { stroke: "#334155" },
                        "& .MuiChartsGrid-line": { stroke: "#1e293b" },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  bgcolor: "white",
                  color: "black",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    Placement Status
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                    Student placement overview
                  </Typography>

                  <Box sx={{ height: 300 }}>
                    <PieChart
                      series={[
                        {
                          innerRadius: 70,
                          outerRadius: 120,
                          paddingAngle: 3,
                          data: [
                            {
                              id: 0,
                              value: 120,
                              label: "Placed",
                              color: "#22c55e",
                            },
                            {
                              id: 1,
                              value: 60,
                              label: "In Progress",
                              color: "#facc15",
                            },
                            {
                              id: 2,
                              value: 40,
                              label: "Not Placed",
                              color: "#ef4444",
                            },
                          ],
                        },
                      ]}
                      slotProps={{
                        legend: {
                          labelStyle: { fill: "#e5e7eb" },
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </TabPanel>
          <TabPanel value="4">
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Card
                sx={{
                  flex: { xs: "100%", sm: 1 }, // full width on mobile, equal on desktop
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

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Total Users
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
                    120
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +120 today
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
                      ↑ 60%
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
                        <MenuBookIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Courses
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
                    116
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All courses
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
                      +116 today
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
                      ↑ 60%
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
                        <BusinessIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Placements
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
                    130
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +130 today
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
                      ↑ 75%
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
                        <SupervisorAccountIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Trainers
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
                    116
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +116 today
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
                      ↑ 65%
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 2,
                mt: 4,
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  bgcolor: "white",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    Student Enrollment
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                    Month-wise student admissions & growth trend
                  </Typography>

                  <Box sx={{ height: 300 }}>
                    <LineChart
                      xAxis={[
                        {
                          scaleType: "point",
                          data: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ],
                        },
                      ]}
                      series={[
                        {
                          data: [
                            120, 150, 180, 220, 260, 300, 350, 400, 450, 520,
                            600, 680,
                          ],
                          label: "Students",
                          color: "#4ade80",
                          area: true,
                        },
                      ]}
                      grid={{ horizontal: true }}
                      sx={{
                        "& .MuiChartsAxis-tickLabel": { fill: "#cbd5e1" },
                        "& .MuiChartsAxis-line": { stroke: "#334155" },
                        "& .MuiChartsGrid-line": { stroke: "#1e293b" },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  bgcolor: "white",
                  color: "black",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    Placement Status
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                    Student placement overview
                  </Typography>

                  <Box sx={{ height: 300 }}>
                    <PieChart
                      series={[
                        {
                          innerRadius: 70,
                          outerRadius: 120,
                          paddingAngle: 3,
                          data: [
                            {
                              id: 0,
                              value: 120,
                              label: "Placed",
                              color: "#22c55e",
                            },
                            {
                              id: 1,
                              value: 60,
                              label: "In Progress",
                              color: "#facc15",
                            },
                            {
                              id: 2,
                              value: 40,
                              label: "Not Placed",
                              color: "#ef4444",
                            },
                          ],
                        },
                      ]}
                      slotProps={{
                        legend: {
                          labelStyle: { fill: "#e5e7eb" },
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </TabPanel>
          <TabPanel value="5">
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
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
                        <PersonIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Total Users
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
                    200
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +15 today
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
                      ↑ 80%
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
                        <MenuBookIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Courses
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
                    160
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All courses
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
                      +12 today
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
                      ↑ 85%
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
                        <BusinessIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Placements
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
                    150
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +20 today
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
                      ↑ 90%
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
                        <SupervisorAccountIcon fontSize="small" />
                      </Avatar>

                      <Typography
                        fontWeight={600}
                        fontSize={{ xs: 14, sm: 16 }}
                      >
                        Trainers
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
                    200
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    All users
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
                      +10 today
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
                      ↑ 50%
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 2,
                mt: 4,
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  bgcolor: "white",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    Student Enrollment
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                    Month-wise student admissions & growth trend
                  </Typography>

                  <Box sx={{ height: 300 }}>
                    <LineChart
                      xAxis={[
                        {
                          scaleType: "point",
                          data: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ],
                        },
                      ]}
                      series={[
                        {
                          data: [
                            120, 150, 180, 220, 260, 300, 350, 400, 450, 520,
                            600, 680,
                          ],
                          label: "Students",
                          color: "#4ade80",
                          area: true,
                        },
                      ]}
                      grid={{ horizontal: true }}
                      sx={{
                        "& .MuiChartsAxis-tickLabel": { fill: "#cbd5e1" },
                        "& .MuiChartsAxis-line": { stroke: "#334155" },
                        "& .MuiChartsGrid-line": { stroke: "#1e293b" },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  bgcolor: "white",
                  color: "black",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    Placement Status
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                    Student placement overview
                  </Typography>

                  <Box sx={{ height: 300 }}>
                    <PieChart
                      series={[
                        {
                          innerRadius: 70,
                          outerRadius: 120,
                          paddingAngle: 3,
                          data: [
                            {
                              id: 0,
                              value: 120,
                              label: "Placed",
                              color: "#22c55e",
                            },
                            {
                              id: 1,
                              value: 60,
                              label: "In Progress",
                              color: "#facc15",
                            },
                            {
                              id: 2,
                              value: 40,
                              label: "Not Placed",
                              color: "#ef4444",
                            },
                          ],
                        },
                      ]}
                      slotProps={{
                        legend: {
                          labelStyle: { fill: "#e5e7eb" },
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
