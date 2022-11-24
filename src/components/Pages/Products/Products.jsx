import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    }
  });

  console.log(products);
  return (
    <div className="bg-base-200 py-2">
      <h3 className="ml-6  p-4 text-xl uppercase font-bold mt-4">
        New Added Products
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {
            products.map(product => <SingleProduct product={product} />)
        }
      </div>
      <div className="flex justify-center my-3">
            <Link className="btn btn-warning" to='/products'>See More</Link>
          </div>
    </div>
  );
};

export default Products;
