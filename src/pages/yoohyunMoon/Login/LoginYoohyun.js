import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginYoohyun.scss';

const LoginYoohyun = () => {
  const navigate = useNavigate();

  let [userId, setUserId] = useState('');
  let [userPw, setUserPw] = useState('');
  const saveUserId = e => {
    // console.log('event.target', event.target);
    setUserId(e.target.value);
    // console.log('userId', userId);

    /*    if (userId.includes('@')) {
      console.log('saveUserId 에 @가 들어가요 : true');
      setUserId(userId);
      // setBtnState(true);
      activateBtn();
      // return userId;/
    }  */
  };
  console.log('userId??? ', userId);

  const saveUserPw = event => {
    // userPw = event.target.value;
    setUserPw(event.target.value);

    /* if (userPw.length >= 5) {
      // console.log('userPw가 5이상이에용 : true', userPw);
      setUserPw(userPw);
      activateBtn();
      // return userPw;
    } else {
      return false;
    } */
  };
  // console.log(saveUserPw);
  console.log('userPw??? ', userPw);

  // 로그인 버튼 활성화(validation)
  const [btnState, setBtnState] = useState(false);
  const activateBtn = () => {
    const validId = userId && userId.includes('@');
    const validPw = userPw && userPw.length >= 5;
    validId && validPw ? setBtnState(true) : setBtnState(false);
    /*   if (userId.includes('@') && userPw.length >= 5) {
      setBtnState(true);
    } else {
      setBtnState(false);
    } */
    /* saveUserId && saveUserPw ? setBtnState(true) : setBtnState(false); */
    // userId !== null && userPw !== null ? setBtnState(true) : setBtnState(false);
  };

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
                // className={`${btnState === true} ? activate : unactivate`}
                // className={userPw.length >= 5 ? 'activate' : 'unactivate'}
                // className={btnState === true ? 'activate' : 'unactivate'}
                /*   className={
                  `${saveUserId && saveUserPw}` ? 'activate' : 'unactivate'
                } */
                className={
                  userId.includes(`@`) && userPw.length >= 5
                    ? `activate`
                    : `unactivate`
                }
                onClick={() => {
                  navigate('/main-yoohyun');
                }}
                // onChange={activateBtn}
                /*  onChange={
                  userId !== null && userPw !== null
                    ? setBtnState(true)
                    : setBtnState(false)
                } */
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
