import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Comment from './Comment';
import './MainSoobin.scss';

export default function Feed({
  profileSrc,
  profileId,
  imgSrc,
  location,
  feedScript,
  commentId,
  comment1,
}) {
  const [active, setActive] = useState(true);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleComment = e => {
    setComment(e.target.value);
  };

  const handleActive = () => {
    setActive(comment.length > 0 ? false : true);
  };

  const handleAddComment = e => {
    e.preventDefault();
    if (comment !== 0 && comment.trim()) {
      // input 값 공백 입력 막기
      const newComment = {
        id: uuidv4(), // key값
        user: 'user',
        text: comment,
      };
      setComments([...comments, newComment]); // newcomment를 comments배열 끝에 추가
      setComment('');
    }
  };

  const removeComment = id =>
    setComments(comments.filter(comment => comment.id !== id)); // 댓글 삭제 코드

  return (
    <div>
      <div className="main_left">
        <div className="feed_id">
          <div className="id_imgbox">
            <div className="id_box">
              <div className="id_box_img">
                <img className="id_img" src={profileSrc} alt="profile_img" />
              </div>
              <div className="id_place">
                <div className="id_name">{profileId}</div>
                <div className="place">{location}</div>
              </div>
            </div>
            <div className="more_details">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                alt="더보기"
              />
            </div>
          </div>
        </div>
        <div className="feed_picture">
          <img src={imgSrc} alt="feed_img" />
        </div>
        <div className="feed_bottom">
          <div className="emoticon_box">
            <div className="emoticon_box2">
              <div className="heart_box">
                <img
                  className="heart"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="하트"
                />
              </div>
              <div className="comment_box">
                <img
                  className="coment"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  alt="코멘트"
                />
              </div>
              <div className="direct_box">
                <img
                  className="direct"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                  alt="종이비행기"
                />
              </div>
            </div>
            <div className="bookmark_box">
              <img
                className="bookmark"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                alt="공유"
              />
            </div>
          </div>
          <div className="like_section">
            <div className="like_people">
              <img
                className="like_profile"
                src={profileSrc}
                alt="profile_img"
              />
              <p className="p_comment">
                <span className="like_comment">gigi</span>님
                <span className="like_comment2">외 123,000명</span>이
                좋아합니다.
              </p>
            </div>
          </div>
          <div>
            <div className="comment_info">
              <div className="comments_container">
                <span className="comment_id">{profileId}</span>
                <span className="comment_content">{feedScript}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="comment_section">
          <ul className="comments">
            <li>
              <span>
                <span className="span_user">{commentId}</span>
                <span className="span_user2" />
                {comment1}
              </span>
              <div className="comment_like">
                <img
                  className="comment_heart"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="하트"
                />
              </div>
            </li>
            <ul className="comments">
              {comments.map(comment => (
                <Comment
                  key={comment.id}
                  user={comment.user}
                  text={comment.text}
                  removeComment={() => removeComment(comment.id)}
                />
              ))}
            </ul>
          </ul>
          <div className="feed_time">
            <p className="time">5시간 전</p>
          </div>
        </div>
        <form>
          <span>
            <input
              id="input-comment2"
              className="input-comment"
              type="text"
              value={comment}
              placeholder="댓글 달기..."
              onChange={handleComment}
              onKeyUp={handleActive}
              autoComplete="off"
            />
            <button
              onClick={handleAddComment}
              type="submit"
              className="submit-comment"
              disabled={active}
            >
              게시
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}
