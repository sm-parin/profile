import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { useEffect } from "react";

const RootLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

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
