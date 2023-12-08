import Confirmation from "components/Confirmation";
import Layout from "pages/Layout";
import DesktopLoginThreePage from "pages/Login";
import RegistrationForm from "pages/Registration";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LandingPage = React.lazy(() => import("pages/LandingPage"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />

          <Route
            path="/registration"
            element={
              <Layout>
                <RegistrationForm />
              </Layout>
              
            }
          />
          <Route
            path="/Login"
            element={
              <Layout>
                <DesktopLoginThreePage />
              </Layout>
           }
           />
           <Route
            path="/confirmation"
            element={
              <Layout>
                <Confirmation />
              </Layout>
           }
           />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
