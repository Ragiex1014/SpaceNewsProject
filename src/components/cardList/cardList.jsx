import React from "react";
import Card from "../card/card";
import "./cardList.css";
const CardList = ({ data }) => {
  return (
    <div className="cardList">
      {data.map((data) => (
        <Card key={data.id} {...data}></Card>
      ))}
    </div>
  );
};

export default CardList;
