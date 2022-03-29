import * as React from "react";
import { connect } from "react-redux";
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material/";

function WineList(props) {
  const wines = props.bestWine;

  return (
    <>
      {/* 와인 */}
      <Box sx={{ m: 2, display: "flex", justifyContent: "space-evenly" }}>
        {wines &&
          wines.map((wine, index) => {
            return (
              <Card sx={{ minWidth: 230, maxWidth: 230, minHeight: 350 }} key={index}>
                <CardActionArea href={"/detail/" + wine.wineSeq}>
                  {/* <CardMedia component="img" height="250" image="" alt="와인이미지" /> */}
                  <img
                    style={{
                      maxWidth: 250,
                      maxHeight: 250,
                      width: "auto",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    src={`j6a303.p.ssafy.io/img/${wine.ename}.jpg`}
                    alt=""
                  />
                  <CardContent>
                    <Box sx={{ height: 95 }}>
                      <Typography gutterBottom sx={{ fontSize: 20, fontWeight: "bold" }} component="div">
                        {wine.kname}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: 12, fontWeight: "bold" }} color="text.secondary">
                      {Math.ceil(wine.price / 100) * 100} 원
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
      </Box>
    </>
  );
}

function mapStateToProps(state) {
  return { userSlice: state.user };
}

export default connect(mapStateToProps)(WineList);
