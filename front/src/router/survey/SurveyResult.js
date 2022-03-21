import { useState } from "react";
import logo from "../../res/img/logo.png";
import { Box, Breadcrumbs, Link, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#F4C6C9",
      contrastText: "#fff",
    },
    end: {
      main: "#C4C4C4",
      contrastText: "#000000",
    },
  },
});

export default function Home() {
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
        </Box>
      </div>
    </>
  );
}
