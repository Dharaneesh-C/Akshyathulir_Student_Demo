import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const leftCards = [
  { id: "partners", title: "Total Industry Partners", value: 24, subtitle: "Partners Collaborated" },
  { id: "active", title: "Active Partnerships", value: 10, subtitle: "Ongoing Collaborations" },
  { id: "mous", title: "MoUs Signed", value: 6, subtitle: "Agreements Established" },
  { id: "growth", title: "Partnership Growth", value: 8, subtitle: "Growth Over Last Months" },
];

const rightSideData = {
  partners: [
    { name: "Amazon", role: "Hiring Partner", logo: "https://i.pinimg.com/736x/b7/18/e4/b718e41616355ec689f5a55e8b3ca990.jpg" },
    { name: "Flipkart", role: "Industry Collaboration", logo: "https://i.pinimg.com/736x/6f/a2/39/6fa239e1925d10316db3e79f34dfa735.jpg" },
    { name: "Nvidia", role: "AI Research Partner", logo: "https://thumbs.dreamstime.com/b/nvidia-corporation-american-technology-company-incorporated-delaware-based-santa-clara-california-nvidia-company-134923745.jpg" },
    { name: "Infosys", role: "Training Partner", logo: "https://i.pinimg.com/1200x/c2/98/5e/c2985e50b1c7d8f3c4ff6bd9d6e185bf.jpg" },
    { name: "TCS", role: "Placement Partner", logo: "https://i.pinimg.com/1200x/4e/a8/84/4ea8845ef375d645723f8f74315ca1a1.jpg" },
    { name: "Wipro", role: "Internship Partner", logo: "https://i.pinimg.com/736x/8d/bd/78/8dbd7863b2a6b95246f9264db58bd88b.jpg" },
    { name: "Zoho", role: "Training Program Running", logo: "https://www.portaone.com/wp-content/uploads/2024/08/Zoho-logo-1.webp" },
    { name: "Google", role: "MoU Signed", logo: "https://i.pinimg.com/736x/19/74/89/1974895dcb39192c99c0156e80494d3e.jpg" },
    { name: "HCL", role: "MoU Signed", logo: "https://indiapressrelease.com/wp-content/uploads/2020/12/Untitled-design-2020-12-11T122115.250.jpg" },
    { name: "Tech Mahindra", role: "MoU Signed", logo: "https://i.pinimg.com/1200x/d2/3a/ba/d23abaaf58c8d340da0c7d3b9f13e8f2.jpg" },
    { name: "Microsoft", role: "MoU Signed", logo: "https://i.pinimg.com/736x/97/04/87/97048706c33b708f10c643127e6014f7.jpg" },
    { name: "Cognizant", role: "MoU Signed", logo: "https://i.pinimg.com/1200x/da/eb/d4/daebd47fd42b137084c4c7f6e083e227.jpg" },
    { name: "Accenture", role: "MoU Signed", logo: "https://i.pinimg.com/736x/0b/6e/c6/0b6ec6d7f5945ca2ed69c2aed4c80f5e.jpg" },
    { name: "IBM", role: "Training Program Running", logo: "https://i.pinimg.com/736x/ab/ad/3b/abad3b833ff66680f2edd36932154c72.jpg" },
    { name: "Oracal", role: "Training Program Running", logo: "https://i.pinimg.com/1200x/13/59/fd/1359fdd23060111974f7b05813b29264.jpg" },
     { name: "Intel", role: "Training Program Running", logo: "https://i.pinimg.com/736x/cf/c6/2d/cfc62d2115a1a6196201d5b62b36f125.jpg" },
     { name: "SAP", role: "Industry Collaboration", logo: "https://i.pinimg.com/1200x/60/81/f3/6081f3442bae24708870eff43d30ed3b.jpg" },
     { name: "Cisco", role: "Industry Collaboration", logo: "https://i.pinimg.com/736x/c7/31/c5/c731c5fa647cf4ef60ab474df0193421.jpg" },
     { name: "Meta", role: "Industry Collaboration", logo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg" },
      { name: "Adobe", role: "Industry Collaboration", logo: "https://i.pinimg.com/1200x/7d/3a/a4/7d3aa450915125e7948175e1123a199a.jpg" },
       { name: "L&T", role: "Industry Collaboration", logo: "https://toppng.com/uploads/preview/larsen-toubro-limited-vector-logo-11574258722ko6xi3olr2.png" },
       { name: "Mindtree", role: "Industry Collaboration", logo: "https://yt3.googleusercontent.com/ytc/AIdro_m5ZO9yGqxR55OyWxouZs9GELUc7rT0J-n3-il0c2aEM0A=s900-c-k-c0x00ffffff-no-rj" },
       { name: "Tesla", role: "AI Research Partner", logo: "https://pngimg.com/d/tesla_logo_PNG12.png" },
       { name: "Paypal", role: "AI Research Partner", logo: "https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png" },
  ],
  active: [
    { name: "TCS", role: "Live Project Running", logo: "https://i.pinimg.com/1200x/4e/a8/84/4ea8845ef375d645723f8f74315ca1a1.jpg" },
    { name: "Infosys", role: "Ongoing Collaboration", logo: "https://i.pinimg.com/1200x/c2/98/5e/c2985e50b1c7d8f3c4ff6bd9d6e185bf.jpg" },
    { name: "Wipro", role: "Workshops Running", logo: "https://i.pinimg.com/736x/8d/bd/78/8dbd7863b2a6b95246f9264db58bd88b.jpg" },
    { name: "Zoho", role: "Training Program Running", logo: "https://www.portaone.com/wp-content/uploads/2024/08/Zoho-logo-1.webp" },
    { name: "Meta", role: "Industry Collaboration", logo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg" },
      { name: "Adobe", role: "Industry Collaboration", logo: "https://i.pinimg.com/1200x/7d/3a/a4/7d3aa450915125e7948175e1123a199a.jpg" },
       { name: "L&T", role: "Industry Collaboration", logo: "https://toppng.com/uploads/preview/larsen-toubro-limited-vector-logo-11574258722ko6xi3olr2.png" },
       { name: "Mindtree", role: "Industry Collaboration", logo: "https://yt3.googleusercontent.com/ytc/AIdro_m5ZO9yGqxR55OyWxouZs9GELUc7rT0J-n3-il0c2aEM0A=s900-c-k-c0x00ffffff-no-rj" },
       { name: "Tesla", role: "AI Research Partner", logo: "https://pngimg.com/d/tesla_logo_PNG12.png" },
       { name: "Paypal", role: "AI Research Partner", logo: "https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png" },
  ],
  mous: [
    { name: "Nvidia", role: "MoU Signed", logo: "https://thumbs.dreamstime.com/b/nvidia-corporation-american-technology-company-incorporated-delaware-based-santa-clara-california-nvidia-company-134923745.jpg" },
    { name: "Google", role: "MoU Signed", logo: "https://i.pinimg.com/736x/19/74/89/1974895dcb39192c99c0156e80494d3e.jpg" },
    { name: "Amazon", role: "MoU Signed", logo: "https://i.pinimg.com/736x/b7/18/e4/b718e41616355ec689f5a55e8b3ca990.jpg" },
    { name: "HCL", role: "MoU Signed", logo: "https://indiapressrelease.com/wp-content/uploads/2020/12/Untitled-design-2020-12-11T122115.250.jpg" },
    { name: "Microsoft", role: "MoU Signed", logo: "https://i.pinimg.com/736x/97/04/87/97048706c33b708f10c643127e6014f7.jpg" },
    { name: "Cognizant", role: "MoU Signed", logo: "https://i.pinimg.com/1200x/da/eb/d4/daebd47fd42b137084c4c7f6e083e227.jpg" },
  ],
  growth: [
    { name: "Amazon", role: "Growth +2", logo: "https://i.pinimg.com/736x/b7/18/e4/b718e41616355ec689f5a55e8b3ca990.jpg" },
    { name: "Flipkart", role: "Growth +1", logo: "https://i.pinimg.com/736x/6f/a2/39/6fa239e1925d10316db3e79f34dfa735.jpg" },
    { name: "Zoho", role: "Growth +3", logo: "https://www.portaone.com/wp-content/uploads/2024/08/Zoho-logo-1.webp" },
    { name: "Wipro", role: "Internship Partner", logo: "https://i.pinimg.com/736x/8d/bd/78/8dbd7863b2a6b95246f9264db58bd88b.jpg" },
{ name: "Tesla", role: "AI Research Partner", logo: "https://pngimg.com/d/tesla_logo_PNG12.png" },
    { name: "Google", role: "MoU Signed", logo: "https://i.pinimg.com/736x/19/74/89/1974895dcb39192c99c0156e80494d3e.jpg" },
    { name: "HCL", role: "MoU Signed", logo: "https://indiapressrelease.com/wp-content/uploads/2020/12/Untitled-design-2020-12-11T122115.250.jpg" },
    { name: "Tech Mahindra", role: "MoU Signed", logo: "https://i.pinimg.com/1200x/d2/3a/ba/d23abaaf58c8d340da0c7d3b9f13e8f2.jpg" },
  ],
};

export default function DashboardCompanyCards() {
  const [selectedId, setSelectedId] = useState("partners");

  return (
    <Box sx={{ width: "100%", minWidth: 0 }}>
      {/* ✅ FLEX LAYOUT */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          minWidth: 0,
          alignItems: "flex-start",
        }}
      >
        {/* ✅ LEFT PANEL */}
        <Box
          sx={{
            width: 300, // fixed width
            minWidth: 260,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {leftCards.map((card) => {
            const active = selectedId === card.id;
            return (
              <Card
                key={card.id}
                onClick={() => setSelectedId(card.id)}
                sx={{
                  cursor: "pointer",
                  borderRadius: "16px",
                  backgroundColor: active ? "#e8f5e9" : "#f1f8e9",
                  border: active ? "2px solid #1b5e20" : "1px solid #e0e0e0",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent>
                  <Typography fontWeight="bold">{card.title}</Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#1b5e20", mt: 1 }}
                  >
                    {card.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* ✅ RIGHT PANEL (always stays right) */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%" }}
            >
              <Card
                sx={{
                  borderRadius: "16px",
                  width: "100%",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.10)",
                }}
              >
                <CardContent>
                  <Typography variant="h4" fontWeight="bold" color="#1b5e20">
                    {leftCards.find((c) => c.id === selectedId)?.title}
                  </Typography>

                  <Typography sx={{ color: "gray", mt: 1 }}>
                    Showing related companies list
                  </Typography>

                  <Divider sx={{ my: 3 }} />

                  {/* ✅ Company Cards */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: 2,
                      width: "100%",
                    }}
                  >
                    {rightSideData[selectedId].map((company, index) => (
                      <Card
                        key={index}
                        sx={{
                          borderRadius: "14px",
                          backgroundColor: "#f9fff4",
                          border: "1px solid #d9e6d0",
                          transition: "0.3s",
                          "&:hover": {
                            transform: "scale(1.04)",
                            boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
                          },
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Avatar
                              src={company.logo}
                              alt={company.name}
                              sx={{
                                width: 45,
                                height: 45,
                                border: "1px solid #c8e6c9",
                                backgroundColor: "#fff",
                              }}
                            >
                              {company.name[0]}
                            </Avatar>

                            <Box>
                              <Typography fontWeight="bold" fontSize="18px">
                                {company.name}
                              </Typography>
                              <Typography variant="body2" sx={{ mt: 0.5, color: "gray" }}>
                                {company.role}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}
