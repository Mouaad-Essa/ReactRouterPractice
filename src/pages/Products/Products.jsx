import React from "react";
import { Link, NavLink } from "react-router";

function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 12000 },
    { id: 2, name: "Smartphone", price: 7500 },
    { id: 3, name: "Headphones", price: 1200 },
    { id: 4, name: "Smartwatch", price: 2300 },
    { id: 5, name: "Gaming Console", price: 4500 },
    { id: 6, name: "Tablet", price: 6000 },
  ];

  return (
    <div>
      <p className="py-5">this is all products page</p>
      <div className="flex gap-4 items-center justify-center">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              to={`${product.id}`}
              className="text-sm border-2 w-28 h-36 p-5 rounded-md"
            >
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
