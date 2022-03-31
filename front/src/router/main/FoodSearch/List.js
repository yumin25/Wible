import React, { useEffect, useState } from "react";
import axios from "axios";
import WineItem from "./WineItem";
import food_img from "../../../res/img/food_img.png";
function List({ wines, url }) {
  //   getWines;
  return (
    <>
    {wines.length===0?(
    <div style={{marginTop:30,marginLeft:40}}>
      <img width={990} src={food_img} alt="logo" />
    </div>):(      <div style={{              
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        marginBottom: 40,}}>
        {wines &&
          wines.map((wine) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() =>
                (document.location.href = `/detail/${wine.wineSeq}`)
              }
            >
              <WineItem wine={wine} url={url}></WineItem>
            </div>
          ))}
      </div>)}

    </>
  );
}
export default List;
