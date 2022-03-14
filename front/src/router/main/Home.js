import logo from "../../res/img/logo.png";
import { Box, Breadcrumbs, Link, Grid, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material/";

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
          <img width={250} src={logo} alt="logo" />
        </Box>
        <Box sx={{ my: 3, px: 50, display: "flex", justifyContent: "space-evenly" }}>
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
              <Typography variant="h5" sx={{ mx: 5 }}>
                지금 인기 있는 와인은?
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
            </div>
            {/* 추천 와인 */}
            <div style={{ marginBottom: 75 }}>
              <Typography variant="h5" sx={{ mx: 5 }}>
                당신만을 위한 와인 추천
              </Typography>
              <Box sx={{ m: 2, display: "flex", justifyContent: "space-evenly" }}>
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
            </div>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    </>
  );
}
