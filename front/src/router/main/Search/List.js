import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material/";
import search from "../../../res/img/search.png";
import WineItem from "./WineItem";
import Pagination from "react-js-pagination";
import "./Paging.css";
function List({ wines, totalCnt, page, handlePageChange, url, goDetail }) {
  console.log(totalCnt);
  return (
    <>
      <div>
        {wines &&
          wines.map((wine) => (
            ////detail url 바꿔야함. 상진님께 여줘보자!
            <div
              onClick={() =>
                (document.location.href = `/detail/${wine.wineSeq}`)
              }
            >
              <WineItem wine={wine}></WineItem>
            </div>
          ))}
      </div>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={totalCnt}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  );
}
export default List;
