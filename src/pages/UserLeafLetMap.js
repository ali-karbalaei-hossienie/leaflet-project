import Leaflet from "../components/ShowMapLeaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import LoadingMap from "../components/LoadingMap";
import LeafletForm from "../components/LeafletForm";
import { useCoords } from "../context/CoordinatesProvider";

const UserLeafLetMap = ({ formValue, setFormValue }) => {
  const [coordinate, setCordinate] = useState();

  // const [inputValue, setInputValue] = useState({
  //   Address: "",
  //   phoneNumber: "",
  // });

  // const [formValue, setFormValue] = useState({});

  // const changeHandler = (e) => {
  //   setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const value = {
  //     lat: location.coordinates.lat,
  //     lng: location.coordinates.lng,
  //     Address: inputValue.Address,
  //     phoneNumber: inputValue.phoneNumber,
  //     id: Date.now(),
  //   };
  //   console.log(value);
  //   setFormValue({ ...formValue, value });
  // };

  return (
    <div className="flex ">
      <div className=" w-1/3 h-screen  bg-slate-500 text-white ">
        <LeafletForm
          coordinate={coordinate}
          setFormValue={setFormValue}
          formValue={formValue}
        />
      </div>
      <div className=" w-2/3 h-screen ">
        <LoadingMap coordinate={coordinate} setCordinate={setCordinate} />
      </div>
    </div>
  );
};

export default UserLeafLetMap;
