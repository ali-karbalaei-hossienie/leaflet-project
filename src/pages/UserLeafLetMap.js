import Leaflet from "../components/Leaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useEffect, useState } from "react";

const UserLeafLetMap = () => {
  const [location, setLocation] = useState({
    loading: true,
    error: null,
    coordinates: { lat: "", lng: "" },
  });

  const [inputValue, setInputValue] = useState({
    Address: "",
    phoneNumber: "",
  });

  const changeHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e, value) => {
    e.preventDefault();
  };
  const onSuccess = (position) => {
    setLocation({
      loading: false,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = () => {
    setLocation({
      coordinates: { lat: "", lng: "" },
      loading: false,
      error: { message: "Geolocation not support" },
    });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return (
    <div className="flex ">
      <div className=" w-1/3 h-screen  bg-slate-500 text-white ">
        <form onSubmit={submitHandler} className="p-4  ">
          <div className="flex flex-col w-full  mb-5 ">
            <label className="mr-2">مختصات خانه</label>
            <input
              type="text"
              name="latitude"
              placeholder="عرض جغرافیایی"
              className=" text-slate-800 mb-2 p-2 rounded-xl border-2 border-solid border-slate-300 focus:outline-0 focus:border-violet-700"
              value={location.coordinates.lat}
              onChange={changeHandler}
            />

            <input
              type="text"
              name="longitude"
              placeholder="طول جغرافیایی"
              className=" text-slate-800 rounded-xl p-2 border-2 border-solid border-slate-300 focus:outline-0 focus:border-violet-700"
              value={location.coordinates.lng}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2">شماره تلفن کاربر</label>
            <input
              type="number"
              name="phoneNumber"
              className=" text-slate-800 w-full rounded-xl p-2 border-2 border-solid border-slate-300 focus:outline-0 focus:border-violet-700"
              value={inputValue.phoneNumber}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2">آدرس کاربر</label>
            <input
              type="text"
              name="Address"
              className=" text-slate-800 w-full p-4  rounded-xl border-2 border-solid border-slate-300 focus:outline-0 focus:border-violet-700"
              value={inputValue.Address}
              onChange={changeHandler}
            />
          </div>
          <button
            onSubmit={submitHandler}
            className="bg-purple-700 w-full px-4 py-2 rounded-xl"
          >
            ثبت موقعیت کاربر
          </button>
        </form>
      </div>
      <div className=" w-2/3 h-screen ">
        <Leaflet location={location} />
      </div>
    </div>
  );
};

export default UserLeafLetMap;
