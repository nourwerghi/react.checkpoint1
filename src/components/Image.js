import React from "react";

const Image = ({ image, name }) => {
  return <img src={image} alt={name} className="card-img-top" style={{ borderRadius: "15px" }} />;
};

export default Image;
