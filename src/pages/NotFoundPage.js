import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container px-4 mx-auto xl:max-w-screen-lg">
      <div className="mt-5">
        <p className="bg-purple-200 p-4 text-center">صفحه مورد نظر پیدا نشد</p>
        <Link
          className="text-blue-500 text-center block mt-5 bg-red-200 p-4"
          to="/"
        >
          به صفحه اصلی بروید
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
