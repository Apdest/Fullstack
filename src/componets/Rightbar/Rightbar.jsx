import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import b2 from "../../assets/vita.webp";
import React from "react";
import Card from "../Card/Card";

const Rightbar = () => {
  return (
    <Box>
      <Typography align="center" bgcolor={"black"} color="white">
        Most Popular
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={b2}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={b2}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={b2}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <Divider variant="inset" component={"li"} />
      </List>
      <Typography align="center" bgcolor={"black"} color="white">
        About Us
      </Typography>
      <Card cardImage={b2} />
    </Box>
  );
};

export default Rightbar;
