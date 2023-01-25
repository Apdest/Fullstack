import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { display, margin, width } from "@mui/system";
import { CardMedia, Grid } from "@mui/material";
import sign1 from "../../assets/s.png";
import sign2 from "../../assets/si.png";
import sign3 from "../../assets/sig.png";
import sign4 from "../../assets/sign.png";
import { SignalCellular2Bar } from "@mui/icons-material";

export default function BasicCard() {
  return (
    <Box>
      <Box>
        <Typography align="center" variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
          HEALTHY WINTER IS AHEAD!
        </Typography>
      </Box>
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
            image={sign2}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              COVID-19 <br /> information
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, width: 260 }}>
          <CardMedia
            sx={{ height: 100, width: 100, marginLeft: 10, marginTop: 5 }}
            image={sign3}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              COVID-19 testing <br /> options
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345, width: 260 }}>
          <CardMedia
            sx={{ height: 100, width: 100, marginLeft: 10, marginTop: 5 }}
            image={sign4}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Shop healthy <br /> essentials
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
