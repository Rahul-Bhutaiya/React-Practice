import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    // wrapper
    <div className="h-screen w-screen overflow-y-hidden overflow-x-auto p-8 max-w-7xl mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
