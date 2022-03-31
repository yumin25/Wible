import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import List from "./List";
import logo from "../../../res/img/logo.png";

import { Box, Link, Container } from "@mui/material/";
function FoodSearch() {
  const [wines, setWines] = useState([ 
//     {
//     "wineSeq": 2,
//     "kname": "프로테코 엑스트라 드라이 N.V.",
//     "ename": "Prosecco Extra Dry N.V.",
//     "type": "SPARKLING",
//     "country": "ITALY",
//     "grapes": "Merlot",
//     "price": 9404,
//     "img_path": null,
//     "score": 3.6
// },
// {
//     "wineSeq": 7,
//     "kname": "아르젠토 프로데코 트레비소 엑스트라 드라이 N.V.",
//     "ename": "Argento Prosecco Treviso Extra Dry N.V.",
//     "type": "SPARKLING",
//     "country": "ITALY",
//     "grapes": "Shiraz/Syrah, Grenache, Mourvedre",
//     "price": 10275,
//     "img_path": null,
//     "score": 3.5
// },{
//   "wineSeq": 7,
//   "kname": "아르젠토 프로데코 트레비소 엑스트라 드라이 N.V.",
//   "ename": "Argento Prosecco Treviso Extra Dry N.V.",
//   "type": "SPARKLING",
//   "country": "ITALY",
//   "grapes": "Shiraz/Syrah, Grenache, Mourvedre",
//   "price": 10275,
//   "img_path": null,
//   "score": 3.5
// },
// {
//   "wineSeq": 7,
//   "kname": "아르젠토 프로데코 트레비소 엑스트라 드라이 N.V.",
//   "ename": "Argento Prosecco Treviso Extra Dry N.V.",
//   "type": "SPARKLING",
//   "country": "ITALY",
//   "grapes": "Shiraz/Syrah, Grenache, Mourvedre",
//   "price": 10275,
//   "img_path": null,
//   "score": 3.5
// },
// {
//   "wineSeq": 7,
//   "kname": "아르젠토 프로데코 트레비소 엑스트라 드라이 N.V.",
//   "ename": "Argento Prosecco Treviso Extra Dry N.V.",
//   "type": "SPARKLING",
//   "country": "ITALY",
//   "grapes": "Shiraz/Syrah, Grenache, Mourvedre",
//   "price": 10275,
//   "img_path": null,
//   "score": 3.5
// },
]);
  //const url = "http://j6a303.p.ssafy.io/api";
  const url ="http://localhost:8080"
  function handleWines(event) {
    setWines(event);
  }
  return (
    <>
      {/* 상단아이콘 */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Link href="/">
          <img width={250} src={logo} alt="logo" />
        </Link>
      </Box>
      <Box
        sx={{
          my: 0,
          px: 50,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      ></Box>
      {/* <Box
        sx={{
          my: 0,
          px: 30,
          display: "flex",
          justifyContent: "space-evenly",
          fontSize: 25,
          marginBottom: 1,
        }}
      >
        오늘의 음식에는 어떤 와인이 좋을까?
      </Box> */}
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "7%", marginTop: 20 }}>
          <Category
            wines={wines}
            handleWines={handleWines}
            url={url}
          ></Category>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 25,
            marginLeft: "2%",
          }}
        >
          <List wines={wines} url={url}></List>
        </div>
      </div>
    </>
  );
}
export default FoodSearch;
