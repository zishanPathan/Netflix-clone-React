import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../components/HomeScreen";
import LoginScreen from "../components/LoginScreen";
import ProfileScreen from "../components/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/homeScreen",
    element: <HomeScreen />,
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
  },
]);
