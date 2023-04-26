import React from 'react';
import './CommentItem.scss';

// const COMMENTER_ID = 'wecode';

function CommentItem({ comment }) {
  console.log(comment);
  return (
    <li className="commentItem">
      <div className="commentItemDetail">
        <span>{comment.commenter}</span>
        {comment.commentText}
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
