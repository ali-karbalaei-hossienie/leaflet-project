import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout/Layout";
import AuthProvider from "./context/AuthProvider";
import UserLeafLetMap from "./pages/UserLeafLetMap";
import "leaflet/dist/leaflet.css";
function App() {
  return (
    <div className="bg-gray-100 h-screen overflow-auto">
      <AuthProvider>
        <Layout>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/userLeafLetMap" element={<UserLeafLetMap />}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
