import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../pages/AboutMe/AboutMe";
import Blog from "../pages/Blog";
import Post from "../pages/Blog/component/component/Post";
import Depoiments from "../pages/Depoiments/Depoiments";
import HomePage from "../pages/HomePage";
import Arteterapia from "../pages/Services/Arteterapia";
import TerapiaIndividual from "../pages/Services/TerapiaIndividual";
import TerapiaOnLine from "../pages/Services/TerapiaOnLine";
import TerapiaPresencial from "../pages/Services/TerapiaPresencial";
import WomanHealth from "../pages/WomanHealth/WomanHealth";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "sobre-mim", element: <AboutMe /> },
  { path: "terapia-online", element: <WomanHealth /> },
  { path: "depoimentos", element: <Depoiments /> },
  { path: "/servico/terapia-individual", element: <TerapiaIndividual /> },

  { path: "/arteterapia", element: <Arteterapia /> },
  { path: "/servico/terapia-on-line", element: <TerapiaOnLine /> },
  {
    path: "/servico/terapia-presencial",
    element: <TerapiaPresencial />,
  },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/{id}", element: <Post /> },
]);
