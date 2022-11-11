import { useEffect, useState } from "react";
import ShowMapLeaflet from "./ShowMapLeaflet";

const LoadingMap = ({ coordinate, setCordinate }) => {
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
      <ShowMapLeaflet
        location={location}
        setCordinate={setCordinate}
        coordinate={coordinate}
      />
    </>
  );
};

export default LoadingMap;
