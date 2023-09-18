import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/usuarios" element={<Navigate to="/users" />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
