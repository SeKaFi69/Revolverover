import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./Pages/Loading";
import School from "./Pages/School";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import { invoke } from "@tauri-apps/api";

import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  invoke("close_splashscreen");
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/loading" element={<Loading />} />
        <Route path="/school" element={<School />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
