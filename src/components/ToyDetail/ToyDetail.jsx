import { Rating } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { useSetTitle } from "../../hooks/useSetTitle";

const ToyDetail = () => {
  const lego = useLoaderData();
  const {
    name,
    seller_name,
    description,
    sub_category,
    price,
    image,
    quantity,
    ratings,
    email,
  } = lego;

  useSetTitle(`${name}`);

  return (
    <div className="p-8 bg-base-200 ">
      <div className="card bg-base-100 shadow-xl p-4 max-w-2xl m-auto">
        <div className="m-auto">
          <img src={image} />
        </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>{description}</p>
          </div>
        <div className="grid grid-cols-2 justify-between mt-8 bg-base-300 p-4 rounded-xl">
          <div>
            <p>
              {" "}
              <span className="font-semibold">Type:</span> {sub_category}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${price}
            </p>
            <p>
              <span className="font-semibold">Available Quantity:</span>{" "}
              {quantity}
            </p>
            <Rating
              name="half-rating"
              defaultValue={ratings}
              readOnly
              precision={0.5}
            />
          </div>
          <div className="justify-self-center text-center">
            <h2 className="text-xl font-bold">Seller&apos;s Info</h2>
            <p>{seller_name}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetail;
