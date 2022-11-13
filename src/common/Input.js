const Input = ({
  label,
  name,
  type = "text",
  formik,
  placeholder = "",
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div className="w-full mb-5">
      <label className="mb-2 block font-bold tex-lg">{label}</label>
      <input
        className="p-2 text-slate-700 bg-white rounded-xl flex flex-col w-full border-2 border-solid border-slate-300 focus:outline-0  focus:border-violet-700"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-700"> {formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
