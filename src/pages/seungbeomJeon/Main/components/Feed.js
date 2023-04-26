import React, { useState } from 'react';
import Comment from './Comment';
let preventEmptyContent = '';
const Feed = props => {
  const [commentList, setCommentList] = useState([
    {
      key: Math.random(),
      id: 'wecode ',
      content: '다 같이 화이팅~~~!',
      time: '42분 전',
      img: '/images/seungbeomJeon/heart.png',
    },
  ]);
  const [comment, setComment] = useState();

  const onChangeContentInput = e => {
    setComment({
      id: 'wecode ',
      content: e.target.value,
      time: '42분 전',
      img: '/images/seungbeomJeon/heart.png',
    });
    preventEmptyContent = e.target.value;
  };

  const onClickCommentAdd = () => {
    if (preventEmptyContent !== '') {
      let key = Math.random();
      setCommentList([...commentList, { ...comment, key }]);
    }
  };

  const onClickCommentDelete = e => {
    setCommentList([...commentList.filter(item => item.key !== e)]);
  };

  const onClickCommentLike = e => {
    commentList.forEach(item => {
      if (item.key === e) {
        item.img === '/images/seungbeomJeon/heartred.png'
          ? (item.img = '/images/seungbeomJeon/heart.png')
          : (item.img = '/images/seungbeomJeon/heartred.png');
        setCommentList([...commentList]);
      }
    });
  };

  const { userImg, userName, feedImg, likeNum, feedContent } = props;

  return (
    <section className="main-feed-area">
      <div className="feed-profile-area">
        <div>
          <img className="profile-img" src={userImg} alt="" />
          <span className="profile-name">{userName}</span>
        </div>
        <img
          className="circle-feedIcon"
          src="/images/seungbeomJeon/circlethree.png"
          alt=""
        />
      </div>
      <img className="feed-img" src={feedImg} alt="" />
      <div className="icon-area">
        <span>
          <img
            className="heart-red-feedIcon"
            src="/images/seungbeomJeon/heartred.png"
            alt=""
          />
          <img
            className="dm-feedIcon"
            src="/images/seungbeomJeon/dm.png"
            alt=""
          />
          <img
            className="download-feedIcon"
            src="/images/seungbeomJeon/download.png"
            alt=""
          />
        </span>
        <img
          className="bookmark-feedIcon"
          src="/images/seungbeomJeon/bookmark.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="wecode-feedIcon"
          src="/images/seungbeomJeon/wecode.png"
          alt=""
        />
        <span className="feed-likeNum">
          {`wecode님 외 ${likeNum}명이 좋아합니다`}
        </span>
        <div className="comment-area">
          <div className="comment-first">
            <div>{feedContent}</div>
            <details>
              <summary>더 보기</summary>
              내용추가
            </details>
          </div>
          <div className="comment-next">
            {commentList.map(item => (
              <Comment
                key={item.key}
                check={item.key}
                id={item.id}
                content={item.content}
                img={item.img}
                time={item.time}
                onClickCommentDelete={onClickCommentDelete}
                onClickCommentLike={onClickCommentLike}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="comment-create">
        <input
          className="comment-input"
          type="text"
          placeholder="댓글 달기..."
          onChange={onChangeContentInput}
        />
        <button className="comment-button" onClick={onClickCommentAdd}>
          게시
        </button>
      </div>
    </section>
  );
};

export default Feed;
