import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/common.scss';
import './LoginSeungbeom.scss';

let id = '';
let pw = '';

const LoginSeungbeom = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [active, setActive] = useState('Disable');

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seungbeom');
  };

  const handleId = e => {
    e.target.value.includes('@') ? (id = 'ok') : (id = '');
    if (id === 'ok' && pw === 'ok') {
      setIsDisabled(false);
      setActive('Able');
    } else {
      setIsDisabled(true);
      setActive('Disable');
    }
  };

  const handlePw = e => {
    e.target.value.length >= 5 ? (pw = 'ok') : (pw = '');
    if (id === 'ok' && pw === 'ok') {
      setIsDisabled(false);
      setActive('Able');
    } else {
      setIsDisabled(true);
      setActive('Disable');
    }
  };

  return (
    <div className="loginSeungbeom">
      <h1>Westagram</h1>
      <div className="loginArea">
        <input
          className="idInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleId}
        />
        <input
          className="pwInput"
          type="password"
          placeholder="비밀번호"
          onChange={handlePw}
        />
        <button
          className={`loginButton${active}`}
          disabled={isDisabled}
          onClick={goToMain}
        >
          로그인
        </button>
      </div>
      <div className="findPassword">
        <a href="instead#">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
};

export default LoginSeungbeom;
