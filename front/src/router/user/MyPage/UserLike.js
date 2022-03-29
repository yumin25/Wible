import React, { useState,useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import LikeItem from "./LikeItem";

function UserLike({ userSlice }) {
  const url = "http://j6a303.p.ssafy.io/api";

  const [page, setPage] = useState(1);
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    getUserLike();
  }, []);
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

        setLikes(response.data.content);
        console.log(response)
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
                  <LikeItem url={url} like={like} userSeq={userSeq} getUserLike={getUserLike}></LikeItem>
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
