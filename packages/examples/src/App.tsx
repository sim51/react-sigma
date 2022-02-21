import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Routing } from "./core/routing";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { Error } from "./components/error";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <ErrorBoundary FallbackComponent={Error}>
          <Routing />
        </ErrorBoundary>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
