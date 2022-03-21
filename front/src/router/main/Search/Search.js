import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import List from "./List";
import logo from "../../../res/img/logo.png";
import { Box, Link, Container } from "@mui/material/";

function Search() {
  const url = "";
  const [totalCnt, setTotalCnt] = useState("0");
  const [wines, setWines] = useState();
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState({
    redWine: false,
    whiteWine: false,
    sparklingWine: false,
    roseWine: false,
    dessertWine: false,
  });
  const [temp, setTemp] = useState();

  const [sweetness, setSweetness] = useState("0");
  const [body, setBody] = useState("0");
  const [acidity, setAcidity] = useState("0");
  const [tanin, setTanin] = useState("0");
  const [price, setPrice] = React.useState([0, 1000000]);
  //최소가격 -> price[0], 최대가격 -> price[1]
  const [country, setCountry] = useState({
    france: false,
    italy: false,
    portugal: false,
    spain: false,
    germany: false,
    america: false,
    canada: false,
    chile: false,
    australia: false,
    newZealand: false,
    etc: false,
  });

  function typeHandler(event) {
    setType(event.target.value);
  }
  function keywordHandler(event) {
    setKeyword(event.target.value);
  }
  function sweetnessHandler(event) {
    setSweetness(event.target.value);
  }
  function bodyHandler(event) {
    setBody(event.target.value);
  }
  function acidityHandler(event) {
    setAcidity(event.target.value);
  }
  function taninHandler(event) {
    setTanin(event.target.value);
  }
  function priceHandler(event) {
    setPrice(event.target.value);
  }
  function countryHandler(event) {
    setCountry(event.target.value);
  }

  function getWines() {
    axios
      .get(url + `/search`, {
        // params 수정해야함
        params: {
          keyword: keyword,
          type: type,
          price_lower: price[0],
          price_upper: price[1],
          body: body,
          tannin: tanin,
          sweet: sweetness,
          acidity: acidity,
          country: country,
        },
      })
      .then(function (response) {
        setTotalCnt(response.data.data.totalCnt);
        setWines(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function goDetail() {}
  return (
    <>
      {/* 상단아이콘 */}
      <div>
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
      </div>
      {/* 정렬 및 검색 */}

      <Container sx={{ borderTop: 1, borderColor: "#E5E5E5", display: "flex" }}>
        <Box sx={{ borderRight: 1, borderColor: "#E5E5E5", paddingRight: 5 }}>
          <Category
            wines={wines}
            country={country}
            countryHandler={countryHandler}
            type={type}
            typeHandler={typeHandler}
            price={price}
            priceHandler={priceHandler}
            sweetness={sweetness}
            sweetnessHandler={sweetnessHandler}
            body={body}
            bodyHandler={bodyHandler}
            acidity={acidity}
            acidityHandler={acidityHandler}
            tanin={tanin}
            taninHandler={taninHandler}
          ></Category>
        </Box>

        <Box sx={{}}>
          <List wines={wines} url={url} goDetail={goDetail}></List>
        </Box>
      </Container>
    </>
  );
}
export default Search;
