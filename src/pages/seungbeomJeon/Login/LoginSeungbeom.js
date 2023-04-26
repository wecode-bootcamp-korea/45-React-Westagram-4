import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSeungbeom.scss';

// let id = '';
// let pw = '';

const LoginSeungbeom = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [active, setActive] = useState('Disable');
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seungbeom');
  };

  const saveUserId = e => {
    setIdValue(e.target.value);
    // e.target.value.includes('@') ? (id = 'ok') : (id = '');
    // if (id === 'ok' && pw === 'ok') {
    //   setIsDisabled(false);
    //   setActive('Able');
    // } else {
    //   setIsDisabled(true);
    //   setActive('Disable');
    // }
  };

  const saveUserPw = e => {
    setPwValue(e.target.value);
    // e.target.value.length >= 5 ? (pw = 'ok') : (pw = '');
    // if (id === 'ok' && pw === 'ok') {
    //   setIsDisabled(false);
    //   setActive('Able');
    // } else {
    //   setIsDisabled(true);
    //   setActive('Disable');
    // }
  };

  useEffect(() => {
    const validation = () => {
      idValue.includes('@') && pwValue.length >= 5
        ? setIsDisabled(false)
        : setIsDisabled(true);
      idValue.includes('@') && pwValue.length >= 5
        ? setActive('Able')
        : setActive('Disable');
    };
    validation();
  }, [idValue, pwValue]);

  return (
    <div className="loginSeungbeom">
      <h1>Westagram</h1>
      <div className="loginArea">
        <input
          className="idInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
        />
        <input
          className="pwInput"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
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
