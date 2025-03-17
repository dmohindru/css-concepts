import React from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

type MenuLink = {
  linkTitle: string;
  linkUrl: string;
};

type MenuItemProps = {
  title: string;
  menuLinks: MenuLink[];
};

const renderMenuLink = (menuLink: MenuLink): React.ReactElement => {
  return (
    <NavLink
      to={menuLink.linkUrl}
      style={{ textDecoration: "none" }}
      key={menuLink.linkUrl}
    >
      {({ isActive }) => (
        <ListItem
          sx={{
            backgroundColor: isActive ? "primary.main" : "inherit",
            color: isActive ? "white" : "inherit",
            "&:hover": {
              backgroundColor: isActive ? "primary.main" : "lightgrey",
            },
            "&:active": {
              color: isActive ? "white" : "blue",
            },
          }}
        >
          <ListItemText>{menuLink.linkTitle}</ListItemText>
        </ListItem>
      )}
    </NavLink>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ title, menuLinks }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDropDown />}>
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box display="flex" flexDirection="column">
          {menuLinks.map((link) => renderMenuLink(link))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuItem;
