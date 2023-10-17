import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import PetPage from "../pages/PetPage";
import PetsPage from "../pages/PetsPage";
import SignupPage from "../pages/SignupPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";


const router = createBrowserRouter([
  {
    errorElement: <div>Not Found 404</div>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/pets",
        element: <PetsPage />,
      },
      {
        path: "/pets/:id",
        element: <PetPage />,
      },
    ],
  },
]);

export default router;
