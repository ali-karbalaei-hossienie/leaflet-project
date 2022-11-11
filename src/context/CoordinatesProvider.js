import { createContext, useContext, useEffect, useState } from "react";

export const CoordinatesContext = createContext();
export const CoordinatesContextDispatcher = createContext();

const CoordinatesProvider = ({ children }) => {
  const [coords, setCoords] = useState([]);

  return (
    <div>
      <CoordinatesContextDispatcher.Provider value={coords}>
        <CoordinatesContextDispatcher.Provider value={setCoords}>
          {children}
        </CoordinatesContextDispatcher.Provider>
      </CoordinatesContextDispatcher.Provider>
    </div>
  );
};

export default CoordinatesProvider;

export const useCoords = () => useContext(CoordinatesContext);
export const useCoordsActions = () => useContext(CoordinatesContextDispatcher);
