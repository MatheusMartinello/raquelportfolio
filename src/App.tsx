import "./styles/style.css";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import TerapiaPresencial from "./pages/Services/TerapiaPresencial";
import TerapiaOnLine from "./pages/Services/TerapiaOnLine";
import Arteterapia from "./pages/Services/Arteterapia";
import TerapiaIndividual from "./pages/Services/TerapiaIndividual";
import Depoiments from "./pages/Depoiments/Depoiments";
import WomanHealth from "./pages/WomanHealth/WomanHealth";
import AboutMe from "./pages/AboutMe/AboutMe";
import HomePage from "./pages/HomePage";
import React from "react";
import Post from "./pages/Blog/component/component/Post";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sobre-mim" element={<AboutMe />} />
        <Route path="terapia-online" element={<WomanHealth />} />
        <Route path="depoimentos" element={<Depoiments />} />
        <Route
          path="/servico/terapia-individual"
          element={<TerapiaIndividual />}
        />
        <Route path="/arteterapia" element={<Arteterapia />} />
        <Route path="/servico/terapia-on-line" element={<TerapiaOnLine />} />
        <Route
          path="/servico/terapia-presencial"
          element={<TerapiaPresencial />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
      </Routes>
    </>
  );
};
