import { Box } from "@mui/material";
import SelectorMenuItem from "./SelectorMenuItem";
import BoxModelMenuItem from "./BoxModelMenuItem";
import LayoutTechniquesMenuItem from "./LayoutTechniquesMenuItem";
import TypographyMenuItem from "./TypographyMenuItem";
import ResponsiveMenuItem from "./ResponsiveMenutem";
import AnimationsMenuItem from "./AnimationsMenutem";
import BackgroundMenuItem from "./BackgroundsMenutem";
import PseudoMenuItem from "./PseudoMenutem";
import CssVariablesMenuItem from "./CssVariablesMenutem";
import CssFunctionsMenuItem from "./CssFunctionsMenutem";

export const MainSidePanel: React.FC = () => {
  return (
    <Box>
      <SelectorMenuItem />
      <BoxModelMenuItem />
      <LayoutTechniquesMenuItem />
      <TypographyMenuItem />
      <ResponsiveMenuItem />
      <AnimationsMenuItem />
      <BackgroundMenuItem />
      <PseudoMenuItem />
      <CssVariablesMenuItem />
      <CssFunctionsMenuItem />
    </Box>
  );
};
