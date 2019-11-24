import React from "react";

import { Footer, Header } from "layout";
import Content from "pages";
import Stylesheets from "./Stylesheets";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <Stylesheets />

      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;
