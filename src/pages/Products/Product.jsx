import React from "react";
import { Link, useParams } from "react-router";

const Product = () => {
  const { idp } = useParams();
  return (
    <div className="flex flex-col gap-7 items-center">
      <p> product number {idp}</p>
      <Link
        className="text-lg bg-yellow-700 font-semibold hover:bg-yellow-600 
        transition duration-300 ease-in-out
        rounded-full py-2 px-4"
        to={`Detail`}
      >
        View Details
      </Link>
    </div>
  );
};

export default Product;
