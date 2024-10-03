import React from "react";

const typography = () => {
  return (
    <>
      <div className="font">
        <p className="font-bold text-3xl">FONT FAMILY</p>
        <p className="font-sans">Font sans</p>
        <p className="font-mono">Font serif</p>
        <p className="font-serif">Font mono</p>
        <p className="font-bold text-3xl">FONT SIZES</p>
        <p className="text-sm">Small</p>
        <p className="text-base">Base</p>
        <p className="font-xl-">Small</p>
        <p className="font-bold text-3xl">FONT RESPONSIVE</p>
        <p className="sm:text-sm">small Device</p>
        <p className="sm:text-md">Medium Device</p>
        <p className="sm:text-xl">Xtra Large Device</p>
        <p className="font-bold text-3xl">EXTRA CLASESS</p>
        <p className="leading-7"><span className="font-bold">Lorem ipsum dolor sit </span>amet consectetur adipisicing elit. Fugit dolores, eos nulla molestiae recusandae porro sequi dolor accusantium, sunt perspiciatis dolorum aut suscipit sint iste. Est voluptatem cum earum <span className="font-extrabold text-3xl">dolorem!</span></p>
      </div>
    </>
  );
};

export default typography;
