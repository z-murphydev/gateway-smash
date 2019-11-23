import React from "react";

import Stylesheets from "./Stylesheets";
import Content from "../pages";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <Stylesheets />

      <Content />
    </>
  );
};

export default App;
