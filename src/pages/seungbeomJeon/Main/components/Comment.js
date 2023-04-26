import React from 'react';

const Comment = props => {
  const {
    check,
    id,
    content,
    img,
    time,
    onClickCommentDelete,
    onClickCommentLike,
  } = props;

  return (
    <div className="appendChild-add">
      <div>
        <span>
          {id}
          {content}
        </span>
        <span className="deleteAndLike">
          <button
            className="delete-button"
            onClick={() => onClickCommentDelete(check)}
          >
            <img
              className="delete-commentIcon"
              src="/images/seungbeomJeon/deleteicon.png"
              alt=""
            />
          </button>
          <button
            className="like-button"
            onClick={() => onClickCommentLike(check)}
          >
            <img className="heart-commentIcon" src={img} alt="" />
          </button>
        </span>
      </div>
      <div className="comment-time">{time}</div>
    </div>
  );
};

export default Comment;
