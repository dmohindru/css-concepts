import React from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
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
    <Box marginY={0.5}>
      <NavLink to={menuLink.linkUrl}>{menuLink.linkTitle}</NavLink>
    </Box>
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
          {/* <NavLink to="/selector/exercise1">Exercise 1</NavLink>
          <NavLink to="/selector/exercise2">Exercise 2</NavLink> */}
          {menuLinks.map((link) => renderMenuLink(link))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuItem;
