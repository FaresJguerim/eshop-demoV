// Layout Component
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
