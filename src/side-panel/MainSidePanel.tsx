import { Box } from "@mui/material";
import SelectorMenuItem from "./SelectorMenuItem";
import BoxModelMenuItem from "./BoxModelMenuItem";

export const MainSidePanel: React.FC = () => {
  return (
    <Box>
      <SelectorMenuItem />
      <BoxModelMenuItem />
    </Box>
  );
};
