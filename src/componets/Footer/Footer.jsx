import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
});

const Footer = () => {
  return (
    <Box sx={{ background: "#eeeeee", height: "300px", marginTop: "100px" }}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography
            color={"darkblue"}
            align={"center"}
            gutterBottom
            variant="h6"
            className="footer"
          >
            contact us
          </Typography>
          <Typography color={"grey"} align={"center"}>
            of squamate reptiles, <br /> with over 6,000 species, continents{" "}
            <br /> except <br /> Antarcti ranging <br />
            across
          </Typography>
          <Typography color={"grey"} align={"center"}>
            continents except Antarcti
          </Typography>
          <Typography color={"grey"} align={"center"}>
            ranging across
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography
            color={"darkblue"}
            align={"center"}
            gutterBottom
            variant="h6"
          >
            <b />
            data policy
          </Typography>
          <Typography color={"grey"} align={"center"}>
            cookies
          </Typography>
          <Typography color={"grey"} align={"center"}>
            Data Safety
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography
            color={"darkblue"}
            align={"center"}
            gutterBottom
            variant="h6"
          >
            categories
          </Typography>
          <Typography color={"grey"} variant={"body2"} align={"center"}>
            Kids
          </Typography>
          <Typography color={"grey"} variant={"body2"} align={"center"}>
            Women
          </Typography>
          <Typography color={"grey"} variant={"body2"} align={"center"}>
            Men
          </Typography>
        </Box>
        <Box>
          <Typography color={"darkblue"} align={"center"}>
            follow Us
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>

          <Typography></Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
