import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DynamicTitle from "../DynamicTitle/DynamicTitle";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Edit = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const toys = useLoaderData();
  const { description, quantity, price, _id } = toys;

  const handleEditToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedData = {price, quantity,description }


    fetch(`https://lego-land-seven.vercel.app/updateToy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Toy Updated", "Your data is updated", "success");
          form.reset();
            navigate('/myToys')
        }
      });
  };

  return (
    <div>
      <DynamicTitle head={`Modify ${toys.name}`}></DynamicTitle>
      <div className="p-12 flex justify-center">
        <form onSubmit={handleEditToy} className="card shadow-lg max-w-md">
          <div className="grid grid-cols-2 gap-4 p-8">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                required
                defaultValue={description}
                name="description"
                placeholder="write a description on the toy"
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
                defaultValue={price}
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
                defaultValue={price}
                name="quantity"
                placeholder="how many"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="text-center">
            <div>
              <input
                type="submit"
                className="btn btn-primary mb-8"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
