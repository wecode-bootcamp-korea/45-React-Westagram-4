import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginYoohyun.scss';

const LoginYoohyun = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const saveUserId = e => {
    //사용자가 현재 입력하고 있는 input 창의 입력 값으로 userId 상태를 업데이트한다.
    setUserId(e.target.value);
  };

  const saveUserPw = event => {
    setUserPw(event.target.value);
  };

  const activatedBtnCondition = userId.includes(`@`) && userPw.length >= 5;

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
                className={activatedBtnCondition ? `activate` : `unactivate`}
                onClick={() => {
                  navigate('/main-yoohyun');
                }}
                disabled={activatedBtnCondition ? false : true}
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
