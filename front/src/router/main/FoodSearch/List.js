import React, { useEffect, useState } from "react";
import axios from "axios";
import WineItem from "./WineItem";
function List({ wines, url }) {
  //   getWines;
  return (
    <>
      <div>
        {wines &&
          wines.map((wine) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() =>
                (document.location.href = `/detail/${wine.wineSeq}`)
              }
            >
              <WineItem wine={wine} url={url}></WineItem>
            </div>
          ))}
      </div>
    </>
  );
}
export default List;
