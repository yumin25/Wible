import * as React from "react";
import { connect } from "react-redux";
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material/";

function WineList(props) {
  const wines = props.bestWine;
  console.log(wines);

  return (
    <>
      {/* 와인 */}
      <Box sx={{ m: 2, display: "flex", justifyContent: "space-evenly" }}>
        {wines &&
          wines.map((wine, index) => {
            return (
              <Card sx={{ minWidth: 230, maxWidth: 230, minHeight: 350 }} key={index}>
                <CardActionArea href="/">
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
    </>
  );
}

function mapStateToProps(state) {
  return { userSlice: state.user };
}

export default connect(mapStateToProps)(WineList);
