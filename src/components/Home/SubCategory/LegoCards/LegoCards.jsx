import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const LegoCards = ({ toy }) => {
  const { _id, name, price, ratings, image } = toy;

  return (
    <div className="card card-side bg-base-100 shadow-xl lg:mg-0 mb-4" data-aos="flip-left">
      <figure className="">
        <img className="w-48 hidden lg:block" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <img src={image} alt="" className="lg:hidden"/>
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <Rating
          name="half-rating"
          defaultValue={ratings}
          readOnly
          precision={0.5}
        />
        <Link to={`/allToys/${_id}`} className="card-actions justify-end">
          <button className="btn btn-primary normal-case">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LegoCards;
