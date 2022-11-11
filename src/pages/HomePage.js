import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";

const HomePage = ({ formValue }) => {
  const [products, setproducts] = useState([]);
  console.log(products);
  useEffect(() => {
    if (formValue) {
      axios
        .post("http://localhost:3000/products", formValue)
        .then((resp) => {
          // setproducts(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    axios
      .get("http://localhost:3000/products")
      .then((resp) => {
        setproducts(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container    mx-auto xl:max-w-screen-md">
      {products.length
        ? products.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col justify-center items-center"
              >
                <div className="bg-white w-full p-4 mt-4 text-center rounded-xl">
                  {product.Address}
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default HomePage;
