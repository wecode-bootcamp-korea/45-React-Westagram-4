import React from 'react';
import './CommentItem.scss';

function CommentItem({ comment }) {
  return (
    <li className="commentItem">
      <div className="commentItemDetail">
        <span>wecode</span>
        {comment}
      </div>
      <img
        alt="heart icon"
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        className="commentItemLike"
      />
    </li>
  );
}

export default CommentItem;
