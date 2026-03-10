import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  Typography,
  Button,
  Box
} from "@mui/material";

function Ads({ page }) {

  const [ads, setAds] = useState([]);
  const [adIndex, setAdIndex] = useState(0);

  /* FETCH ADS */
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const email = localStorage.getItem("userEmail");

        const res = await axios.get(
          `http://127.0.0.1:8000/api/ads/${email}/${page}`
        );

        setAds(res.data);

      } catch (err) {
        console.error(err);
      }
    };

    fetchAds();
  }, [page]);



  /* AUTO SLIDE ADS */
  useEffect(() => {

    if (ads.length === 0) return;

    const interval = setInterval(() => {
      setAdIndex((prev) => (prev + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval);

  }, [ads]);



  if (ads.length === 0) return null;



  return (
    <Paper
      sx={{
        width: "100%",
        p: 1.5,
        borderRadius: 3,
        bgcolor: "#ffffff",
        borderLeft: "4px solid #2e7d32",
        overflow: "hidden",
      }}
    >

      <Typography fontWeight="bold" mb={1} fontSize={14}>
        Sponsored
      </Typography>

      {/* SLIDESHOW */}
      <Box
        sx={{
          width: "100%",
          height: 150,
          overflow: "hidden",
          position: "relative",
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${adIndex * 100}%)`,
            transition: "transform 0.6s ease-in-out",
          }}
        >

          {ads.map((ad, i) => (
            <Box
              key={i}
              sx={{
                minWidth: "100%",
                position: "relative",
                flexShrink: 0,
              }}
            >

              {/* Ad Image */}
              <Box
                component="img"
                src={ad.image}
                alt={ad.title}
                sx={{
                  width: "100%",
                  height: 120,
                  objectFit: "cover",
                }}
              />

              {/* Overlay Content */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 1,
                  bgcolor: "rgba(0,0,0,0.55)",
                  color: "#fff",
                }}
              >

                <Typography fontSize={13} fontWeight={600} noWrap>
                  {ad.title}
                </Typography>

                <Typography fontSize={11} sx={{ opacity: 0.9 }}>
                  {ad.description}
                </Typography>

                <Button
                  size="small"
                  component="a"
                  href={ad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 0.5,
                    bgcolor: "#2e7d32",
                    color: "#fff",
                    fontSize: "11px",
                    px: 1,
                    py: 0.3,
                    textTransform: "none",
                  }}
                >
                  {ad.button}
                </Button>

              </Box>
            </Box>
          ))}

        </Box>
      </Box>

      <Typography fontSize={9} color="text.disabled" mt={0.5}>
        Ads by partner platforms
      </Typography>

    </Paper>
  );
}

export default Ads;