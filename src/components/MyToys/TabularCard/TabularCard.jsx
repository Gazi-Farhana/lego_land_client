import { Rating } from "@mui/material";
import { MdDeleteForever, MdEditDocument } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure, you want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lego-land-seven.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              window.location.reload();
            }
          });
      }
    });
  };

  return (
    <div className="grid grid-cols-6 gap-6 card shadow-md my-4 p-8">
      <div>
        <div className="avatar">
          <div className="w-40 mask mask-hexagon">
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
      <div className="mt-10">
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
          <MdDeleteForever className="text-3xl text-red-600" />
        </button>
      </div>
      <div className="mt-10">
        <Link to={`/update/${_id}`} className="btn btn-ghost">
          <MdEditDocument className="text-3xl text-blue-600" />
        </Link>
      </div>
    </div>
  );
};

export default TabularCard;
