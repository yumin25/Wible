import * as React from "react";
import { connect } from "react-redux";
import logo from "../../../res/img/logo.png";
import { Box, Breadcrumbs, Link } from "@mui/material/";

function TopNav({ userSlice }) {
  const Logout = () => {
    window.localStorage.clear();
  };

  return (
    <>
      {/* 상단 구성 */}
      <div>
        {window.localStorage.getItem("idToken") === null ? (
          <Breadcrumbs
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: 10,
              marginRight: 350,
            }}
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="/accounts/signup">
              회원가입
            </Link>
            <Link underline="hover" color="inherit" href="/accounts/login">
              로그인
            </Link>
          </Breadcrumbs>
        ) : (
          <Breadcrumbs
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: 10,
              marginRight: 350,
            }}
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="#">
              마이페이지
            </Link>
            <Link underline="hover" color="inherit" href="/" onClick={Logout}>
              로그아웃
            </Link>
          </Breadcrumbs>
        )}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link href="/">
            <img width={250} src={logo} alt="logo" />
          </Link>
        </Box>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { userSlice: state.user };
}

export default connect(mapStateToProps)(TopNav);
