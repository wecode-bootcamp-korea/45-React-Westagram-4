import React from 'react';
import './CommentItem.scss';

const COMMENTER_ID = 'wecode';

function CommentItem({ comment }) {
  return (
    <li className="commentItem">
      <div className="commentItemDetail">
        <span>{COMMENTER_ID}</span>
        {comment}
      </div>
      <div>
        <img
          alt="heart icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          className="commentItemLike"
        />
      </div>
    </li>
  );
}

export default CommentItem;
