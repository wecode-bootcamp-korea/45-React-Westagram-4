import React, { useState } from 'react';
import '../Login/LoginSoobin.scss';
import { useNavigate } from 'react-router-dom';

export default function LoginSoobin() {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/MainSoobin');

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [active, setActive] = useState(true); // disabled : true

  const handleInput = e => {
    //console.log('input 태그 동작');
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
    //console.log('password 태그 동작');
  };

  const handleActive = () => {
    setActive(
      inputId.includes('@') &&
        inputId.length &&
        isNaN(inputPw) === false && // 숫자만 입력 가능
        inputPw.length >= 5
        ? false
        : true
    );
  };
  return (
    <div className="wrap">
      <div className="container">
        <div className="inner">
          <h1 className="logo">Westagram</h1>
          <div className="inputBox">
            <form className="form">
              <input
                id="inputId"
                className="inputId2"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleInput}
                onKeyUp={handleActive}
                autoComplete="off"
              />

              <input
                id="passWord"
                className="inputId2"
                type="password"
                placeholder="비밀번호"
                onChange={handleInputPw}
                onKeyUp={handleActive}
              />

              <button
                className="buttonBox"
                onClick={handleLogin}
                type="button"
                disabled={active} // 값 만족할때 false or true
                //setActive 함수 호출 -> active 상태 갱신
              >
                로그인
              </button>
            </form>
          </div>
          <div className="passWordForgot">
            <a href="/" className="forgotPassword">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
