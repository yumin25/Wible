import React, { useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import LikeItem from "./LikeItem";

function UserLike({ userSlice }) {
  const url = "http://localhost:8080";

  const [page, setPage] = useState(1);
  const [likes, setLikes] = useState([
    {
      wine_seq: 0,
      like_seq: 1,
      kname: "도멘 마르샹 그리요 후쇼트 샹베르땡 그랑 크뤼",
      ename: "DOMANE MARCHAND GRILLOT RUCHOTTES-CHANBERTIN GRAND GRU",
      type: "레드",
      like_cnt: 100,
      score: 4.8,
      country: "프랑스",
      img_path: "사진경로",
    },
    {
      wine_seq: 5,
      like_seq: 1,
      kname: "와인한글이름",
      ename: "와인영어이름",
      type: "화이트",
      like_cnt: 130,
      score: 3.3,
      country: "프랑스",
      img_path: "사진경로",
    },
  ]);

  const [userSeq, setUserSeq] = useState(userSlice.userSeq);

  function handlePageChange(event) {
    setPage(event);
  }

  function getUserLike() {
    axios
      .get(url + `/userinfo/likes/${userSeq}`, {
        params: {
          page: page - 1,
          size: 12,
        },
      })
      .then(function (response) {
        setLikes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div
        style={{
          marginTop: 60,
          marginLeft: "8%",
          marginRight: "8%",
          position: "absolute",
          width: "84%",
          height: "100%",
        }}
      >
        <div
          style={{
            // position: "relative",
            // display: "flex",
            // flexWrap: "wrap",
            // alignItems: "flex-start",
            width: "80%",
            marginLeft: "10%",
            marginRight: "10%",
            borderTop: "1px solid black",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              marginBottom: 40,
            }}
          >
            {likes &&
              likes.map((like) => (
                <div>
                  <LikeItem url={url} like={like} userSeq={userSeq}></LikeItem>
                </div>
              ))}
          </div>
        </div>

        <Pagination
          activePage={page}
          itemsCountPerPage={12}
          totalItemsCount={likes.length}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return { userSlice: state.user };
}
export default connect(mapStateToProps)(UserLike);
