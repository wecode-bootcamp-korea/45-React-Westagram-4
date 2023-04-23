import React, { useState } from 'react';
import './MainSoobin.scss';
import { v4 as uuidv4 } from 'uuid';
import Comment from './Comment';

export default function MainSoobin() {
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

  return (
    <div className="wrap">
      <header>
        <div className="nav">
          <div className="westagram_logo">
            <img
              className="westagram_lg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              alt="main_lg"
            />
          </div>
          <div>
            <h3 className="header_logo">Westagram</h3>
          </div>
          <input
            id="search_icon"
            type="search"
            className="input_search"
            placeholder="검색"
          />
          <div className="icon_box">
            <img
              className="explore_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="explore_icon"
            />
            <img
              className="heart_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart_logo"
            />
            <img
              className="profile_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="profile_icon"
            />
          </div>
        </div>
      </header>
      <div className="wrapper">
        <div className="main">
          <div className="main_left">
            <div className="feed_id">
              <div className="id_imgbox">
                <div className="id_box">
                  <div className="id_box_img">
                    <img
                      className="id_img"
                      src="/images/soobinLee/common.jpeg"
                      alt="profile_img"
                    />
                  </div>
                  <div className="id_place">
                    <div className="id_name">_xxruby</div>
                    <div className="place">선릉역 10번 출구</div>
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
              <img src="/images/soobinLee/1.jpeg" alt="feed_img" />
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
                    src="/images/soobinLee/common.jpeg"
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
                    <span className="comment_id">_xxruby</span>
                    <span className="comment_content">좋아하는 영화</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment_section">
              <ul class="comments">
                <li>
                  <span>
                    <span className="span_user">xxxibgdrgn</span>
                    <span className="span_user2" />
                    나도 봐야지!
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
          <div className="main_right">
            <div className="userprofilebox">
              <div className="userProflie">
                <img
                  class="userImage"
                  src="/images/soobinLee/common.jpeg"
                  alt="프로필 이미지"
                />
              </div>
              <div className="usercontent">
                <div className="span-right">_xxruby</div>
                <div className="span-right2">프로필 설명</div>
              </div>
            </div>
            <div className="story-box">
              <div className="story-content">
                <div className="story1">
                  <span className="story2">스토리</span>
                  <span className="story3">모두 보기</span>
                </div>
              </div>
            </div>
            <div className="user_profile">
              <div className="user_profile2">
                <img
                  className="userImage2"
                  src="/images/soobinLee/common.jpeg"
                  alt="프로필 이미지"
                />
              </div>
              <div className="usercontent2">
                <div className="span-right">_xxruby</div>
                <div className="span-right2">프로필 설명</div>
              </div>
              <div className="user_profile3">
                <img
                  className="userImage2"
                  src="/images/soobinLee/common.jpeg"
                  alt="프로필 이미지"
                />
              </div>
              <div className="usercontent2">
                <div className="span-right">_xxruby</div>
                <div className="span-right2">프로필 설명</div>
              </div>
              <div className="user_profile4">
                <img
                  className="userImage2"
                  src="/images/soobinLee/common.jpeg"
                  alt="프로필 이미지"
                />
              </div>
              <div className="usercontent2">
                <div className="span-right">_xxruby</div>
                <div className="span-right2">프로필 설명</div>
              </div>
              <div className="user_profile4">
                <img
                  className="userImage2"
                  src="/images/soobinLee/common.jpeg"
                  alt="프로필 이미지"
                />
              </div>
              <div className="usercontent2">
                <div className="span-right">_xxruby</div>
                <div className="span-right2">프로필 설명</div>
              </div>
            </div>
            <div className="user_profile1">
              <div className="story-box">
                <div className="story-content">
                  <div className="story1">
                    <span className="story2">회원님을 위한 추천</span>
                    <span className="story4">모두 보기</span>
                  </div>
                </div>
              </div>
              <div class="user_profile5">
                <img
                  className="userImage2"
                  src="/images/soobinLee/common.jpeg"
                  alt="프로필 이미지"
                />
              </div>
              <div className="usercontent2">
                <div className="span-right">_xxruby</div>
                <div className="span-right2">프로필 설명</div>
                <span>
                  <div className="span-right3">팔로우</div>
                </span>
              </div>

              <div className="user_profile6">
                <img
                  className="userImage2"
                  src="/images/soobinLee/common.jpeg"
                  alt="프로필 이미지"
                />
              </div>
              <div className="usercontent2">
                <div className="span-right">_xxruby</div>
                <div className="span-right2">프로필 설명</div>
                <span>
                  <div className="span-right3">팔로우</div>
                </span>
              </div>

              <div className="user_profile7">
                <img
                  className="userImage2"
                  src="/images/soobinLee/common.jpeg"
                  alt="프로필 이미지"
                />
              </div>
              <div className="usercontent2">
                <div className="span-right">_xxruby</div>
                <div className="span-right2">프로필 설명</div>
                <span>
                  <div className="span-right3">팔로우</div>
                </span>
              </div>
            </div>
            <div className="footer">
              <p className="script">
                Instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙
                <br />
                채용 정보 ∙ 개인정보처리방침 ∙ 약관 ∙ 디렉터리 ∙ 프로필 ∙
                해시태그 ∙ 언어
                <br />© 2023 INSTAGRAM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
