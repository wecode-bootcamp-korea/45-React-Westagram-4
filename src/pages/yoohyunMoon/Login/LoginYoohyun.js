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

  /*   const handleLogin = e => {
    e.preventDefault();
    fetch('http://10.58.52.222:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // if (data.token) {
        //   console.log('token 📢📢📢', data.token);
        //   localStorage.setItem('wtw-token', data.token);
        // }
      });
    // navigate('/main-yoohyun');
  }; */

  /*  const handleLogin = e => {
    e.preventDefault();
    fetch('http://10.58.52.222:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        // email: 'test2@naver.com',
        // password: 'abcABC123!',
        email: userId,
        password: userPw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        } else {
          alert('아이디 혹은 비밀번호를 확인해주세요.');
        }
      })
      .then(data => {
        if (data.message === 'success') {
          console.log('data 🐶✏️💥✅4️⃣', data);
          alert('로그인 성공!');
          localStorage.setItem('authorization', data.authorization);
        }

        // console.log(data.message);
        //  if (data.message === 'PASSWORD_IS_NOT_VALID') {

        // } else if (data.message === 'success') {
        //   console.log('data 🐶✏️💥✅4️⃣', data);
        //   alert('로그인 성공!');
        //   localStorage.setItem('authorization', data.authorization);
        // }
      });
  }; */

  const handleLogin = e => {
    e.preventDefault();
    fetch('http://10.58.52.222:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        // email: 'test2@naver.com',
        // password: 'abcABC123!',
        // email: userId,
        // password: userPw,
      }),
    })
      .then(response => {
        return response.json();
        // console.log('response@@ ', response);
        /*    if (response.ok === true) {
          return response.json();
        } */
        // throw new Error('통신실패');
      })
      // .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'success') {
          console.log('data 🐶✏️💥✅4️⃣', data);
          alert('로그인 성공!');
          localStorage.setItem('authorization', data.authorization);
        } else if (data.message === 'PASSWORD_IS_NOT_VALID') {
          alert(
            '[비밀번호 규칙을 확인하세요.] 이메일 혹은 비밀번호를 확인해주세요.'
          );
        } else if (data.message === 'INVALID_EMAIL_OR_PASSWORD') {
          alert('이메일 혹은 비밀번호를 확인해주세요.');
        }

        // console.log(data.message);
        //  if (data.message === 'PASSWORD_IS_NOT_VALID') {

        // } else if (data.message === 'success') {
        //   console.log('data 🐶✏️💥✅4️⃣', data);
        //   alert('로그인 성공!');
        //   localStorage.setItem('authorization', data.authorization);
        // }
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
