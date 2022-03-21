import CircleIcon from "@mui/icons-material/Circle";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function WineItem(
  url,
  seq,
  kname,
  ename,
  type,
  country,
  grapes,
  price,
  img_path,
  score
) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div id="front">
          <img src={img_path} height="220" width="160"></img>
        </div>

        <div id="middle">
          <div id="type"></div>
          <div id="kname"></div>
          <div id="ename"></div>
          <div>
            <div id="grapes"></div>
            <div id="country"></div>
          </div>
        </div>

        <div id="back">
          <div id="score"></div>
          <div id="star"></div>
          <div id="price"></div>
        </div>
      </div>
    </>
  );
}
export default WineItem;
