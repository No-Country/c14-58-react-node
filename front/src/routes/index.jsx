import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import PetPage from "../pages/PetPage";
import PetsPage from "../pages/PetsPage";
import SignupPage from "../pages/SignupPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PostPetPage from "../pages/PostPetPage";
import HomePage from "../pages/HomePage";
import NotFound from "../components/NotFound/notFound";
import Profile from "../pages/ProfilePage";
import AIChat from "../pages/AIChat";

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
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
        path: "/post",
        element: <PostPetPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/pets/:id",
        element: <PetPage />,
      },
      {
        path: "mascotop-IA",
        element: <AIChat />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
