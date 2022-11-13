import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeafletForm from "../components/LeafletForm";
import LoadingMap from "../components/LoadingMap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider";

const RegisterUserLeafletId = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [coordinate, setCordinate] = useState();
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const Auth = useAuth();

  let { id } = useParams();

  const DeleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/products/${userId.id}`)
      .then((resp) => {
        toast.success("حذف کاربری شما با موفقیت انجام شد");
        navigate("/");
      })
      .catch((error) => {
        toast.error("در خواست شما با خطا انجام شد");
      });
  };

  const confirmDeleteHandler = (e) => {
    e.preventDefault();
    setIsOpenDelete(!isOpenDelete);
  };

  useEffect(() => {
    if (!Auth) {
      navigate("/login");
    }
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((resp) => {
        setUserId(resp.data);
        const { latitude, longitude } = resp.data;
        const coordinateUser = [latitude, longitude];
        setCordinate(coordinateUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="relative">
      <div className="flex ">
        <div className=" w-1/3 h-screen  bg-slate-500 text-white ">
          <LeafletForm
            userId={userId}
            confirmDeleteHandler={confirmDeleteHandler}
            coordinate={coordinate}
          />
        </div>
        <div className=" w-2/3 h-screen ">
          <LoadingMap
            coordinate={coordinate}
            setCordinate={setCordinate}
            isOpenDelete={isOpenDelete}
          />
        </div>
      </div>
      <div
        className={`${
          isOpenDelete ? "block" : "hidden"
        }  backdrop-blur-sm absolute  top-0 h-screen w-screen flex justify-center items-center`}
      >
        <div className=" bg-red-700  p-6 shadow-xl rounded-xl text-slate-900 flex   items-center justify-center gap-3 ">
          <button
            onClick={() => setIsOpenDelete(false)}
            className="shadow-2xl bg-slate-100 p-4"
          >
            انصراف از حذف
          </button>
          <button onClick={DeleteHandler} className="bg-red-100  p-4">
            تایید حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterUserLeafletId;
