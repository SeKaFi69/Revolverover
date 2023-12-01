import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/SmallComponents/register";
import School from "./Pages/TS/School";
import Chat from "./Pages/TS/Chat";
import { invoke } from "@tauri-apps/api";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import Nav_def from "./Components/TS/Nav_def";
import Login from "./Components/SmallComponents/login";
import Test from "./test";
import "./styles.css";
import Rooms from "./Pages/TS/Rooms";

document.addEventListener("DOMContentLoaded", () => {
  invoke("close_splashscreen");
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthContextProvider>
        <ChatContextProvider>
          <div className="container-nav meshgradient">
            <Nav_def></Nav_def>
            {/*<Nav_admin></Nav_admin>*/}
            <Routes>
              <Route path="/" element={<School />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/school" element={<School />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/rooms" element={<Rooms />} />

              <Route path="/test" element={<Test />} />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </ChatContextProvider>
      </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
