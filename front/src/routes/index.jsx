import { createBrowserRouter } from "react-router-dom";

import Draft from "../pages/Draft";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";


const router = createBrowserRouter([
  {
    errorElement: <div>Not Found 404</div>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/draft",
        element: <Draft />,
      },
    ],
  },
]);

export default router;
