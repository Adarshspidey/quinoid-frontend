import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import TestPage from "./Pages/TestPage";
import ResultPage from "./Pages/ResultPage";
import MainLayout from "./Layout/MainLayout";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="exam" element={<MainLayout />}>
          <Route path="test" element={<TestPage />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
