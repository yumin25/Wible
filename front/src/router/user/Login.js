import logo from "../../res/img/logo.png";
import { Box, Breadcrumbs, Link, Typography, TextField, Button } from "@mui/material/";
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
        <Box sx={{ mt: 20, mb: 5, display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: "bold" }}>
            로그인
          </Typography>
          <TextField color="secondary" id="email" label="Email" variant="outlined" sx={{ my: 1, width: 300 }} />
          <TextField color="secondary" id="password" label="Password" type="password" variant="outlined" sx={{ my: 2, width: 300 }} />
          <button style={{ borderRadius: 5, backgroundColor: "#F4C6C9", border: 0, color: "white", width: 300, height: 40, marginBottom: 10 }}>
            로그인
          </button>
          <button style={{ borderRadius: 5, backgroundColor: "#F4C6C9", border: 0, color: "white", width: 300, height: 40, marginBottom: 10 }}>
            회원가입
          </button>
        </Box>
      </div>
    </>
  );
}
