import React, { useEffect, useState } from 'react';
import FeedItem from './components/FeedItem';
import CommentItem from './components/CommentItem';
import { FOOTER_INFO } from './FOOTER_INFO';
import './MainYoohyun.scss';
import StoryItem from './components/StoryItem';

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
  const [storyList, setStoryList] = useState([]);

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

  useEffect(() => {
    fetch('/data/storyData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setStoryList(data));
  }, []);

  console.log('storyList', storyList);

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
          {/* story position */}
          <div className="stories">
            {storyList.map(story => {
              return <StoryItem key={story.id} story={story} />;
            })}
          </div>

          {/* <div className="storiesContainer">
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
          </div> */}
          {feedList.map(feed => (
            <FeedItem key={feed.id} feed={feed} />
          ))}
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
