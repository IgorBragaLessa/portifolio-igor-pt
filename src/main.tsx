import React from "react";
import ReactDOM from "react-dom/client";

import { globalStyles } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

globalStyles(); // 👈 ISSO AQUI é o CSS global

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <Footer />
  </React.StrictMode>
);