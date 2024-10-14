import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import {
  AboutPage,
  ContactPage,
  GithubPage,
  HomePage,
  UserPage,
} from "../pages";
import { githubData } from "../services/github";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
      {
        path: "/github",
        Component: GithubPage,
        loader: githubData,
      },
      {
        path: "/user/:id",
        Component: UserPage,
      },
    ],
  },
]);
