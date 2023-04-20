import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginYoohyun.scss';

const LoginYoohyun = () => {
  const navigate = useNavigate();

  let [userId, setUserId] = useState(null);
  let [userPw, setUserPw] = useState(null);

  const saveUserId = event => {
    // console.log('event.target', event.target);
    userId = event.target.value;
    // console.log('userId', userId);
  };

  const saveUserPw = event => {
    userPw = event.target.value;
  };

  // 로그인 버튼 활성화(validation)
  const [btnState, setBtnState] = useState(false);
  const activateBtn = () => {};

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
                onChange={saveUserId}
              />
            </div>
            <div>
              <input
                type="password"
                minLength="1"
                placeholder="비밀번호"
                onChange={saveUserPw}
              />
            </div>
            <div>
              <button
                className={`${!btnState} ? activate : unactivate`}
                onClick={() => {
                  navigate('/main-yoohyun');
                }}
                onChange={activateBtn}
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
