import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import { useRef, useState } from "react";
import MapClick from "./MapClick";
import MarkerComponent from "./MarkerComponent";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const ShowMapLeaflet = ({
  location,
  coordinate,
  setCordinate,
  userCoordinate,
  isOpenDelete,
}) => {
  const { loading, error, coordinates } = location;

  const { lat, lng } = coordinates;
  const position = [lat, lng];
  if (loading) {
    return <div>loading</div>;
  } else if (error) {
    return <div>error</div>;
  }

  return (
    <div className={`${isOpenDelete ? "hidden" : "block"}`}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-screen"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userCoordinate && <MarkerComponent coordinate={userCoordinate} />}
        <MapClick coordinate={coordinate} setCordinate={setCordinate} />
      </MapContainer>
    </div>
  );
};

export default ShowMapLeaflet;
