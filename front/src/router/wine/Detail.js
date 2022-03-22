import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Send from "../../config/Send";
import logo from "../../res/img/logo.png";
import { Box, Breadcrumbs, Link, Grid, Typography, Card, CardMedia, Avatar, TextareaAutosize, Button, Rating, Pagination } from "@mui/material/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as hs } from "@fortawesome/free-solid-svg-icons";
import { faHeart as hr } from "@fortawesome/free-regular-svg-icons";
import { faCircle as cs } from "@fortawesome/free-solid-svg-icons";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#C4C4C4",
      contrastText: "#fff",
    },
  },
});

function Detail(props) {
  const { wineSeq } = useParams();
  const [wineProfile, setWineProfile] = useState({});
  const level = [1, 2, 3, 4, 5];

  //와인정보
  const getDetail = () => {
    Send.get(`/wine/${wineSeq}`, {
      params: {
        userSeq: props.userSlice.userSeq,
        wineSeq: wineSeq,
      },
    }).then((res) => {
      setWineProfile(res.data);
    });
  };

  // 좋아요
  const postLike = (wineSeq, e) => {
    e.preventDefault();
    const data = {
      userSeq: props.userSlice.userSeq,
      wineSeq: wineSeq,
    };
    Send.post("/wine/like", JSON.stringify(data)).then((res) => {
      if (res.status === 200) {
        getDetail();
      }
    });
  };

  // 좋아요 취소
  const deleteLike = (wineSeq, e) => {
    e.preventDefault();
    Send.delete("/wine/like", {
      params: {
        userSeq: props.userSlice.userSeq,
        wineSeq: wineSeq,
      },
    }).then((res) => {
      if (res.status === 200) {
        getDetail();
      }
    });
  };
  useEffect(() => {
    getDetail();
  }, []);

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
                <Typography sx={{ fontSize: 32, fontWeight: "bold", mb: 1 }}>{wineProfile.kname}</Typography>
                <Typography sx={{ fontSize: 16, mb: 1 }}>{wineProfile.ename}</Typography>
                <Box sx={{ display: "flex" }}>
                  {wineProfile.like_check ? (
                    <FontAwesomeIcon icon={hs} size="2xl" style={{ color: "red" }} onClick={(e) => deleteLike(wineProfile.wineSeq, e)} />
                  ) : (
                    <FontAwesomeIcon icon={hr} size="2xl" onClick={(e) => postLike(wineProfile.wineSeq, e)} />
                  )}
                  <Typography sx={{ mx: 1, mt: 0.5, mb: 3 }}>좋아요 {wineProfile.like_cnt}</Typography>
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
                    <Typography sx={{ ml: 2, mr: 3, mt: 0.5, fontSize: 24 }}>{wineProfile.type}</Typography>
                    <hr style={{ height: 30 }} />
                    <Typography sx={{ mx: 3, mt: 0.5, fontSize: 24 }}>{wineProfile.country}</Typography>
                  </Box>
                  <Typography sx={{ mx: 1, mt: 0.5, fontSize: 32, fontWeight: "bold" }}>{wineProfile.price} 원</Typography>
                </Box>
                <hr />
                <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 3 }}>
                  <Box sx={{ mr: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>산도</Typography>
                    <Box sx={{ display: "flex" }}>
                      {level.map((lv, index) => {
                        return (
                          <div key={index}>
                            {wineProfile.acidity >= lv ? (
                              <Avatar sx={{ mr: 0.2, bgcolor: purple[100] }}>{lv}</Avatar>
                            ) : (
                              <Avatar sx={{ mr: 0.2 }}>{lv}</Avatar>
                            )}
                          </div>
                        );
                      })}
                    </Box>
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>당도</Typography>
                    <Box sx={{ display: "flex" }}>
                      {level.map((lv, index) => {
                        return (
                          <div key={index}>
                            {wineProfile.sweet >= lv ? (
                              <Avatar sx={{ mr: 0.2, bgcolor: purple[100] }}>{lv}</Avatar>
                            ) : (
                              <Avatar sx={{ mr: 0.2 }}>{lv}</Avatar>
                            )}
                          </div>
                        );
                      })}
                    </Box>
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>바디</Typography>
                    <Box sx={{ display: "flex" }}>
                      {level.map((lv, index) => {
                        return (
                          <div key={index}>
                            {wineProfile.body >= lv ? (
                              <Avatar sx={{ mr: 0.2, bgcolor: purple[100] }}>{lv}</Avatar>
                            ) : (
                              <Avatar sx={{ mr: 0.2 }}>{lv}</Avatar>
                            )}
                          </div>
                        );
                      })}
                    </Box>
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Typography sx={{ fontWeight: "bold" }}>타닌</Typography>
                    <Box sx={{ display: "flex" }}>
                      {level.map((lv, index) => {
                        return (
                          <div key={index}>
                            {wineProfile.tannin >= lv ? (
                              <Avatar sx={{ mr: 0.2, bgcolor: purple[100] }}>{lv}</Avatar>
                            ) : (
                              <Avatar sx={{ mr: 0.2 }}>{lv}</Avatar>
                            )}
                          </div>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ mx: 1.5, mb: 3, display: "flex" }}>
                  <Typography sx={{ mr: 5, fontWeight: "bold" }}>도수</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>{wineProfile.alcohol}</Typography>
                </Box>
                {/* <Box sx={{ mx: 1.5, mb: 3, display: "flex" }}>
                  <Typography sx={{ mr: 3, fontWeight: "bold" }}>아로마</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>#자두 #체리 #모카</Typography>
                </Box> */}
                <Box sx={{ mx: 1.5, mb: 3, display: "flex" }}>
                  <Typography sx={{ mr: 3, fontWeight: "bold" }}>페어링</Typography>
                  {wineProfile.food
                    ? wineProfile.food.split("|").map((tag, index) => {
                        return (
                          <Typography sx={{ fontWeight: "bold" }} key={index}>
                            #{tag}　
                          </Typography>
                        );
                      })
                    : null}
                </Box>
                {/* 와인리뷰 */}
                <hr />
                <Box sx={{ px: 2 }}>
                  <Box sx={{ my: 3, display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontSize: 24, fontWeight: "bold", mr: 3 }}>와인리뷰</Typography>
                    <Typography sx={{ fontSize: 20, fontWeight: "bold", mx: 1 }}>평점</Typography>
                    <Typography sx={{ fontSize: 20 }}>{wineProfile.score}</Typography>
                  </Box>
                  <Box sx={{ ml: 3, display: "flex" }}>
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

function mapStateToProps(state) {
  return { userSlice: state.user };
}

export default connect(mapStateToProps)(Detail);
