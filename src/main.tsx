import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./global.css";
import { AppRoot } from "./AppRoot";
import Welcome from "./Welcome";
import Error from "./Error";
import {
  SelectorRoutes,
  BoxModelRoutes,
  LayoutTechniquesRoutes,
  TypographyRoutes,
  ResponsiveRoutes,
  AnimationsRoutes,
  BackgroundsRoutes,
  PseudoRoutes,
  CssVariablesRoutes,
  CssFunctionsRoutes,
} from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppRoot />}>
      <Route index element={<Welcome />} />
      <Route errorElement={<Error />}>
        <Route path="selector/*" element={<SelectorRoutes />} />
        <Route path="box-model/*" element={<BoxModelRoutes />} />
        <Route
          path="layout-techniques/*"
          element={<LayoutTechniquesRoutes />}
        />
        <Route path="typography/*" element={<TypographyRoutes />} />
        <Route path="responsive/*" element={<ResponsiveRoutes />} />
        <Route path="animations/*" element={<AnimationsRoutes />} />
        <Route path="backgrounds/*" element={<BackgroundsRoutes />} />
        <Route path="pseudo/*" element={<PseudoRoutes />} />
        <Route path="css-variables/*" element={<CssVariablesRoutes />} />
        <Route path="css-functions/*" element={<CssFunctionsRoutes />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
