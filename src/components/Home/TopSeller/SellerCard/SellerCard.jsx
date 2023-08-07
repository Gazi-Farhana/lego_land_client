/* eslint-disable react/prop-types */

import { Rating } from "@mui/material";



const SellerCard = ({ seller }) => {
    const { img, name, rating, origin } = seller
    return (

        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title justify-center">
                    {name}
                </h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-center">
                    <div className="badge badge-outline">{origin}</div>
                    <div className="badge badge-outline">Ratings: {rating}</div>
                    <Rating
                        name="half-rating"
                        defaultValue={rating}
                        readOnly
                        precision={0.5}
                    />
                </div>
            </div>
        </div>
    );
};

export default SellerCard;