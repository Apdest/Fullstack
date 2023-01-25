import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Categories from "../Category/Categories";
import Descr from "../Descr/Descr";
import Recents from "../Recents/Recents";
import Rightbar from "../Rightbar/Rightbar";
import care from "../../assets/weekly.webp";
import { styled, Typography } from "@mui/material";
import Options from "../Options/Options";

const Home = () => {
  return (
    <Box>
      <Descr />
      <Container>
        <Categories />
        <br />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            <Recents />
          </Box>
        </Stack>
        <Options />
      </Container>
    </Box>
  );
};

export default Home;
