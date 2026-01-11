import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const RootLayout = ({ data }: any) => {
  return (
    <>
      <header>
        <Header data={data} />
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
