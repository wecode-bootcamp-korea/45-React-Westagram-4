import React from 'react';

export default function Comment({ user, text }) {
  return (
    <li>
      <span>
        <span className="span_user">{user}</span>
        {text}
      </span>
      <div className="comment_like">
        <img
          className="comment_heart"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="하트"
        />
      </div>
    </li>
  );
}
