import React from "react";
import Card from "../Card/Card";

const CardList = ({ staffList, deleteFun }) => {
  const cards = staffList.map(({ id, ...otherProps }) => {
    return <Card  key={id} id={id} { ...otherProps} deleteFun={deleteFun} />;
  });
  return <div>{cards}</div>;
};

export default CardList;
