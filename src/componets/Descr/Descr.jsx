import React from "react";
import { Box, Typography } from "@mui/material";
import Walg from "../../assets/Walg.jpg";
const Descr = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Wal<b style={{ color: "red" }}>greens</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        Healthy winter ahead!
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${Walg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant={"h6"} color="tomato" align="center" pt={8}>
              BOGO FREE & BOGO 50% off <br /> select vitamins & supplements
            </Typography>
            <Typography variant={"h6"} color="tomato" align="center">
              Weekly Ad
            </Typography>
            <Typography variant="body1" color="tomato" align="center" pb={8}>
              FREE Ship to Home at $35+
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Descr;
