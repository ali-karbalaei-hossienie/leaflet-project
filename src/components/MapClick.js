import { useState } from "react";
import { useMap } from "react-leaflet";
import { Popup, Marker } from "react-leaflet";
import { useCoords, useCoordsActions } from "../context/CoordinatesProvider";

const MapClick = ({ coordinate, setCordinate }) => {
  // const [coords, setCoords] = useState([]);
  // const [coordinate, setCordinate] = useState();
  const map = useMap();
  map.on("click", function (mapEvent) {
    const { lat, lng } = mapEvent.latlng;
    const position = [lat, lng];
    // setCoords([...coords, { ...position }]);
    setCordinate({ ...position });
  });
  return (
    // <div>
    //   {coords.map((position) => {
    //     const coord = Object.values(position);
    //     return <MarkerComponent coord={coord} key={coord} />;
    //   })}
    // </div>
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

const MarkerComponent = ({ coordinate }) => {
  const coord = Object.values(coordinate);
  return (
    <>
      <Marker position={coord}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
};
