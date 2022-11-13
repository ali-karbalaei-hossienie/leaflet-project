import Input from "../common/Input";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthActions } from "../context/AuthProvider";
import { toast } from "react-toastify";
const initialValues = {
  email: "",
  password: "",
};

let validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل خود را به درستی وارد نمایید")
    .required("ایمیل خود را وارد نمایید"),
  password: yup.string().required("رمز عبور خود را وارد نمایید"),
});

const Login = () => {
  const [error, setError] = useState(null);
  let Navigate = useNavigate();
  const setAuth = useAuthActions();

  const onsubmit = async (values) => {
    const { email, password } = values;
    const datauser = {
      email,
      password,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/login",
        datauser
      );
      setAuth(data);
      setError(null);
      Navigate("/");
      toast.success("تبریک! با موفقیت وارد شدید");
    } catch (error) {
      setError(error.response.data.message);
      toast.error("لاگین با خطامواجه شد");
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
    <div className="container px-4 md:px-0 mx-auto xl:max-w-screen-md">
      <form className=" flex flex-col  my-20" onSubmit={formik.handleSubmit}>
        <Input
          name="email"
          formik={formik}
          label="ایمیل"
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

        <div className="formControl">
          <button
            className="bg-purple-700 rounded-lg dark:bg-slate-200   px-4 py-2 flex  cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-slate-700 disabled:text-black "
            type="submit"
            disabled={!formik.isValid}
          >
            submit
          </button>
          {error && <p className="text-red-700 ">error is: {error}</p>}

          <Link to="/signup">
            <p className="mt-3.5 bg-purple-200 dark:bg-slate-400 p-2 inline-block">
              هنوز ثبت نام نکرده اید؟
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
