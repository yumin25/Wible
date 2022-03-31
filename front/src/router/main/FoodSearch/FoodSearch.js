import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import List from "./List";
import logo from "../../../res/img/logo.png";
import { Box, Link, Container } from "@mui/material/";
function FoodSearch() {
  const [wines, setWines] = useState([]);
  const url = "http://j6a303.p.ssafy.io/api";
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
      <Box
        sx={{
          my: 0,
          px: 30,
          display: "flex",
          justifyContent: "space-evenly",
          fontSize: 25,
          marginBottom: 3,
        }}
      >
        오늘의 음식에는 어떤 와인이 좋을까?
      </Box>
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
            width: "63%",
            border: "1px solid black",
          }}
        >
          <List wines={wines} url={url}></List>
        </div>
      </div>
    </>
  );
}
export default FoodSearch;
