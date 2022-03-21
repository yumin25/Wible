import React, { useState } from "react";
import { Box, Button, Typography, Slider, Rating } from "@mui/material/";
import { styled } from "@mui/material/styles";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import { red } from "@mui/material/colors";

function Category({
  url,
  keyword,
  type,
  // price,
  body,
  sweetness,
  tanin,
  acidity,
  country,
  keywordHandler,
  maxPriceHandler,
  minPriceHandler,
  typeHandler,
  countryHandler,
  sweetnessHandler,
  bodyHandler,
  taninHandler,
  acidityHandler,
  getWines,
}) {
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "1",
    },
    {
      value: 40,
      label: "2",
    },
    {
      value: 60,
      label: "3",
    },
    {
      value: 80,
      label: "4",
    },
    {
      value: 100,
      label: "5",
    },
  ];

  const onSubmit = (event) => {
    if (event.key === "Enter") {
      console.log(keyword);
      if (keyword !== "" && keyword !== undefined) {
        getWines();
      } else {
        alert("검색어를 입력해주세요.");
      }
    }
  };

  function valuetext(value) {
    return `${value}원`;
  }
  const [price, setPrice] = React.useState([0, 1000000]);
  const handlePrice = (event, newValue) => {
    setPrice(newValue);
    minPriceHandler(newValue[0]);
    maxPriceHandler(newValue[1]);
  };

  const WineClickedStyle = {
    width: 86,
    height: 35,
    borderRadius: "30px",
    marginBottom: 10,
    marginRight: 10,
    background: "#891826",
    fontSize: 13,
  };
  const WineTypeStyle = {
    width: 86,
    height: 35,
    borderRadius: "30px",
    marginBottom: 10,
    marginRight: 10,
    background: "#ffffff",
    color: "#891826",
    fontSize: 13,
  };
  const CountryClickedStyle = {
    width: 86,
    height: 35,
    borderRadius: "30px",
    marginBottom: 10,
    marginRight: 5,
    background: "#891826",
    fontSize: 13,
  };
  const CountryTypeStyle = {
    width: 86,
    height: 35,
    borderRadius: "30px",
    marginBottom: 10,
    marginRight: 5,
    background: "#ffffff",
    color: "#891826",
    fontSize: 13,
  };
  const CategoryStyle = {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: "#4F0529",
  };
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#891826",
    },
    "& .MuiRating-iconHover": {
      color: "#891826",
    },
  });

  return (
    <>
      <div>
        {/* 종류 */}
        <div style={{ marginBottom: 20 }}>
          <div style={CategoryStyle}>종류</div>
          <Button
            variant="contained"
            style={type.redWine ? WineClickedStyle : WineTypeStyle}
            onClick={() => {
              if (type.redWine === true) {
                typeHandler({ ...type, redWine: false });
                //setType({ ...type, redWine: false });
              } else {
                typeHandler({ ...type, redWine: true });
                //setType({ ...type, redWine: true });
              }
            }}
          >
            레드
          </Button>

          <Button
            variant="contained"
            style={type.whiteWine ? WineClickedStyle : WineTypeStyle}
            onClick={() => {
              if (type.whiteWine === true) {
                typeHandler({ ...type, whiteWine: false });
                //setType({ ...type, whiteWine: false });
              } else {
                typeHandler({ ...type, whiteWine: true });
                //setType({ ...type, whiteWine: true });
              }
            }}
          >
            화이트
          </Button>
          <Button
            variant="contained"
            style={type.sparklingWine ? WineClickedStyle : WineTypeStyle}
            onClick={() => {
              if (type.sparklingWine === true) {
                typeHandler({ ...type, sparklingWine: false });
                //setType({ ...type, sparklingWine: false });
              } else {
                typeHandler({ ...type, sparklingWine: true });
                //setType({ ...type, sparklingWine: true });
              }
            }}
          >
            스파클링
          </Button>
          <br></br>
          <Button
            variant="contained"
            style={type.roseWine ? WineClickedStyle : WineTypeStyle}
            onClick={() => {
              if (type.roseWine === true) {
                typeHandler({ ...type, roseWine: false });
                //setType({ ...type, roseWine: false });
              } else {
                typeHandler({ ...type, roseWine: true });
                // setType({ ...type, roseWine: true });
              }
            }}
          >
            로제
          </Button>
          <Button
            variant="contained"
            style={type.dessertWine ? WineClickedStyle : WineTypeStyle}
            onClick={() => {
              if (type.dessertWine === true) {
                typeHandler({ ...type, dessertWine: false });
                //setType({ ...type, dessertWine: false });
              } else {
                typeHandler({ ...type, dessertWine: true });
                //setType({ ...type, dessertWine: true });
              }
            }}
          >
            디저트
          </Button>
        </div>

        {/* 가격 */}
        <div style={{ marginBottom: 30 }}>
          <div style={{ display: "flex" }}>
            <div style={CategoryStyle}>가격</div>
            <div
              style={{
                marginLeft: 3,
                marginTop: 22,
                fontSize: 12,
                color: "#4F0529",
              }}
            >
              (만원)
            </div>
          </div>
          <Box sx={{ width: 300, marginLeft: 1 }}>
            <Slider
              value={price}
              onChange={handlePrice}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              style={{ color: "#F4C6C9", marginBottom: 0 }}
            />
          </Box>
          <div style={{ display: "flex", fontSize: 15 }}>
            <div style={{ marginLeft: 3, marginRight: 282 }}>0</div>
            <div>100+</div>
          </div>
        </div>

        {/* 맛 */}
        <div style={{ marginBottom: 20 }}>
          <div style={CategoryStyle}>맛</div>
          <div>
            <div style={{ display: "flex" }}>
              <div>당도</div>
              <div style={{ marginRight: 18 }}>
                <div>
                  <StyledRating
                    name="customized-color"
                    defaultValue={sweetness}
                    onChange={(event, newValue) => {
                      if (newValue === null) {
                        newValue = 0;
                      }
                      sweetnessHandler(newValue);
                      //setSweetness(newValue);
                    }}
                    precision={1}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    icon={<CircleIcon fontSize="inherit" />}
                    emptyIcon={
                      <CircleOutlinedIcon
                        sx={{ color: red[50] }}
                        fontSize="inherit"
                      />
                    }
                  />
                </div>
              </div>
              <div>바디</div>
              <div>
                <div>
                  <StyledRating
                    name="customized-color"
                    defaultValue={body}
                    onChange={(event, newValue) => {
                      if (newValue === null) {
                        newValue = 0;
                      }
                      bodyHandler(newValue);
                      //setBody(newValue);
                    }}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={1}
                    icon={<CircleIcon fontSize="inherit" />}
                    emptyIcon={
                      <CircleOutlinedIcon
                        sx={{ color: red[50] }}
                        fontSize="inherit"
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>산도</div>
              <div style={{ marginRight: 18 }}>
                <div>
                  <StyledRating
                    name="customized-color"
                    defaultValue={acidity}
                    onChange={(event, newValue) => {
                      if (newValue === null) {
                        newValue = 0;
                      }
                      acidityHandler(newValue);
                      //setAcidity(newValue);
                    }}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={1}
                    icon={<CircleIcon fontSize="inherit" />}
                    emptyIcon={
                      <CircleOutlinedIcon
                        sx={{ color: red[50] }}
                        fontSize="inherit"
                      />
                    }
                  />
                </div>
              </div>
              <div>타닌</div>
              <div>
                <div>
                  <StyledRating
                    name="customized-color"
                    defaultValue={tanin}
                    onChange={(event, newValue) => {
                      if (newValue === null) {
                        newValue = 0;
                      }
                      taninHandler(newValue);
                      //setTanin(newValue);
                    }}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={1}
                    icon={<CircleIcon fontSize="inherit" />}
                    emptyIcon={
                      <CircleOutlinedIcon
                        sx={{ color: red[50] }}
                        fontSize="inherit"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 국가 */}
        <div style={{ marginBottom: 20, marginTop: 30, width: "1000" }}>
          <div style={CategoryStyle}>국가</div>

          <Button
            variant="contained"
            style={country.france ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.france === true) {
                countryHandler({ ...country, france: false });
                //setCountry({ ...country, france: false });
              } else {
                countryHandler({ ...country, france: true });
                //setCountry({ ...country, france: true });
              }
            }}
          >
            프랑스
          </Button>
          <Button
            variant="contained"
            style={country.italy ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.italy === true) {
                countryHandler({ ...country, italy: false });
                //setCountry({ ...country, italy: false });
              } else {
                countryHandler({ ...country, italy: true });
                //setCountry({ ...country, italy: true });
              }
            }}
          >
            이탈리아
          </Button>
          <Button
            variant="contained"
            style={country.portugal ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.portugal === true) {
                countryHandler({ ...country, portugal: false });
                //setCountry({ ...country, portugal: false });
              } else {
                countryHandler({ ...country, portugal: true });
                //setCountry({ ...country, portugal: true });
              }
            }}
          >
            포르투갈
          </Button>
          <Button
            variant="contained"
            style={country.spain ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.spain === true) {
                countryHandler({ ...country, spain: false });
                // setCountry({ ...country, spain: false });
              } else {
                countryHandler({ ...country, spain: true });
                // setCountry({ ...country, spain: true });
              }
            }}
          >
            스페인
          </Button>
          <br></br>
          <Button
            variant="contained"
            style={country.germany ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.germany === true) {
                countryHandler({ ...country, germany: false });
                //setCountry({ ...country, germany: false });
              } else {
                countryHandler({ ...country, germany: true });
                //setCountry({ ...country, germany: true });
              }
            }}
          >
            독일
          </Button>
          <Button
            variant="contained"
            style={country.america ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.america === true) {
                countryHandler({ ...country, america: false });
                //setCountry({ ...country, america: false });
              } else {
                countryHandler({ ...country, america: true });
                //setCountry({ ...country, america: true });
              }
            }}
          >
            미국
          </Button>
          <Button
            variant="contained"
            style={country.canada ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.canada === true) {
                countryHandler({ ...country, canada: false });
                //setCountry({ ...country, canada: false });
              } else {
                countryHandler({ ...country, canada: true });
                //setCountry({ ...country, canada: true });
              }
            }}
          >
            캐나다
          </Button>
          <Button
            variant="contained"
            style={country.chile ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.chile === true) {
                countryHandler({ ...country, chile: false });
                //setCountry({ ...country, chile: false });
              } else {
                countryHandler({ ...country, chile: true });
                //setCountry({ ...country, chile: true });
              }
            }}
          >
            칠레
          </Button>
          <br></br>
          <Button
            variant="contained"
            style={country.australia ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.australia === true) {
                countryHandler({ ...country, australia: false });
                //setCountry({ ...country, australia: false });
              } else {
                countryHandler({ ...country, australia: true });
                //setCountry({ ...country, australia: true });
              }
            }}
          >
            호주
          </Button>
          <Button
            variant="contained"
            style={country.newZealand ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.newZealand === true) {
                countryHandler({ ...country, newZealand: false });
                //setCountry({ ...country, newZealand: false });
              } else {
                countryHandler({ ...country, newZealand: true });
                //setCountry({ ...country, newZealand: true });
              }
            }}
          >
            뉴질랜드
          </Button>
          <Button
            variant="contained"
            style={country.etc ? CountryClickedStyle : CountryTypeStyle}
            onClick={() => {
              if (country.etc === true) {
                countryHandler({ ...country, etc: false });
                //setCountry({ ...country, etc: false });
              } else {
                countryHandler({ ...country, etc: true });
                //setCountry({ ...country, etc: true });
              }
            }}
          >
            기타
          </Button>
        </div>
      </div>
    </>
  );
}
export default Category;
