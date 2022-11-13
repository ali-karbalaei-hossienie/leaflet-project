import Input from "../common/Input";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthActions } from "../context/AuthProvider";
import { toast } from "react-toastify";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
let validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name length is not valid"),
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),
  password: yup.string().required("password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("passwordConfirm is required"),
});

const Signup = () => {
  const [error, setError] = useState(null);
  let Navigate = useNavigate();
  const setAuth = useAuthActions();

  const onsubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const datauser = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/register",
        datauser
      );
      localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      Navigate({ pathname: "/" });
      toast.success(" ثبت نام با موفقیت انجام شد ");
      setAuth(data);
    } catch (error) {
      setError(error.response.data.message);
      toast.error("ثبت نام با خطا مواجه شد");
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onsubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className="container px-4 mx-auto xl:max-w-screen-md">
      <form className=" flex flex-col  my-20" onSubmit={formik.handleSubmit}>
        <Input
          name="name"
          formik={formik}
          label="نام و نام خانوادگی"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        <Input
          name="email"
          formik={formik}
          label=" ایمیل"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        <Input
          name="password"
          formik={formik}
          label="رمز عبور"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        <Input
          name="passwordConfirm"
          formik={formik}
          label="تکرار رمز عبور"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
          onBlur={formik.handleBlur}
        />
        <div className="flex flex-col justify-start items-start">
          <button
            className="bg-purple-700 rounded-lg text-white px-4 py-2 flex  cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black "
            type="submit"
            disabled={!formik.isValid}
          >
            submit
          </button>
          {error && <p className="text-red-700">error is: {error}</p>}
          <Link to="/login">
            <p className="mt-3.5 bg-purple-200 p-2 inline-block">
              قبلا ثبت نام کرده اید ؟
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
