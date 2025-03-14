import { AppBar, Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MainSidePanel } from "./side-panel/MainSidePanel";

export const AppRoot: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar position="static" color="primary">
        <Typography
          fontWeight="bold"
          textAlign="center"
          variant="h5"
          marginY={2}
        >
          CSS Concept project
        </Typography>
      </AppBar>
      <Box display="flex" flexDirection="row" flexGrow={1}>
        <Box flex={2} bgcolor="lightpink">
          <MainSidePanel />
        </Box>
        <Box flex={5} bgcolor="lightgray">
          <Typography variant="h6">Main screen</Typography>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
