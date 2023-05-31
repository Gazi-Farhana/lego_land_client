import React, { useContext, useEffect, useState } from "react";
import DynamicTitle from "../DynamicTitle/DynamicTitle";
import { AuthContext } from "../../providers/AuthProviders";
import TabularCard from "./TabularCard/TabularCard";
import { useSetTitle } from "../../hooks/useSetTitle";

const MyToys = () => {
  useSetTitle("My Toys")
  const { user } = useContext(AuthContext);
  const [sort, setSort] = useState("");
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(
      `https://lego-land-seven.vercel.app/toys?email=${user.email}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user, sort]);

  return (
    <div className="py-12">
      <DynamicTitle head={"My Toys"}></DynamicTitle>
      <div className="ml-8">
        <select
          onChange={(event) => setSort(event.target.value)}
          className="select select-bordered"
        >
          <option disabled selected>
            Price sort
          </option>
          <option value="high">High to To Low Price</option>
          <option value="low">Low to To High Price</option>
        </select>
      </div>
      <div className="p-12">
      {myToys.map(toys => <TabularCard key={toys._id}  toys={toys}/> )}
      </div>
    </div>
  );
};

export default MyToys;
