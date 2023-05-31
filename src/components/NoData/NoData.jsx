import React from "react";
import { Link } from "react-router-dom";

const NoData = () => {
  return (
    <div className="flex justify-center">
      <div>
        <Link to='/'>
          <img src="assets/images/404.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default NoData;
