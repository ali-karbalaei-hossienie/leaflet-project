import { createContext, useContext, useEffect, useState } from "react";
export const AutContext = createContext();
export const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState(null);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("authState")) || false;
    setAuth(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(Auth));
  }, [Auth]);

  return (
    <div>
      <AutContext.Provider value={Auth}>
        <AuthContextDispatcher.Provider value={setAuth}>
          {children}
        </AuthContextDispatcher.Provider>
      </AutContext.Provider>
    </div>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AutContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
