import React from 'react';

const Cards = (props) => {
  const { img } = props;
  return (
    <div className="overflow-hidden w-[250px] h-[150px] bg-white rounded-md shadow-md">
      <img src={img}  />
    </div>
  );
};

export default Cards;