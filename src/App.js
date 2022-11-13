import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout/Layout";
import AuthProvider from "./context/AuthProvider";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import RegisterUserLeaflet from "./pages/RegisterUserLeaflet";
import RegisterUserLeafletId from "./pages/RegisterUserLeafletId";
import NotFound from "./pages/NotFoundPage";
function App() {
  const [products, setproducts] = useState([]);

  return (
    <div className="bg-gray-100 h-screen overflow-auto">
      <AuthProvider>
        <Layout>
          <ToastContainer />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage setproducts={setproducts} products={products} />
              }
            ></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route
              path="/RegisterUserLeaflet"
              element={<RegisterUserLeaflet setproducts={setproducts} />}
            ></Route>
            <Route
              path="/RegisterUserLeaflet/:id"
              element={<RegisterUserLeafletId />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
