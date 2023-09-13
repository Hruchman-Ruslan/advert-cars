import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
