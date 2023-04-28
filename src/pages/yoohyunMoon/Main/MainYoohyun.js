import React, { useEffect, useState } from 'react';
import FeedItem from './components/FeedItem';
import { FOOTER_INFO } from './FOOTER_INFO';
import './MainYoohyun.scss';
import StoryItem from './components/StoryItem';
import Nav from './components/Nav';
import RecommendItem from './components/RecommendItem';

const MainYoohyun = () => {
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

  return (
    <div className="mainYoohyun">
      <Nav />
      <main>
        <div className="leftColumnWrap">
          <div className="stories">
            {storyList.map(story => {
              return <StoryItem key={story.id} story={story} />;
            })}
          </div>
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
            {recommendData.map(recommend => {
              return (
                <RecommendItem
                  key={recommend.id}
                  recommend={recommend && recommend}
                />
              );
            })}
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
