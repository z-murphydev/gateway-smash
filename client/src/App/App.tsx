import React from "react";

import { Header } from "layout";
import Content from "pages";
import Stylesheets from "./Stylesheets";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <Stylesheets />

      <Header />
      <Content />
    </>
  );
};

export default App;
