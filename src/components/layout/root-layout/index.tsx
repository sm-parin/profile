import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const RootLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
