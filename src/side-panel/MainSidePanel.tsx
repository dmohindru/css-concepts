import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import { ArrowDropDown } from "@mui/icons-material";

export const MainSidePanel: React.FC = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          Exercise one
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Exercise one details</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDown />}>
          Exercise two
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Exercise two details</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
