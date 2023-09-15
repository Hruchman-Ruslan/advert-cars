import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Container } from "./shared/Container.styled";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
