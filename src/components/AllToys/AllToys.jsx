import { useEffect, useRef, useState } from "react";
import TabularCard from "./TabularCard/TabularCard";
import DynamicTitle from "../DynamicTitle/DynamicTitle";
import { useSetTitle } from "../../hooks/useSetTitle";

const AllToys = () => {
  useSetTitle("All Toys")
  const query = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [allToys, setAllToys] = useState([]);
  
  
  const searchHandler = () => {
      let searchedData = query.current.value;
      setSearchQuery(searchedData);
      query.current.value = "";
    };
    
    useEffect(() => {
      if(searchQuery){
        fetch(`https://lego-land-seven.vercel.app/search?name=${searchQuery}`)
        .then(res=>res.json())
        .then(data=>setAllToys(data))
      }
      fetch(`https://lego-land-seven.vercel.app/search`)
        .then(res=>res.json())
        .then(data=>setAllToys(data))
    }
    ,[searchQuery])

  return (
    <div className="px-10">
      <DynamicTitle head={'All Toys'}></DynamicTitle>
      <div className="text-center">
      <input type="text" placeholder="Type here" ref={query} className="input input-bordered w-full max-w-xs" />
        <button onClick={searchHandler} className="btn btn-primary ml-8">Search</button>
      </div>
      <div>
        {allToys.map(toys => <TabularCard key={toys._id}  toys={toys}/> )}
      </div>
    </div>
  );
};

export default AllToys;
