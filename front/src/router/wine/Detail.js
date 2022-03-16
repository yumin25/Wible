import React from "react";
import logo from "../../res/img/logo.png";
import { Box, Breadcrumbs, Link, Grid, Typography, Card, CardMedia, Avatar, TextareaAutosize, Button, Rating, Pagination } from "@mui/material/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as hs } from "@fortawesome/free-solid-svg-icons";
import { faHeart as hr } from "@fortawesome/free-regular-svg-icons";
import { faCircle as cs } from "@fortawesome/free-solid-svg-icons";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#C4C4C4",
      contrastText: "#fff",
    },
  },
});

export default function Home() {
  return (
    <>
      {/* 상단 구성 */}
      <div>
        <Breadcrumbs style={{ display: "flex", flexDirection: "row-reverse", marginTop: 10, marginRight: 350 }} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            회원가입
          </Link>
          <Link underline="hover" color="inherit" href="/">
            로그인
          </Link>
        </Breadcrumbs>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link href="/">
            <img width={250} src={logo} alt="logo" />
          </Link>
        </Box>
        {/* <Box sx={{ my: 3, px: 50, display: "flex", justifyContent: "space-evenly" }}>
          <Link href="#" color="inherit" underline="none">
            와인검색
          </Link>
          <Link href="#" color="inherit" underline="none">
            와인사전
          </Link>
          <Link href="#" color="inherit" underline="none">
            주제별와인
          </Link>
          <Link href="#" color="inherit" underline="none">
            음식추천
          </Link>
        </Box> */}

        <Box sx={{ mt: 10, mb: 5, mx: 20, display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: 32, fontWeight: "bold", mb: 1 }}>도멘 마르샹 그리요 후쇼트 샹베르땡 그랑 크뤼</Typography>
                <Typography sx={{ fontSize: 16, mb: 1 }}>DOMANE MARCHAND GRILLOT RUCHOTTES-CHANBERTIN GRAND GRU</Typography>
                <Box sx={{ display: "flex" }}>
                  <FontAwesomeIcon icon={hs} size="2xl" style={{ color: "red" }} />
                  <FontAwesomeIcon icon={hr} size="2xl" />
                  <Typography sx={{ mx: 1, mt: 0.5, mb: 3 }}>좋아요</Typography>
                </Box>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia component="img" height="450" image="" alt="wine image" />
                </Card>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box sx={{ px: 15 }}>
                {/* 와인정보 */}
                <Box sx={{ px: 2, display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FontAwesomeIcon icon={cs} size="2xl" style={{ color: "#C50D0D" }} />
                    <Typography sx={{ ml: 2, mr: 3, mt: 0.5, fontSize: 24 }}>Red</Typography>
                    <hr style={{ height: 30 }} />
                    <Typography sx={{ mx: 3, mt: 0.5, fontSize: 24 }}>프랑스</Typography>
                  </Box>
                  <Typography sx={{ mx: 1, mt: 0.5, fontSize: 32, fontWeight: "bold" }}>19000 원</Typography>
                </Box>
                <hr />
                <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 3 }}>
                  <Box sx={{ mr: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>산도</Typography>
                    <Box sx={{ display: "flex" }}>
                      <Avatar sx={{ mr: 0.2 }}>1</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>2</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>3</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>4</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>5</Avatar>
                    </Box>
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>당도</Typography>
                    <Box sx={{ display: "flex" }}>
                      <Avatar sx={{ mr: 0.2 }}>1</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>2</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>3</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>4</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>5</Avatar>
                    </Box>
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>바디</Typography>
                    <Box sx={{ display: "flex" }}>
                      <Avatar sx={{ mr: 0.2 }}>1</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>2</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>3</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>4</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>5</Avatar>
                    </Box>
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>타닌</Typography>
                    <Box sx={{ display: "flex" }}>
                      <Avatar sx={{ mr: 0.2 }}>1</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>2</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>3</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>4</Avatar>
                      <Avatar sx={{ mr: 0.2 }}>5</Avatar>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ mx: 1.5, mb: 3, display: "flex" }}>
                  <Typography sx={{ mr: 5, fontWeight: "bold" }}>도수</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>13.5</Typography>
                </Box>
                <Box sx={{ mx: 1.5, mb: 3, display: "flex" }}>
                  <Typography sx={{ mr: 3, fontWeight: "bold" }}>아로마</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>#자두 #체리 #모카</Typography>
                </Box>
                <Box sx={{ mx: 1.5, mb: 3, display: "flex" }}>
                  <Typography sx={{ mr: 3, fontWeight: "bold" }}>페어링</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>#피자 #치즈</Typography>
                </Box>
                {/* 와인리뷰 */}
                <hr />
                <Box sx={{ px: 2 }}>
                  <Box sx={{ my: 3, display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontSize: 24, fontWeight: "bold", mr: 3 }}>와인리뷰</Typography>
                    <Typography sx={{ fontSize: 20, fontWeight: "bold", mx: 1 }}>평점</Typography>
                    <Typography sx={{ fontSize: 20 }}>8.5</Typography>
                  </Box>
                  <Box sx={{ ml: 3, mr: 2, display: "flex" }}>
                    <Rating name="size-medium" defaultValue={5} precision={0.5} sx={{ mx: 2 }} />
                    <TextareaAutosize minRows={3} placeholder="리뷰를 입력하세요." style={{ width: 600 }} />
                    <ThemeProvider theme={theme}>
                      <Button sx={{ mx: 2, mb: 4 }} variant="contained" color="neutral">
                        리뷰 작성
                      </Button>
                    </ThemeProvider>
                  </Box>
                  <Box sx={{ ml: 3, my: 1 }}>
                    <Box sx={{ mb: 0.5, display: "flex" }}>
                      <Rating name="size-medium" defaultValue={5} precision={0.5} sx={{ mx: 2 }} readOnly />
                      <Typography>바디감이 뛰어납니다! 처음 접하시는 분들은 조금 힘드실 수 있을 것 같아요</Typography>
                    </Box>
                    <Box sx={{ mb: 0.5, display: "flex" }}>
                      <Rating name="size-medium" defaultValue={5} precision={0.5} sx={{ mx: 2 }} readOnly />
                      <Typography>바디감이 뛰어납니다! 처음 접하시는 분들은 조금 힘드실 수 있을 것 같아요</Typography>
                    </Box>
                    <Box sx={{ mb: 0.5, display: "flex" }}>
                      <Rating name="size-medium" defaultValue={5} precision={0.5} sx={{ mx: 2 }} readOnly />
                      <Typography>바디감이 뛰어납니다! 처음 접하시는 분들은 조금 힘드실 수 있을 것 같아요</Typography>
                    </Box>
                    <Box sx={{ mb: 0.5, display: "flex" }}>
                      <Rating name="size-medium" defaultValue={5} precision={0.5} sx={{ mx: 2 }} readOnly />
                      <Typography>바디감이 뛰어납니다! 처음 접하시는 분들은 조금 힘드실 수 있을 것 같아요</Typography>
                    </Box>
                    <Box sx={{ mb: 0.5, display: "flex" }}>
                      <Rating name="size-medium" defaultValue={5} precision={0.5} sx={{ mx: 2 }} readOnly />
                      <Typography>바디감이 뛰어납니다! 처음 접하시는 분들은 조금 힘드실 수 있을 것 같아요</Typography>
                    </Box>
                  </Box>
                  <Pagination sx={{ my: 2, mx: 35 }} count={10} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
