import * as React from "react";
import logo from "../../res/img/logo.png";
import {
  Box,
  Breadcrumbs,
  Link,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material/";

export default function Home() {
  const [popular, setPopular] = React.useState("red");
  const [recommend, setRecommend] = React.useState("red");
  const handlePopular = (event, newPopular) => {
    setPopular(newPopular);
  };
  const handleRecommend = (event, newRecommend) => {
    setRecommend(newRecommend);
  };

  return (
    <>
      {/* 상단 구성 */}
      <div>
        <Breadcrumbs
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            marginTop: 10,
            marginRight: 350,
          }}
          aria-label="breadcrumb"
        >
          <Link underline="hover" color="inherit" href="/signup">
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
        <Box
          sx={{
            my: 3,
            px: 50,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
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
        </Box>
        <Box style={{ backgroundColor: "#F4C6C9", height: 300 }}>　</Box>
      </div>

      {/* 와인 */}
      <div style={{ marginTop: 50 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            {/* 인기 와인 */}
            <div style={{ marginBottom: 75 }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h5" sx={{ ml: 5, mr: 3, pt: 0.5 }}>
                  지금 인기 있는 와인은?
                </Typography>
                <ToggleButtonGroup
                  size="small"
                  color="secondary"
                  exclusive
                  value={popular}
                  onChange={handlePopular}
                >
                  <ToggleButton value="red">레드</ToggleButton>
                  <ToggleButton value="white">화이트</ToggleButton>
                  <ToggleButton value="rose">로제</ToggleButton>
                  <ToggleButton value="sparkling">스파클링</ToggleButton>
                  <ToggleButton value="dessert">디저트</ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box
                sx={{ m: 2, display: "flex", justifyContent: "space-evenly" }}
              >
                <Card sx={{ maxWidth: 230, maxHeight: 450 }}>
                  <CardActionArea href="/">
                    <CardMedia
                      component="img"
                      height="140"
                      image=""
                      alt="와인이미지"
                    />
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
                    <CardMedia
                      component="img"
                      height="140"
                      image=""
                      alt="와인이미지"
                    />
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
                    <CardMedia
                      component="img"
                      height="140"
                      image=""
                      alt="와인이미지"
                    />
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
                    <CardMedia
                      component="img"
                      height="140"
                      image=""
                      alt="와인이미지"
                    />
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
                    <CardMedia
                      component="img"
                      height="140"
                      image=""
                      alt="와인이미지"
                    />
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
            </div>
            {/* 추천 와인 */}
            <div style={{ marginBottom: 75 }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h5" sx={{ ml: 5, mr: 3, pt: 0.5 }}>
                  당신만을 위한 와인 추천
                </Typography>
                <ToggleButtonGroup
                  size="small"
                  color="secondary"
                  exclusive
                  value={recommend}
                  onChange={handleRecommend}
                >
                  <ToggleButton value="red">레드</ToggleButton>
                  <ToggleButton value="white">화이트</ToggleButton>
                  <ToggleButton value="rose">로제</ToggleButton>
                  <ToggleButton value="sparkling">스파클링</ToggleButton>
                  <ToggleButton value="dessert">디저트</ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box
                sx={{ m: 2, display: "flex", justifyContent: "space-evenly" }}
              >
                <Card sx={{ maxWidth: 230, maxHeight: 450 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image=""
                      alt="와인이미지"
                    />
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
                    <CardMedia
                      component="img"
                      height="140"
                      image=""
                      alt="와인이미지"
                    />
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
                    <CardMedia
                      component="img"
                      height="140"
                      image=""
                      alt="와인이미지"
                    />
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
                    <CardMedia
                      component="img"
                      height="140"
                      image=""
                      alt="와인이미지"
                    />
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
                    <CardMedia
                      component="img"
                      height="140"
                      image=""
                      alt="와인이미지"
                    />
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
            </div>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    </>
  );
}
