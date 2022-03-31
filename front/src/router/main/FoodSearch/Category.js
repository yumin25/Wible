import axios from "axios";

import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

function Category(wines, handleWines, url) {
  const [MeatOpen, setMeatOpen] = React.useState(false);
  const [FishOpen, setFishOpen] = React.useState(false);
  const [FoodOpen, setFoodOpen] = React.useState(false);
  const [LightOpen, setLightOpen] = React.useState(false);
  const [DessertOpen, setDessertOpen] = React.useState(false);
  const [clickedItem, setClickedItem] = React.useState("");
  const handleMeatClick = () => {
    setMeatOpen(!MeatOpen);
  };
  const handleFishClick = () => {
    setFishOpen(!FishOpen);
  };
  const handleFoodClick = () => {
    setFoodOpen(!FoodOpen);
  };
  const handleLightClick = () => {
    setLightOpen(!LightOpen);
  };
  const handleDessertClick = () => {
    setDessertOpen(!DessertOpen);
  };

  const handleClickedItem = (name) => {
    setClickedItem(name);
  };
  console.log(clickedItem);

  useEffect(() => {
    getWines();
    console.log(wines);
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, [clickedItem]);

  function getWines() {
    console.log(clickedItem);
    axios
      .get(url + `/food`, {
        params: { food: clickedItem },
      })
      .then(function (response) {
        console.log(response);
        handleWines(response.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      {/* 고기류 */}
      <List
        sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleMeatClick}>
          <ListItemText primary="고기류" />
          {MeatOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={MeatOpen} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemButton
              onClick={() => {
                handleClickedItem("소고기");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="소고기" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("돼지고기");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="돼지고기" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("닭고기");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="닭고기" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("오리고기");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="오리고기" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("양고기");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="양고기" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("사슴고기");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="사슴고기" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("송아지고기");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="송아지고기" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("절임육");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="절임육" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      {/* 생선류 */}
      <List
        sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleFishClick}>
          <ListItemText primary="해산물류" />
          {FishOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={FishOpen} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemButton
              onClick={() => {
                handleClickedItem("연어");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="연어" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("참치");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="참치" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("조개류");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="조개류" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("생선류   ");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="생선류" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      {/* 요리류 */}
      <List
        sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleFoodClick}>
          <ListItemText primary="요리류" />
          {FoodOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={FoodOpen} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemButton
              onClick={() => {
                handleClickedItem("파스타");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="파스타" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("매운요리");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="매운요리" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("버섯요리");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="버섯요리" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      {/* 가벼운음식 */}
      <List
        sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleLightClick}>
          <ListItemText primary="가벼운 음식" />
          {LightOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={LightOpen} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemButton
              onClick={() => {
                handleClickedItem("치즈");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="치즈" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("과일");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="과일" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("샐러드");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="샐러드" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      {/* 디저트 */}
      <List
        sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleDessertClick}>
          <ListItemText primary="디저트류" />
          {DessertOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={DessertOpen} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemButton
              onClick={() => {
                handleClickedItem("디저트");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="디저트" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("스낵류");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="스낵류" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClickedItem("식전주");
              }}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="식전주" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
}
export default Category;
