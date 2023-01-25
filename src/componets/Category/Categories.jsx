import React from "react";
import vitamines from "../../assets/vitamins.jpg";
import care from "../../assets/pharmacy.jpg";
import pharm from "../../assets/pharm.jpg";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import categ from "../../assets/category.jpg";
import sign1 from "../../assets/s.png";
import sign2 from "../../assets/si.png";
import sign3 from "../../assets/sig.png";
import sign4 from "../../assets/sign.png";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
});
const Categories = () => {
  return (
    <Box>
      <Stack
        justifyContent="center"
        sx={{
          fontWeight: 900,
          backgroundColor: "#eeeeee",
          color: "black",
          mt: 5,
        }}
      >
        BOOST YOUR HEALTH
        <p>FREE 1-hour Delivery at $35+ ›</p>
        <Stack variant="outlined">
          <img src={categ} />
          <h2 justifyContent="center" style={{ mt: 8 }}>
            MORE SAVINGS FOR YOU
          </h2>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            mt: 3,
            mb: 7,
          }}
        >
          <Card sx={{ maxWidth: 345, width: 260 }}>
            <CardMedia
              sx={{ height: 100, width: 100, marginLeft: 10, marginTop: 5 }}
              image={sign1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Schedule <br /> vaccination(s)
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, width: 260 }}>
            <CardMedia
              sx={{ height: 100, width: 100, marginLeft: 10, marginTop: 5 }}
              image={sign1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Schedule <br /> vaccination(s)
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, width: 260 }}>
            <CardMedia
              sx={{ height: 100, width: 100, marginLeft: 10, marginTop: 5 }}
              image={sign1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Schedule <br /> vaccination(s)
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, width: 260 }}>
            <CardMedia
              sx={{ height: 100, width: 100, marginLeft: 10, marginTop: 5 }}
              image={sign1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Schedule <br /> vaccination(s)
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={5}
      >
        <StyledBox sx={{ backgroundImage: `url(${vitamines})` }}>
          <StyledTypography align="center" variant="h3">
            <Link to="/stores">
              <Typography variant={"h6"} color="tomato" align="center">
                Vitamines
              </Typography>
            </Link>
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${pharm})` }}>
          <StyledTypography align="center" variant="h3">
            <Link src="https://goo.gl/maps/pNzE443pT7RchreP9">
              <Typography variant={"h6"} color="tomato" align="center">
                Find a pharmacy
              </Typography>
            </Link>
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${care})` }}>
          <StyledTypography align="center" variant="h3">
            <Link to="/stores">
              <Typography variant={"h6"} color="tomato" align="center">
                Find Care
              </Typography>
            </Link>
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
