import Layout from "components/Layout";
import RegistrationForm from "pages/Registration";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LandingPage = React.lazy(() => import("pages/LandingPage"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* Wrap the routes you want inside the Layout */}
          <Route
            path="/"
            element={
              <Layout>
                {/* The LandingPage component should be a child of the Layout */}
                <LandingPage />
              </Layout>
            }
          />

          {/* Place the RegistrationForm route within the Layout component */}
          <Route
            path="/registration/index"
            element={
              <Layout>
                <RegistrationForm />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
