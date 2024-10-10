import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../layout";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import GithubPages from "../pages/github";
import UserPage from "../pages/user";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route Component={Layout}>
          <Route path="" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/github" Component={GithubPages} />
          <Route path="/user/:id" Component={UserPage} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
