import CircleIcon from "@mui/icons-material/Circle";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import search from "../../../res/img/search.png";
import Rating from "@mui/material/Rating";

function ReviewItem({ url, review, userSeq }) {
  console.log(review);
  const [modify, setModify] = useState(false);
  const [content, setContent] = useState(review.review_text);
  const [score, setScore] = useState(review.review_score);
  console.log(content);
  function ModifyReview() {
    axios
      .put(url + `/wine/review`, {
        review_text: content,
        //////////////review_score인지 reviewscore인지 확인하자
        reviewscore: score,
        review_seq: review.review_seq,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  }

  //user_seq 이거 !!!!!추가해야함
  function DeleteReview() {
    axios
      .delete("/wine/review", {
        data: {
          user_seq: userSeq,
          wine_seq: review.wine_seq,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function contentHandler(event) {
    setContent(event.target.value);
  }
  function scoreHandler(event) {
    setScore(event.target.value);
  }
  return (
    <div
      style={{
        borderBottom: "1px solid #C4C4C4",
        height: 200,
        display: "flex",
      }}
    >
      <div id="img" style={{ width: "10%", marginLeft: 20, marginRight: 40 }}>
        <img
          src={`j6a303.p.ssafy.io/img/${review.ename}.jpg`}
          height="130"
          width="90"
        ></img>
      </div>
      <div id="infos" style={{ width: "70%", marginTop: 20 }}>
        <div
          id="type, country,grapes"
          style={{ fontSize: 15, display: "flex" }}
        >
          <div id="type" style={{ marginRight: 10 }}>
            {review.type === "레드" && (
              <div style={{ display: "flex" }}>
                <CircleIcon style={{ color: "#C50D0D" }}></CircleIcon>
                <div style={{ marginLeft: 5 }}>Red</div>
              </div>
            )}
            {review.type === "화이트" && (
              <div style={{ display: "flex" }}>
                <CircleIcon style={{ color: "#C3ECB8" }}></CircleIcon>
                <div style={{ marginLeft: 5 }}>White</div>
              </div>
            )}
            {review.type === "스파클링" && (
              <div style={{ display: "flex" }}>
                <CircleIcon style={{ color: "#CBF9FF" }}></CircleIcon>
                <div style={{ marginLeft: 5 }}>Sparkling</div>
              </div>
            )}
            {review.type === "로제" && (
              <div style={{ display: "flex" }}>
                <CircleIcon style={{ color: "#FFAEAE" }}></CircleIcon>
                <div style={{ marginLeft: 5 }}>Rose</div>
              </div>
            )}
            {review.type === "디저트" && (
              <div style={{ display: "flex" }}>
                <CircleIcon style={{ color: "#FFF4CC" }}></CircleIcon>
                <div style={{ marginLeft: 5 }}>Dessert</div>
              </div>
            )}
          </div>
          <div>/</div>
          <div id="country" style={{ marginLeft: 10, marginRight: 10 }}>
            {review.country}
          </div>
          <div>/</div>
          <div id="grapes" style={{ marginLeft: 10, marginRight: 3 }}>
            {review.grapes}
          </div>
        </div>

        <div style={{ marginTop: 10, fontSize: 20 }}>{review.kname}</div>
        <div style={{ fontSize: 15, color: "#B2ACAC", marginBottom: 10 }}>
          {review.ename}
        </div>
        {modify === false ? (
          <div style={{ fontSize: 14 }}>{review.review_text}</div>
        ) : (
          <input
            value={content}
            onChange={contentHandler}
            style={{ width: "100%" }}
          ></input>
        )}
        <div style={{ marginTop: 10 }}>
          {modify === false ? (
            <Button
              color="secondary"
              style={{
                border: "1px solid #E8E7E7",
                maxWidth: 40,
                maxHeight: 25,
                minWidth: 40,
                minHeight: 25,
                fontSize: 10,
                color: "#B2ACAC",
              }}
              onClick={() => {
                setModify(true);
              }}
            >
              수정
            </Button>
          ) : (
            <Button
              color="secondary"
              style={{
                border: "1px solid #E8E7E7",
                maxWidth: 40,
                maxHeight: 25,
                minWidth: 40,
                minHeight: 25,
                fontSize: 10,
                color: "#B2ACAC",
              }}
              onClick={() => {
                setModify(false);
                ModifyReview();
              }}
            >
              완료
            </Button>
          )}

          <Button
            color="secondary"
            style={{
              marginLeft: 5,
              border: "1px solid #E8E7E7",
              maxWidth: 40,
              maxHeight: 25,
              minWidth: 40,
              minHeight: 25,
              fontSize: 10,
              color: "#B2ACAC",
            }}
            onClick={() => {
              DeleteReview();
            }}
          >
            삭제
          </Button>
        </div>
      </div>

      <div id="ratings" style={{ width: "20%" }}>
        <div style={{ textAlign: "center", marginTop: 50 }}>나의 평점</div>
        <div style={{ textAlign: "center", fontSize: 30 }}>
          {modify === false ? (
            <div> {review.review_score}</div>
          ) : (
            <input
              value={score}
              onChange={scoreHandler}
              style={{ width: "50%", fontSize: 20, textAlign: "center" }}
            ></input>
          )}
        </div>
        <div id="star">
          <Rating
            style={{
              marginLeft: 30,
              marginBottom: 20,
              marginTop: 5,
              color: "#891826",
            }}
            name="read-only"
            value={Math.floor(review.review_score)}
            readOnly
            size="small"
          />
        </div>
      </div>
    </div>
  );
}
export default ReviewItem;
