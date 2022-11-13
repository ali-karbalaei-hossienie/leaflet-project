import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import http from "../services/httpService";

const LeafletForm = ({
  coordinate,
  user,
  confirmDeleteHandler,
  setproducts,
}) => {
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
      formik.values.latitude = inputValue.latitude;
      formik.values.longitude = inputValue.longitude;
    }
  }, [coordinate]);

  useEffect(() => {
    if (user) {
      setInputValue(user);
    }
  }, [user]);

  const submitHandler = async (values) => {
    try {
      await http.post("/products", values);
      const { data } = await http.get("/products");
      setproducts(data);
      toast.success("ثبت آدرس شما با موفقیت انجام شد");
      navigate("/");
    } catch (error) {
      toast.error("در خواست شما با خطا انجام شد");
    }
  };

  const onEditFormHandler = async (e) => {
    e.preventDefault();
    try {
      await http.put(`/products/${user.id}`, formik.values);
      toast.success(" ویرایش  کاربری شما با موفقیت انجام شد");
      navigate("/");
    } catch (error) {
      toast.error("در خواست شما با خطا انجام شد");
    }
  };

  const initialValues = {
    Address: inputValue ? inputValue.Address : "",
    phoneNumber: inputValue ? inputValue.phoneNumber : "",
    latitude: inputValue ? inputValue.latitude : "",
    longitude: inputValue ? inputValue.longitude : "",
  };

  let validationSchema = yup.object({
    Address: yup.string().required("Adress is required"),
    phoneNumber: yup.string().required("phoneNumber is required"),
    latitude: yup.number().required("لطفا مکان خود را روی نقشه تعیین کنید"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: submitHandler,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="relative">
      <form onSubmit={formik.handleSubmit} className="p-4">
        <div className="flex flex-col w-full  mb-5 ">
          <label className="mr-2">مختصات خانه</label>
          <Input
            name="latitude"
            formik={formik}
            placeholder="طول جغرافیایی"
            value={formik.values.latitude}
            onChange={formik.handleChange}
          />
          <Input
            name="longitude"
            formik={formik}
            placeholder="عرض جغرافیایی"
            value={formik.values.longitude}
            onChange={formik.handleChange}
          />
        </div>
        <Input
          name="phoneNumber"
          formik={formik}
          label="شماره همراه"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Input
          name="Address"
          formik={formik}
          label=" آدرس کاربر"
          value={formik.values.Address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {user ? (
          <div className="flex gap-2">
            <button
              onClick={onEditFormHandler}
              className="bg-purple-700  px-4 py-2 rounded-xl  disabled:bg-gray-400 disabled:text-slate-600"
              disabled={!formik.isValid}
            >
              ادیت موقعیت کاربر
            </button>
            <button
              onClick={confirmDeleteHandler}
              type="submit"
              className="bg-red-700 px-4 py-2 rounded-xl  disabled:bg-gray-400 disabled:text-slate-600"
              disabled={!formik.isValid}
            >
              حذف نام کاربر
            </button>
          </div>
        ) : (
          <button
            type="submit"
            className="bg-purple-700 w-full px-4 py-2 rounded-xl disabled:bg-gray-400 disabled:text-slate-600"
            disabled={!formik.isValid}
          >
            ثبت موقعیت کاربر
          </button>
        )}
      </form>
    </div>
  );
};

export default LeafletForm;
