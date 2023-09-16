import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Container } from "./shared/Container.styled";
import { Loader, SpinnerContainer } from "./Loader/Loader.styled";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense
          fallback={
            <SpinnerContainer>
              <Loader />
            </SpinnerContainer>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
