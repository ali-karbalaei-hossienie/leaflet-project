import { useEffect, useState } from "react";
import GeoLocationMap from "../components/GeoLocationMap";
import LeafletForm from "../components/LeafletForm";
import { useNavigate } from "react-router-dom";

const SabteAgahi = ({ setproducts }) => {
  const [coordinate, setCordinate] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("authState"));
    if (!data) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex flex-col sm:flex-row   ">
      <div className=" w-full h-screen sm:w-1/3 dark:bg-slate-800  bg-slate-500 text-white ">
        <LeafletForm coordinate={coordinate} setproducts={setproducts} />
      </div>
      <div className=" w-full h-screen sm:w-2/3 sm:h-screen ">
        <GeoLocationMap coordinate={coordinate} setCordinate={setCordinate} />
      </div>
    </div>
  );
};

export default SabteAgahi;
