import React, { useEffect, useState } from 'react';
import FeedItem from './components/FeedItem';
import CommentItem from './components/CommentItem';
import { FOOTER_INFO } from './FOOTER_INFO';
import './MainYoohyun.scss';

const MainYoohyun = () => {
  /* 
  댓글 작성 관련 코드 FeedItem component로 이전
  
  const [commentValue, setCommentValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  // 댓글 달기 먼저 구현하기!!!
  const getUserComment = e => {
    setCommentValue(e.target.value);
  };

  const uploadComment = e => {
    e.preventDefault();
    // console.log('here!! ', commentValue);

    // Early Return을 통한 빈문자열이면, 댓글 못 달게 방지
    if (commentValue === '') {
      return alert('댓글을 입력해주세요.');
    }
    // setCommentList([commentValue, ...commentList]);
    setCommentList([
      ...commentList,
      { id: String(commentList.length + 1), text: commentValue },
    ]);
    setCommentValue('');
  }; */

  const [feedList, setFeedList] = useState([]);
  const [recommendData, setRecommendData] = useState([]);

  useEffect(() => {
    fetch('/data/feedList.json')
      .then(response => response.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/recommendData.json')
      .then(res => res.json())
      .then(data => setRecommendData(data));
  }, []);

  return (
    <div className="mainYoohyun">
      <header id="gnb">
        <div>
          <h1 id="logo">
            <a href="#">Westagram</a>
          </h1>
        </div>
        <div className="searchContainer">
          <input type="text" />
          <div className="searchWrapper">
            <i class="fa-solid fa-magnifying-glass" />
            <span>검색</span>
          </div>
        </div>
        <nav className="navIconsContainer">
          <a href="#">
            <img
              alt="navigation icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              width="25px"
            />
          </a>
          <a href="">
            <img
              alt="heart icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              width="25px"
            />
          </a>
          <a href="">
            <img
              alt="user profile icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              width="25px"
            />
          </a>
        </nav>
      </header>
      <main>
        <div className="leftColumnWrap">
          <div className="storiesContainer">
            <ul>
              <li>
                <div>
                  <img
                    alt="story poster profile"
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="profileImg"
                  />
                </div>
                <p>iam_dam</p>
              </li>
              <li>
                <div>
                  <img
                    alt="story poster profile pic"
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="profileImg"
                  />
                </div>
                <p>iam_dam</p>
              </li>
              <li>
                <div>
                  <img
                    alt="story poster profile"
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="profileImg"
                  />
                </div>
                <p>iam_dam</p>
              </li>
              <li>
                <div>
                  <img
                    alt="story poster profile pic"
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="profileImg"
                  />
                </div>
                <p>iam_dam</p>
              </li>
              <li>
                <div>
                  <img
                    alt="story poster profile pic"
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="profileImg"
                  />
                </div>
                <p>iam_dam</p>
              </li>
            </ul>
          </div>
          {/* feedItem position */}
          {feedList.map(feed => (
            <FeedItem key={feed.id} feed={feed} />
          ))}

          {/*  <section className="postsContainer">
            <article>
              <div className="postHeader">
                <div className="posterInfoWrapper">
                  <img
                    alt="user profile"
                    src="/images/yoohyunMoon/profile_photo.jpg"
                    className="profileImg"
                  />
                  <h2>software_engineer_wannabe</h2>
                  <div className="createdAt">
                    <span className="dot" />
                    4일
                    <span className="dot" />
                  </div>
                </div>
                <div className="moreOptionsWrapper">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="postedImg">
                <img
                  src="/images/yoohyunMoon/post_dog_photo.jpg"
                  alt="cute doggie"
                />
              </div>
              <div className="postContentContainer">
                <div className="interactionIconsWrapper">
                  <div class="leftIcons">
                    <i class="fa-regular fa-heart" />
                    <i class="fa-regular fa-comment fa-flip-horizontal" />
                    <i class="fa-solid fa-arrow-up-right-from-square" />
                  </div>
                  <i class="fa-regular fa-bookmark" />
                </div>
                <div className="likedUsers">
                  <img
                    alt="user profile"
                    src="https://images.unsplash.com/photo-1620194544222-8c956ca15f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                    class="profileImg"
                  />
                  <p>
                    <span class="bold">wework</span>님
                    <span class="bold">외 213명</span>이 좋아합니다
                  </p>
                </div>
                <div className="postContent">
                  <div className="postContentWrapper">
                    <span className="posterName">
                      software_engineer_wannabe
                    </span>
                    <p>
                      오늘도 감사한 하루💖<span>...</span>
                    </p>
                  </div>
                  <p className="moreContent">더 보기</p>
                </div>
              </div>
              <div className="commentsList">
                <div id="uploadedCommentsBox">
                  <p className="more">댓글 3개 모두 보기</p>
                  <ul>
                    {commentList.map(comment => {
                      return (
                        <CommentItem key={comment.id} comment={comment.text} />
                      );
                    })}
                  </ul>
                </div>
                <form action="" onSubmit={uploadComment}>
                  <input
                    value={commentValue}
                    className="inputReply"
                    type="text"
                    placeholder="댓글 달기..."
                    onChange={getUserComment}
                  />
                  <button type="submit">게시</button>
                </form>
              </div>
            </article>
          </section> */}
        </div>
        <aside>
          <div className="currentUserInfo">
            <img
              alt="user profile"
              src="/images/yoohyunMoon/profile_photo.jpg"
              className="currentUserInfoImg"
            />
            <div className="currentUserInfoDetail">
              <p>software_engineer_wannabe</p>
              <p>S.E. based in Aus | from S.Korea</p>
            </div>
          </div>
          <div className="recommendedUser">
            <div className="recommendedUserHeader">
              <h3>회원님을 위한 추천</h3>
              <span>모두 보기</span>
            </div>
            <ul className="recommendedUserList">
              {recommendData.map(data => {
                return (
                  <li className="recommendedUserListItem" key={data.id}>
                    <div className="recommendedUserListItemWrapper">
                      <img
                        alt="recommended user profile"
                        src={data.img}
                        className="profileImg"
                      />
                      <div>
                        <h4>{data.userName}</h4>
                        <p>{data.followStatus}</p>
                      </div>
                    </div>
                    <button className="debuttonize">팔로우</button>
                  </li>
                );
              })}

              {/*  
              // 이후 map을 통해 구현할 부분
              <li>
                <div className="userInfoWrapper">
                  <img
                    alt="first recommended user profile picture"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    className="profileImg"
                  />
                  <div>
                    <h4 className="bold">tellmemoreaboutu</h4>
                    <p>회원님이 팔로우합니다</p>
                  </div>
                </div>
                <button className="debuttonize">팔로우</button>
              </li>
              <li>
                <div className="userInfoWrapper">
                  <img
                    alt="first recommended user profile picture"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    className="profileImg"
                  />
                  <div>
                    <h4 className="bold">tellmemoreaboutu</h4>
                    <p>회원님이 팔로우합니다</p>
                  </div>
                </div>
                <button className="debuttonize">팔로우</button>
              </li> */}
            </ul>
          </div>
          <footer>
            <ul>
              {FOOTER_INFO.map(footer => {
                return (
                  <li key={footer.id}>
                    <a href={footer.src}>
                      {footer.title === 'Meta Verified' ? (
                        footer.title
                      ) : (
                        <>{footer.title}&nbsp;&#183;&nbsp;</>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
            <p>&copy; 2023 INSTAGRAM FROM META</p>
          </footer>
        </aside>
      </main>
    </div>
  );
};

export default MainYoohyun;
