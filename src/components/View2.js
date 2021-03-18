import React from "react";
import wood from "../img/wood.jpg";
import work from "../img/work.jpg";
import family from "../img/family.jpg";
import key from "../img/key.jpg";

const View2 = () => {
  return (
    <div className="view2 view fullBox">
      <div className=" box">
        <img src={wood} alt="wood" />
        <div className="shadow"></div>
      </div>
      <div className=" box">
        <img src={work} alt="work" />
      </div>
      <div className=" box">
        <img src={family} alt="family" />
      </div>
      <div className=" box">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nulla,
          expedita sapiente numquam quidem provident neque?
        </p>
        <img src={key} alt="key" />
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default View2;
