import logo from "../../res/img/logo.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Breadcrumbs, Link, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material/";

export default function SurveyResult() {
  const url = "http://localhost:8080";
  const { state } = useLocation();
  const [results, setResults] = useState([]);

  // const country = {
  //   france: false,
  //   italy: false,
  //   portugal: false,
  //   spain: false,
  //   germany: false,
  //   america: false,
  //   canada: false,
  //   chile: false,
  //   australia: false,
  //   newZealand: false,
  //   etc: false,
  // };
  // const countryString = JSON.stringify(country);
  let minPrice;
  let maxPrice;
  if (state.price === 1) {
    minPrice = 0;
    maxPrice = 19999;
  } else if (state.price === 2) {
    minPrice = 20000;
    maxPrice = 39999;
  } else if (state.price === 3) {
    minPrice = 40000;
    maxPrice = 69999;
  } else if (state.price === 4) {
    minPrice = 70000;
    maxPrice = 199999;
  } else {
    minPrice = 0;
    maxPrice = 9999999;
  }
  let body;
  if (state.body === 0) {
    body = null;
  } else {
    body = state.body;
  }
  let sweet;
  if (state.sweet === 0) {
    sweet = "";
  } else {
    sweet = state.sweet;
  }

  const getResult = () => {
    axios
      .get(url + `/search`, {
        params: {
          type: state.wine,
          price_lower: minPrice,
          price_upper: maxPrice,
          sweet: sweet,
          body: body,
          country: "FRANCE",
        },
      })
      .then((res) => {
        console.log(res.data.content);
        setResults(res.data.content);
      });
  };

  useEffect(() => {
    getResult();
    console.log(results);
  }, []);

  return (
    <>
      {/* 상단 구성 */}
      <div>
        <Breadcrumbs style={{ display: "flex", flexDirection: "row-reverse", marginTop: 10, marginRight: 350 }} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/accounts/signup">
            회원가입
          </Link>
          <Link underline="hover" color="inherit" href="/accounts/login">
            로그인
          </Link>
        </Breadcrumbs>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link href="/">
            <img width={250} src={logo} alt="logo" />
          </Link>
        </Box>
        <Box sx={{ mt: 10, mb: 5, mx: 20, display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Typography variant="h5" sx={{ mb: 10, fontWeight: "bold" }}>
            당신을 위한 wible 와인 추천
          </Typography>
          {/* 추천목록 */}
          <Box sx={{ m: 2, display: "flex", justifyContent: "space-evenly" }}>
            {results &&
              results.map((wine, index) => {
                return (
                  <Card sx={{ minWidth: 230, maxWidth: 230, minHeight: 350 }} key={index}>
                    <CardActionArea href={"/detail/" + wine.wineSeq}>
                      <CardMedia component="img" height="250" image="" alt="와인이미지" />
                      <CardContent>
                        <Box sx={{ height: 70 }}>
                          <Typography gutterBottom sx={{ fontSize: 20, fontWeight: "bold" }} component="div">
                            {wine.kname}
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: 12, fontWeight: "bold" }} color="text.secondary">
                          {wine.price} 원
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
          </Box>
        </Box>
      </div>
    </>
  );
}
