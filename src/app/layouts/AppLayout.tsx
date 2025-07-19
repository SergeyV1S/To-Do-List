import { Outlet } from "react-router";

import { Header } from "@widgets/header";

export const AppLayout = () => (
  <>
    <Header />
    <main className='container mt-5'>
      <Outlet />
    </main>
  </>
);
