import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HomePage = ({ products, setproducts }) => {

  useEffect(() => {
    if (products) {
      axios.get("http://localhost:3000/products").then((resp) => {
        setproducts(resp.data);
      });
    }
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
                  <NavLink to={`RegisterUserLeaflet/${product.id}`}>
                    {product.Address}
                  </NavLink>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default React.memo(HomePage);
