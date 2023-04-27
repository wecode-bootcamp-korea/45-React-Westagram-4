import React from 'react';

export default function Comment({ user, text, removeComment }) {
  return (
    <li>
      <span>
        <span className="span_user">{user}</span>
        {text}
      </span>
      <div className="comment_like">
        <img
          className="comment_heart1"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="하트"
        />
        <button className="deleteBtn" onClick={e => removeComment(e.id)}>
          <img
            className="delete_icon"
            src="/images/soobinLee/favicon-32x32.png"
            alt="삭제"
          />
        </button>
      </div>
    </li>
  );
}
