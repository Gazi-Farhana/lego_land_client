import React, { useEffect, useState } from "react";
import LegoCards from "../LegoCards/LegoCards";

const BuilderCat = () => {
  const [lego, setLego] = useState([]);


  useEffect(() => {
    fetch("https://lego-land-seven.vercel.app/category?sub_category=LEGO_Builder")
      .then((res) => res.json())
      .then((data) => setLego(data));
  }, []);
  return <div className="lg:grid grid-cols-3 gap-4">
    {lego.map(toy=> <LegoCards key={toy._id} toy={toy}/>)}
  </div>;
};

export default BuilderCat;
