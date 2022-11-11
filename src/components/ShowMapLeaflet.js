import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import { useRef, useState } from "react";
import MapClick from "./MapClick";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const ShowMapLeaflet = ({ location, coordinate, setCordinate }) => {
  const { loading, error, coordinates } = location;

  const { lat, lng } = coordinates;
  const position = [lat, lng];
  if (loading) {
    return <div>loading</div>;
  } else if (error) {
    return <div>error</div>;
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 700, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClick coordinate={coordinate} setCordinate={setCordinate} />
    </MapContainer>
  );
};

export default ShowMapLeaflet;
