import { useEffect, useState } from "react";
import MapLeaflet from "./MapLeaflet";

const GeoLocationMap = ({ coordinate, setCordinate, isOpenDelete }) => {
  const [location, setLocation] = useState({
    loading: true,
    error: null,
    coordinates: { lat: "", lng: "" },
  });

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
    <>
      <MapLeaflet
        location={location}
        setCordinate={setCordinate}
        coordinate={coordinate}
        isOpenDelete={isOpenDelete}
      />
    </>
  );
};

export default GeoLocationMap;
