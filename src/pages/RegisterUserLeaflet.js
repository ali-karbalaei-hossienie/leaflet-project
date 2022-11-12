import Leaflet from "../components/ShowMapLeaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import LoadingMap from "../components/LoadingMap";
import LeafletForm from "../components/LeafletForm";
import { useCoords } from "../context/CoordinatesProvider";

const RegisterUserLeaflet = ({  setproducts }) => {
  const [coordinate, setCordinate] = useState();

  return (
    <div className="flex ">
      <div className=" w-1/3 h-screen  bg-slate-500 text-white ">
        <LeafletForm coordinate={coordinate} setproducts={setproducts} />
      </div>
      <div className=" w-2/3 h-screen ">
        <LoadingMap coordinate={coordinate} setCordinate={setCordinate} />
      </div>
    </div>
  );
};

export default RegisterUserLeaflet;
