import { useState } from "react";
import logo from "../../res/img/logo.png";
import { Box, Breadcrumbs, Link, Typography, Button } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";

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
  const [page, setPage] = useState(1);
  const handlePage = (page) => {
    setPage(page);
  };

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
          <Typography variant="h5" sx={{ mb: 5, fontWeight: "bold" }}>
            당신을 위한 wible 와인 추천
          </Typography>
        </Box>
        <Box sx={{ mb: 7, mx: 75, display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: 0.19 * `${page}`, height: 15, backgroundColor: "#F4C6C9", borderRadius: 5 }}></Box>
          <Typography>{page} / 5</Typography>
        </Box>
        <Box sx={{ mx: 75 }}>
          {/* 질문 */}
          <Box sx={{ height: 350 }}>
            {page === 1 ? (
              <QuestionOne></QuestionOne>
            ) : page === 2 ? (
              <QuestionTwo></QuestionTwo>
            ) : page === 3 ? (
              <QuestionThree></QuestionThree>
            ) : page === 4 ? (
              <QuestionFour></QuestionFour>
            ) : page === 5 ? (
              <QuestionFive></QuestionFive>
            ) : null}
          </Box>
          {/* 버튼 */}
          <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" }}>
            <ThemeProvider theme={theme}>
              {page === 5 ? (
                <Link href="/survey/result">
                  <Button variant="contained" color="end">
                    완료
                  </Button>
                </Link>
              ) : (
                <Button variant="contained" color="neutral" onClick={() => handlePage(page + 1)}>
                  다음
                </Button>
              )}
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              {page === 1 ? null : (
                <Button variant="contained" color="neutral" onClick={() => handlePage(page - 1)}>
                  이전
                </Button>
              )}
            </ThemeProvider>
          </Box>
        </Box>
      </div>
    </>
  );
}
