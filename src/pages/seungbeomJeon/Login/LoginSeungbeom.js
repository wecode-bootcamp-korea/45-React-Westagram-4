import React from 'react';
import './LoginSeungbeom.scss';
import '../../../styles/common.scss';
import { useNavigate } from 'react-router-dom';

const LoginSeungbeom = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-seungbeom');
  };

  const handleChange = e => {
    console.log(e.target);
  };

  return (
    <div className="box">
      <h1>Westagram</h1>
      <div className="login-area">
        <input
          className="id-input"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleChange}
        />
        <input className="pw-input" type="password" placeholder="비밀번호" />
        <button className="login-button" disabled={false} onClick={goToMain}>
          로그인
        </button>
      </div>
      <div className="find-password">
        <a href="instead#">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
};

export default LoginSeungbeom;
