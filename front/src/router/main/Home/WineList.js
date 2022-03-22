import * as React from "react";
import { connect } from "react-redux";
import TopNav from "./TopNav";
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material/";

function WineList({ userSlice }) {
  return (
    <>
      {/* 와인 */}
      <Box sx={{ m: 2, display: "flex", justifyContent: "space-evenly" }}>
        <Card sx={{ maxWidth: 230, maxHeight: 450 }}>
          <CardActionArea href="/">
            <CardMedia component="img" height="140" image="" alt="와인이미지" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                와인이름
              </Typography>
              <Typography variant="body2" color="text.secondary">
                와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 230, maxHeight: 450 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="" alt="와인이미지" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                와인이름
              </Typography>
              <Typography variant="body2" color="text.secondary">
                와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 230, maxHeight: 450 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="" alt="와인이미지" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                와인이름
              </Typography>
              <Typography variant="body2" color="text.secondary">
                와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 230, maxHeight: 450 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="" alt="와인이미지" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                와인이름
              </Typography>
              <Typography variant="body2" color="text.secondary">
                와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 230, maxHeight: 450 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="" alt="와인이미지" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                와인이름
              </Typography>
              <Typography variant="body2" color="text.secondary">
                와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구와인설명어쩌구저쩌구
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
}

function mapStateToProps(state) {
  return { userSlice: state.user };
}

export default connect(mapStateToProps)(WineList);
