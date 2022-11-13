import { useEffect, useState } from "react";
import LoadingMap from "../components/LoadingMap";
import LeafletForm from "../components/LeafletForm";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const RegisterUserLeaflet = ({ setproducts }) => {
  const [coordinate, setCordinate] = useState();
  const navigate = useNavigate();
  const Auth = useAuth();

  useEffect(() => {
    if (!Auth) {
      navigate("/login");
    }
  });

  return (
    <div className="flex flex-col sm:flex-row   ">
      <div className=" w-full h-screen sm:w-1/3   bg-slate-500 text-white ">
        <LeafletForm coordinate={coordinate} setproducts={setproducts} />
      </div>
      <div className=" w-full h-screen sm:w-2/3 sm:h-screen ">
        <LoadingMap coordinate={coordinate} setCordinate={setCordinate} />
      </div>
    </div>
  );
};

export default RegisterUserLeaflet;
