const Input = ({ label, name, type = "text", formik }) => {
  return (
    <div className="w-full mb-5">
      <label className="mb-2 block font-bold tex-lg">{label}</label>
      <input
        className="p-4 bg-white rounded-xl flex flex-col w-full border-2 border-solid border-slate-300 focus:outline-0  focus:border-violet-700"
        type={type}
        {...formik.getFieldProps({ name })}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-700"> {formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
