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
import NotFound from "./pages/NotFoundPage";
import { ThemeProvider } from "./context/ThemeContext";
import SabteAgahi from "./pages/SabteAgahi";
import SabteAgahiId from "./pages/SabteAgahiId";

function App() {
  const [products, setproducts] = useState([]);

  return (
    <div className="dark:bg-slate-900 bg-gray-100  h-screen overflow-auto">
      <ThemeProvider>
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
                element={<SabteAgahi setproducts={setproducts} />}
              ></Route>
              <Route
                path="/RegisterUserLeaflet/:id"
                element={<SabteAgahiId />}
              ></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
