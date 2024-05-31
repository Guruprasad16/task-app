import { ReactNode } from "react";
import ResponsiveAppBar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ResponsiveAppBar></ResponsiveAppBar>
      <main className="flex-grow">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
