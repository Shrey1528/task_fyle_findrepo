import React from "react";
import "../css/Loader.css";
import { Bars } from "react-loader-spinner";
const loader = () => {
  return (
    <div className="loader">
      <Bars
        height="80"
        width="80"
        radius="9"
        color="#103783"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default loader;
