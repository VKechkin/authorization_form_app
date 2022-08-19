import React from "react";
import { useRoutes } from "react-router-dom";

import Routes from "./Routes";

const App = () => {
  const routes = useRoutes(Routes);

  return <>{routes}</>;
};

export default App;
