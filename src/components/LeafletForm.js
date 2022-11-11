import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import { useNavigate } from "react-router-dom";

const LeafletForm = ({ coordinate, formValue, setFormValue }) => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    Address: "",
    phoneNumber: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    if (coordinate) {
      const coord = Object.values(coordinate);
      setInputValue({ ...inputValue, latitude: coord[0], longitude: coord[1] });
    }
  }, [coordinate]);

  const changeHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setFormValue([...formValue, { ...inputValue, id: Date.now() }]);
    setFormValue({ ...inputValue });
    navigate("/");
  };

  return (
    <>
      <form onSubmit={submitHandler} className="p-4">
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
        <button
          onSubmit={submitHandler}
          className="bg-purple-700 w-full px-4 py-2 rounded-xl"
        >
          ثبت موقعیت کاربر
        </button>
      </form>
    </>
  );
};

export default LeafletForm;
