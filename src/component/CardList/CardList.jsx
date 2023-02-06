import React from "react";
import Card from "../Card/Card";

const CardList = ({ staffList, deleteFun }) => {
  console.log(staffList);
  const cards = staffList.map(({ id, ...otherProps }) => {
    return <Card id={id} key={id} {...otherProps} deleteFun={deleteFun} />;
  });
  return <div>{cards}</div>;
};

export default CardList;
