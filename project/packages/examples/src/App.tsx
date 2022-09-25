import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { Routing } from "./routing";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routing />
      </main>
      <Footer />
    </BrowserRouter>
  );
};
