import React from "react";
import Category from "./Category";
import List from "./List";
import logo from "../../../res/img/logo.png";
import { Box, Link, Container } from "@mui/material/";
function SearchPresenter() {
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
      <Container sx={{ borderTop: 1, borderColor: "#E5E5E5", display: "flex" }}>
        <Box sx={{ borderRight: 1, borderColor: "#E5E5E5", paddingRight: 10 }}>
          <Category></Category>
        </Box>

        <Box sx={{ paddingLeft: 10, paddingRight: 10 }}>
          <List></List>
        </Box>
      </Container>
    </>
  );
}
export default SearchPresenter;
