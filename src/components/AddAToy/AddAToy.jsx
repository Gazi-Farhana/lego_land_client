import React, { useContext } from "react";
import DynamicTitle from "../DynamicTitle/DynamicTitle";
import Swal from "sweetalert2";
import './AddAToy.css'
import { AuthContext } from "../../providers/AuthProviders";
import { useSetTitle } from "../../hooks/useSetTitle";

const AddAToy = () => {
  useSetTitle("Add Toy")
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const description = form.description.value;
    const image = form.photo.value;
    const seller_name = form.seller_name.value;
    const price = form.price.value;
    const sub_category = form.category.value;
    const ratings = form.rating.value;
    const quantity = form.quantity.value;

    const toyData = {
      name,
      seller_name,
      email,
      ratings,
      image,
      price,
      quantity,
      sub_category,
      description,
    };

    fetch("https://lego-land-seven.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Toy added", "Your data is inserted", "success");
          form.reset();
        }
      });
  };

  return (
    <div className="mx-auto text-center p-8">
      <DynamicTitle head={"Add a Toy"}></DynamicTitle>
      <form onSubmit={handleAddToy} className="card shadow-lg">
        <div className="grid grid-cols-3 p-8">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="photo url"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name of the toy"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              required
              name="description"
              placeholder="write a description on the toy"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller's Name</span>
            </label>
            <input
              type="text"
              required
              defaultValue={user.displayName}
              name="seller_name"
              placeholder="write your name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller's Email</span>
            </label>
            <input
              type="text"
              required
              readOnly
              name="email"
              defaultValue={user.email}
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              required
              name="price"
              placeholder="how much?"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              required
              name="quantity"
              placeholder="how many"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              required
              name="rating"
              placeholder="rate the product in (0-5)"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Subcategory</span>
            </label>
            <input
              type="text"
              required
              name="category"
              placeholder="in which category this toy falls"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-primary mb-8"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
