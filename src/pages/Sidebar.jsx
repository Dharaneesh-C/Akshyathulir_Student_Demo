import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LogoutIcon from "@mui/icons-material/Logout";
import CodeIcon from "@mui/icons-material/Code";

const expandedWidth = 220;
const collapsedWidth = 56;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Profile", icon: <CodeIcon />, path: "/Allform" },
  { text: "Courses", icon: <SchoolIcon />, path: "/courses" },
  { text: "Placements", icon: <TrendingUpIcon />, path: "/placements" },
  { text: "Trainers", icon: <PersonIcon />, path: "/trainers" },
  {
    text: "Certificates",
    icon: <WorkspacePremiumIcon />,
    path: "/certificates",
  },
  { text: "Industry", icon: <HandshakeIcon />, path: "/industry" },
];

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    if (item.text === "Dashboard") {
      setOpen((prev) => !prev);
    }
    navigate(item.path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? expandedWidth : collapsedWidth,
        "& .MuiDrawer-paper": {
          width: open ? expandedWidth : collapsedWidth,
          transition: "width 0.3s ease",
          backgroundColor: "#0b5e00",
          color: "#fff",
          overflowX: "hidden",
        },
      }}
    >
      {/* LOGO */}
      <Toolbar sx={{ justifyContent: open ? "flex-start" : "center" }}>
        <SchoolIcon />
        {open && (
          <Typography variant="h6" ml={1}>
            AkshayaThulir
          </Typography>
        )}
      </Toolbar>

      {/* MENU */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleMenuClick(item)}
              sx={{
                justifyContent: open ? "flex-start" : "center",
                "&:hover": { backgroundColor: "#0f7a00" },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#fff",
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* LOGOUT */}
      <Box sx={{ mt: "auto", mb: 2 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#ffcccc" }}>
                <LogoutIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Logout" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
