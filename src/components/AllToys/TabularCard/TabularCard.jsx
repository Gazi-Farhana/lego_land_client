import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TabularCard = ({ toys }) => {
  const {
    _id,
    name,
    seller_name,
    email,
    price,
    image,
    description,
    quantity,
    ratings,
  } = toys;
  return (
    <div className="grid grid-cols-5 gap-6 card shadow-md my-4 px-6 py-8">
      <div>
        <div className="avatar">
          <div className="w-48 mask mask-hexagon">
            <img src={image} />
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-400 font-bold">Seller's Info</p>
        <p>{seller_name}</p>
        <p>
          <small>{email}</small>
        </p>
      </div>
      <div>
        <p className="font-bold text-xl">{name}</p>
        <p>{description}</p>
      </div>
      <div>
        <p>
          {" "}
          <span className="font-bold">Price</span> ${price}
        </p>
        <p>
          {" "}
          <span className="font-bold">Quantity:</span> {quantity}pcs
        </p>
        <Rating
          name="half-rating"
          defaultValue={ratings}
          readOnly
          precision={0.5}
        />
      </div>
      <div className="pt-16">
        <Link to={`/allToys/${_id}`} className="card-actions justify-end">
          <button className="btn btn-primary normal-case">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default TabularCard;
