import { useState } from "react";
import { useMap } from "react-leaflet";
import { useCoords, useCoordsActions } from "../context/CoordinatesProvider";
import MarkerComponent from "./MarkerComponent";

const MapClick = ({ coordinate, setCordinate }) => {
  const map = useMap();
  map.on("click", function (mapEvent) {
    const { lat, lng } = mapEvent.latlng;
    const position = [lat, lng];
    setCordinate({ ...position });
  });
  return (
    
    <div>
      {coordinate && (
        <div>
          <MarkerComponent coordinate={coordinate} />
        </div>
      )}
    </div>
  );
};

export default MapClick;

