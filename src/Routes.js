import React from "react";
import { Navigate } from "react-router-dom";

import { Authorization } from "./components/Authorization";
import { Profile } from "./components/Profile"

const Routes = [
  {
    path: "/",
    element: <Authorization />
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default Routes;
