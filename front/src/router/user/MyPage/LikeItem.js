import CircleIcon from "@mui/icons-material/Circle";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import search from "../../../res/img/search.png";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
function LikeItem({ url, like, userSeq }) {
  const [likeIcon, setLikeIcon] = useState(true);
  function handleLikeIcon(event) {
    setLikeIcon(event);
  }

  function ClickHeart() {
    axios
      .post(url + `/wine/like`, {
        user_seq: userSeq,
        wine_seq: like.wine_seq,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function RemoveHeart() {
    axios
      .delete(url + `/wine/like`, {
        data: {
          user_seq: userSeq,
          wine_seq: like.wine_seq,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div
      style={{
        width: 180,
        height: 290,
        marginBottom: 10,
        marginTop: 30,
        marginLeft: 18,
        marginRight: 27,
        borderRadius: 10,
        boxShadow: "2px 3px 7px 2px lightgrey",
        padding: 15,
      }}
    >
      <div id="image" style={{ height: 140 }}>
        <img
          src={`j6a303.p.ssafy.io/img/${like.ename}.jpg`}
          height="140"
          width="90"
        ></img>
      </div>
      <div
        id="heart"
        style={{ marginTop: 10, height: 25 }}
        onClick={() => {
          if (likeIcon === true) {
            handleLikeIcon(false);
            RemoveHeart();
          } else {
            handleLikeIcon(true);
            ClickHeart();
          }
        }}
      >
        {likeIcon === true ? (
          <FavoriteIcon
            style={{ color: "#F9595F", cursor: "pointer" }}
          ></FavoriteIcon>
        ) : (
          <FavoriteBorderOutlinedIcon
            style={{ color: "#F9595F", cursor: "pointer" }}
          ></FavoriteBorderOutlinedIcon>
        )}
      </div>
      <div
        id="name"
        style={{ height: 80, cursor: "pointer" }}
        onClick={() => (document.location.href = `/detail/${like.wineSeq}`)}
      >
        <div id="kname" style={{ fontSize: 14, marginTop: 3 }}>
          {like.kname}
        </div>
        <div id="ename" style={{ fontSize: 12, color: "#B2ACAC" }}>
          {like.ename}
        </div>
      </div>

      <div id="score" style={{ height: 30, display: "flex", marginTop: 10 }}>
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
