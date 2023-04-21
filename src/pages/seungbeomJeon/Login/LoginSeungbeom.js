import React, { useState } from 'react';
import './LoginSeungbeom.scss';
import '../../../styles/common.scss';
import { useNavigate } from 'react-router-dom';

const LoginSeungbeom = () => {
  const [active, setActive] = useState('disable');
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-seungbeom');
  };
  let id = '';
  let pw = '';

  const handleId = e => {
    if (e.target.value.includes('@')) {
      id = 'ok';
      if (id === 'ok' && pw === 'ok') {
        setIsDisabled(false);
        setActive('able');
      }
    }
  };

  const handlePw = e => {
    if (e.target.value.length >= 5) {
      pw = 'ok';
    }
    if (id === 'ok' && pw === 'ok') {
      setIsDisabled(false);
      setActive('able');
    }
  };

  return (
    <div className="box">
      <h1>Westagram</h1>
      <div className="login-area">
        <input
          className="id-input"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleId}
        />
        <input
          className="pw-input"
          type="password"
          placeholder="비밀번호"
          onChange={handlePw}
        />
        <button
          className={`login-button-${active}`}
          disabled={isDisabled}
          onClick={goToMain}
        >
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
