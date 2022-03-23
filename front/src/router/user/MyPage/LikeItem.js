import CircleIcon from "@mui/icons-material/Circle";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import search from "../../../res/img/search.png";
import Rating from "@mui/material/Rating";

function LikeItem({ url, like, userSeq }) {
  console.log(like);

  return (
    <div
      style={{
        width: 180,
        height: 300,
        marginBottom: 10,
        marginTop: 30,
        marginLeft: 18,
        marginRight: 27,
        borderRadius: 10,
        boxShadow: "2px 3px 7px 2px lightgrey",
        padding: 15,
      }}
    >
      <div id="image">
        <img src={search} height="140" width="90"></img>
      </div>
      <div id="heart" style={{ marginTop: 10 }}>
        gkxmgkxm
      </div>
      <div id="kname" style={{ fontSize: 14, marginTop: 10 }}>
        {like.kname}
      </div>
      <div id="ename" style={{ fontSize: 12, color: "#B2ACAC" }}>
        {like.ename}
      </div>
      <div id="score" style={{ display: "flex", marginTop: 10 }}>
        <div>{like.score}</div>
        <div style={{ marginTop: 3 }}>
          <Rating
            style={{
              marginLeft: 10,
              color: "#891826",
            }}
            name="read-only"
            value={Math.floor(like.score)}
            readOnly
            size="small"
          />
        </div>
      </div>
    </div>
  );
}
export default LikeItem;
