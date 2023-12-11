import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "pages/Layout";
import Favourites from "pages/Favourites";
import { FavoritesProvider } from "services/FavoritesContext";
import Productcard from "components/Productcard";

const LandingPage = React.lazy(() => import("pages/LandingPage"));
const DesktopLoginThreePage = React.lazy(() => import("pages/Login"));
const RegistrationForm = React.lazy(() => import("pages/Registration"));

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

          {/* Integrate Productcard and FavoritesProvider */}
          <Route
            path="/Productcard" // Define the path for Productcard
            element={
              <FavoritesProvider>
                <Layout>
                  <Productcard />
                </Layout>
              </FavoritesProvider>
            }
          />

          <Route
            path="/Favourite"
            element={
              <Layout>
                <Favourites />
              </Layout>
            }
          />

          <Route
          
            path="/LandingPage"
            element={
              <FavoritesProvider>

              <Layout>
                <LandingPage />
              </Layout>
              </FavoritesProvider>
            }
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
