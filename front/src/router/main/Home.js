import logo from "../../res/img/logo.png";
import { Box, Breadcrumbs, Link } from "@mui/material/";

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
      <div></div>
    </>
  );
}
