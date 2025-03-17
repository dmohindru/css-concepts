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
import SelectorRoutes from "./routes/SelectorRoutes";
import BoxModelRoutes from "./routes/BoxModelRoutes";
import LayoutTechnique from "./routes/LayoutTechniqueRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppRoot />}>
      <Route index element={<Welcome />} />
      <Route errorElement={<Error />}>
        <Route path="selector/*" element={<SelectorRoutes />} />
        <Route path="box-model/*" element={<BoxModelRoutes />} />
        <Route path="layout-techniques/*" element={<LayoutTechnique />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
