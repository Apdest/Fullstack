import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import vita from "../../assets/vitamins.jpg";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Grid } from "@mui/material";

const Recents = () => {
  return (
    <Box sx={{ justifyContent: "center" }}>
      <Box>
        <Typography align="center" variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
          HEALTHY WINTER IS AHEAD!
        </Typography>
      </Box>
      <Grid>
        <Card sx={{ display: "flex", width: 300, height: 250 }}>
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Vitamins
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                for mans
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            sx={{ width: 300 }}
            image={vita}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
      {/* <Box
        sx={{
          justifyContent: "space-around",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          mt: "auto",
          mb: "auto",
        }}
      >
        <Card>
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Vitamins
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                for mans
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            sx={{ width: 300 }}
            image={vita}
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex", width: 300, height: 250 }}>
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Vitamins
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                for mans
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            sx={{ width: 300 }}
            image={vita}
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex", width: 300, height: 250 }}>
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Vitamins
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                for mans
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            sx={{ width: 300 }}
            image={vita}
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex", width: 300, height: 250, mt: 8 }}>
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Vitamins
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                for mans
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            sx={{ width: 300 }}
            image={vita}
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex", width: 300, height: 250, mt: 8 }}>
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Vitamins
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                for mans
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            sx={{ width: 300 }}
            image={vita}
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex", width: 300, height: 250, mt: 8 }}>
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Vitamins
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                for mans
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            sx={{ width: 300 }}
            image={vita}
            alt="Live from space album cover"
          />
        </Card>
      </Box> */}
    </Box>
  );
};
export default Recents;
