import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { idp } = useParams();
  return <div>these are details about the product num : {idp}</div>;
};

export default ProductDetails;
