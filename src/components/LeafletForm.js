import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LeafletForm = ({ coordinate, userId, confirmHandler, setproducts }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    Address: "",
    phoneNumber: "",
    latitude: "",
    longitude: "",
  });

  const [onEditForm, setEditForm] = useState();

  useEffect(() => {
    if (coordinate) {
      const coord = Object.values(coordinate);
      setInputValue({ ...inputValue, latitude: coord[0], longitude: coord[1] });
    }
  }, [coordinate]);

  useEffect(() => {
    if (userId) {
      setInputValue(userId);
    }
  }, [userId]);

  const changeHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e, value) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/products", value)
      .then((resp) => {
        axios
          .get("http://localhost:3000/products")
          .then((resp) => {
            setproducts(resp.data);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    // navigate("/");
  };

  const onEditFormHandler = (e) => {
    e.preventDefault();
    setEditForm({ ...inputValue });
    axios
      .put(`http://localhost:3000/products/${userId.id}`, inputValue)
      .then((resp) => {})
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  return (
    <div className="relative">
      <form onSubmit={(e) => submitHandler(e, inputValue)} className="p-4">
        <div className="flex flex-col w-full  mb-5 ">
          <label className="mr-2">مختصات خانه</label>
          <input
            type="text"
            name="latitude"
            placeholder="عرض جغرافیایی"
            className=" text-slate-800 mb-2 p-2 rounded-xl border-2 border-solid border-slate-300 focus:outline-0 focus:border-violet-700"
            onChange={changeHandler}
            value={inputValue.latitude}
          />

          <input
            type="text"
            name="longitude"
            placeholder="طول جغرافیایی"
            className=" text-slate-800 rounded-xl p-2 border-2 border-solid border-slate-300 focus:outline-0 focus:border-violet-700"
            onChange={changeHandler}
            value={inputValue.longitude}
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
            className=" text-slate-800 w-full p-2  rounded-xl border-2 border-solid border-slate-300 focus:outline-0 focus:border-violet-700"
            value={inputValue.Address}
            onChange={changeHandler}
          />
        </div>
        {userId ? (
          <div className="flex gap-2">
            <button
              onClick={onEditFormHandler}
              className="bg-purple-700  px-4 py-2 rounded-xl"
            >
              ادیت موقعیت کاربر
            </button>
            <button
              onClick={confirmHandler}
              className="bg-red-700 px-4 py-2 rounded-xl"
            >
              حذف نام کاربر
            </button>
          </div>
        ) : (
          <button
            onSubmit={(e) => submitHandler(e, inputValue)}
            className="bg-purple-700 w-full px-4 py-2 rounded-xl"
          >
            ثبت موقعیت کاربر
          </button>
        )}
      </form>
    </div>
  );
};

export default LeafletForm;
