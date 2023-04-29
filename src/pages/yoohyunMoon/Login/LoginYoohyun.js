import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginYoohyun.scss';

const LoginYoohyun = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // 로그인 실습
  const handleLogin = e => {
    e.preventDefault();
    fetch('http://10.58.52.222:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === 'success') {
          alert('로그인 성공!');

          // 'authorization'라는 로컬스토리지에 저장될 키 값이 백엔드에서 설정한 키와 동일해야 함.
          localStorage.setItem('authorization', data.authorization);
          navigate('/main-yoohyun');
        } else if (data.message === 'PASSWORD_IS_NOT_VALID') {
          alert('비밀번호 규칙(대문자, 소문자, 기호의 혼용)을 확인하세요.');
        } else if (data.message === 'INVALID_EMAIL_OR_PASSWORD') {
          alert('이메일 혹은 비밀번호를 확인해주세요.');
        }
      });
  };

  const activatedBtnCondition =
    userInfo.email.includes(`@`) && userInfo.password.length >= 5;

  return (
    <div className="loginYoohyun">
      <main>
        <article className="loginContainer">
          <div>
            <h1 id="logo">Westagram</h1>
          </div>
          <form className="inputWrapper">
            <div>
              <input
                type="text"
                minLength="1"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                name="email"
                onChange={handleInput}
              />
            </div>
            <div>
              <input
                type="password"
                minLength="1"
                placeholder="비밀번호"
                name="password"
                onChange={handleInput}
              />
            </div>
            <div>
              <button
                className={activatedBtnCondition ? `activate` : `unactivate`}
                onClick={handleLogin}
                disabled={!activatedBtnCondition}
              >
                로그인
              </button>
            </div>
          </form>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </article>
      </main>
    </div>
  );
};

export default LoginYoohyun;
