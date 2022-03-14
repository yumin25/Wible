import SignupPresenter from "./SignupPresenter";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  checkId,
  checkEmail,
  checkNickname,
  checkPhoneNumber,
  checkPhoneDuplicate,
  checkPassword,
} from "./ValidCheck";

function SignupContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkValid, setCheckValid] = useState(true);
  const url = "";

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onPasswordConfirmHandler = (event) => {
    setPasswordConfirm(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  };
  const onPhoneNumberHandler = (event) => {
    setPhoneNumber(event.currentTarget.value);
  };

  function CheckId() {
    checkId(email, url);
  }
  function CheckEmail() {
    checkEmail(email);
  }
  function CheckNickname() {
    checkNickname(nickname, url);
  }
  function CheckPassword() {
    checkPassword(password, email, nickname, name, checkValidHandler);
  }

  function CheckPhoneNumber() {
    checkPhoneNumber(phoneNumber);
  }

  function CheckPhoneDuplicate() {
    checkPhoneDuplicate(phoneNumber, url);
  }

  function checkPasswordConfim(password, passwordConfirm) {
    if (password !== passwordConfirm) {
      return false;
    }
    return true;
  }

  function checkValidHandler(param) {
    setCheckValid(param);
  }

  const onCreate = () => {
    console.log(email, password, passwordConfirm, name, nickname, phoneNumber);
    if (
      email === "" ||
      password === "" ||
      passwordConfirm === "" ||
      name === "" ||
      nickname === "" ||
      phoneNumber === ""
    ) {
      alert("입력하지 않은 정보가 있습니다. 확인해주세요.");
    } else {
      console.log(checkValid);
      if (checkValid === true) {
        console.log(email, password, name, nickname, phoneNumber);
        axios
          .post(url + `/api/v1/members`, {
            email: email,
            password: password,
            name: name,
            nickname: nickname,
            phoneNumber: phoneNumber,
          })
          .then(function (response) {
            console.log(response);
            if (response.data.status === 201) {
              alert(response.data.data.msg);
              setEmail("");
              setPassword("");
              setPasswordConfirm("");
              setName("");
              setNickname("");
              setPhoneNumber("");
              document.location.href = "/login";
            } else {
              alert(response.data.data.msg);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  return (
    <>
      <SignupPresenter
        onEmailHandler={onEmailHandler}
        checkId={CheckId}
        checkEmail={CheckEmail}
        onPasswordHandler={onPasswordHandler}
        onPasswordConfirmHandler={onPasswordConfirmHandler}
        onNameHandler={onNameHandler}
        onPhoneNumberHandler={onPhoneNumberHandler}
        onNicknameHandler={onNicknameHandler}
        checkNickname={CheckNickname}
        checkPassword={CheckPassword}
        checkPhoneNumber={CheckPhoneNumber}
        checkPhoneDuplicate={CheckPhoneDuplicate}
        onCreate={onCreate}
      ></SignupPresenter>
    </>
  );
}
export default SignupContainer;
