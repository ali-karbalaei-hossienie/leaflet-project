import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HomePage = ({ products, setproducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  // get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (products) {
      axios.get("http://localhost:3000/products").then((resp) => {
        setproducts(resp.data);
      });
    }
  }, []);

  return (
    <div className="container mx-auto xl:max-w-screen-lg">
      {products.length
        ? currentProduct.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col justify-center items-center"
              >
                <div className="bg-white shadow-xl w-full p-4 mt-4 text-center rounded-xl">
                  <NavLink
                    className=" block w-full hover:text-purple-700"
                    to={`RegisterUserLeaflet/${product.id}`}
                  >
                    {product.Address}
                  </NavLink>
                </div>
              </div>
            );
          })
        : ""}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

export default React.memo(HomePage);

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="flex  mt-3">
      {pageNumber.map((number) => {
        return (
          <div
            className="border border-solid border-slate-400 px-2 bg-white "
            key={number}
          >
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </div>
        );
      })}
    </div>
  );
};
