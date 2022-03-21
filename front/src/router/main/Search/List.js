import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material/";
import search from "../../../res/img/search.png";
import WineItem from "./WineItem";
const SearchInput = styled.input`
  position: relative;
  width: 650px;
  height: 30px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  :focus {
    outline: none;
  }
  border: none;
  font-size: 14 px;
  padding-left: 15px;
  background: #f1eded;
  placeholder: {
    color: white;
  }
`;

const SearchIcon = styled.img.attrs({
  src: search,
})`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 21.2%;
  left: 83%;
`;

function List(wines,url,goDetail) {
  const [page, setPage]= useState(1);
  const [value, setValue] = React.useState("Controlled");
  const [searchKeyword, setSearchKeyword] = useState("");
  // const [KEYWORD, setKEYWORD] = useState(keyword);
  const [KEYWORD, setKEYWORD] = useState();
  const [temp, setTemp] = useState();

  useEffect(() => {
    onSearchKeywordHandler();
  }, [temp]);

  const onSearchHandler = (event) => {
    setTemp(event.currentTarget.value);
    setKEYWORD(event.currentTarget.value);
  };

  const onSearchKeywordHandler = () => {
    if (temp !== null) {
      setSearchKeyword(temp);
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (event) => {
    // if (event.key === "Enter") {
    //   console.log(searchKeyword);
    //   if (searchKeyword !== "" && searchKeyword !== undefined) {
    //     let url = `/search/${searchCategory}/${searchKeyword}`;
    //     document.location.href = url;
    //   } else {
    //     alert("검색어를 입력해주세요.");
    //   }
    // }
  };
  const ItemStyle = {
    width: 665,
    height: 150,
    marginBottom: 10,
    borderBottom: "1px solid #C4C4C4",
    display: "flex",
  };
  return (
    <>
      <SearchInput
      // keyword수정
        value={KEYWORD}
        onChange={onSearchHandler}
        onKeyPress={onSubmit}
        placeholder="와인 검색"
      ></SearchInput>
      <SearchIcon></SearchIcon>
      <div>인기순</div>
      <div style={ItemStyle}>
        {wines &&
          wines.map((wine) => (
            <div onClick={() => goDetail(wine.wineSeq)}>
              <WineItem
                url={url}
                seq={wine.wineSeq}
                kname={wine.kname}
                ename={wine.ename}
                type={wine.type}
                country={wine.country}
                grapes={wine.grapes}
                price={wine.price}
                img_path={wine.img_path}
                score={wine.score}
              ></WineItem>
            </div>
          ))}
      </div>
      <div style={ItemStyle}>zzz</div>
    </>
  );
}
export default List;
