import React, { useState, useEffect } from 'react';
import Feed from './components/Feed';
import { footerData } from './data/footerData';
import './MainSeungbeom.scss';

const MainSeungbeom = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <>
      <nav className="main-seungbeom">
        <div>
          <img
            className="instagram-navIcon"
            src="/images/seungbeomJeon/instagram.png"
            alt=""
          />
          <span className="logo-write">Westagram</span>
        </div>
        <div>
          <input className="search" type="text" placeholder="검색" alt="" />
          <img
            className="search-navIcon"
            src="/images/seungbeomJeon/search.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="explore-navIcon"
            src="/images/seungbeomJeon/explore.png"
            alt=""
          />
          <img
            className="heart-navIcon"
            src="/images/seungbeomJeon/heart.png"
            alt=""
          />
          <img
            className="profile-navIcon"
            src="/images/seungbeomJeon/profile.png"
            alt=""
          />
        </div>
      </nav>

      <main>
        <div>
          {feedList.map(feed => (
            <Feed
              key={feed.id}
              userImg={feed.userImg}
              userName={feed.userName}
              feedImg={feed.feedImg}
              likeNum={feed.likeNum}
              feedContent={feed.feedContent}
            />
          ))}
        </div>
        <aside className="main-right-area">
          <section className="user-area">
            <img src="/images/seungbeomJeon/wecode.png" alt="" />
            <span className="userName">
              <div>wecode_bootcamp</div>
              <div className="userName-sub">WeCode | 위코드</div>
            </span>
          </section>
          <section className="story-area">
            <span className="story-title">스토리</span>
            <a href="instead#">모두 보기</a>
            <div className="story-member">
              <img
                className="profile-img"
                src="/images/seungbeomJeon/profilepicture.jpeg"
                alt=""
              />
              <div>
                <div>beom_jeon</div>
                <div className="story-time">20분 전</div>
              </div>
            </div>
            <div className="story-member">
              <img
                className="profile-img"
                src="/images/seungbeomJeon/profilepicture.jpeg"
                alt=""
              />
              <div>
                <div>beom_jeon</div>
                <div className="story-time">20분 전</div>
              </div>
            </div>
            <div className="story-member">
              <img
                className="profile-img"
                src="/images/seungbeomJeon/profilepicture.jpeg"
                alt=""
              />
              <div>
                <div>beom_jeon</div>
                <div className="story-time">20분 전</div>
              </div>
            </div>
            <div className="story-member">
              <img
                className="profile-img"
                src="/images/seungbeomJeon/profilepicture.jpeg"
                alt=""
              />
              <div>
                <div>beom_jeon</div>
                <div className="story-time">20분 전</div>
              </div>
            </div>
          </section>
          <section className="recommend-area">
            <span className="recommend-title">회원님을 위한 추천</span>
            <a href="instead#">모두 보기</a>
            <div className="recommend-member">
              <img
                className="profile-img"
                src="/images/seungbeomJeon/profilepicture.jpeg"
                alt=""
              />
              <div>
                <div>seung_jeon</div>
                <div className="recommend-relate">beom_jeon님 외 2명이 ...</div>
              </div>
              <a href="instead#" className="recommend-follow">
                팔로우
              </a>
            </div>
            <div className="recommend-member">
              <img
                className="profile-img"
                src="/images/seungbeomJeon/profilepicture.jpeg"
                alt=""
              />
              <div>
                <div>seung_jeon</div>
                <div className="recommend-relate">beom_jeon님 외 2명이 ...</div>
              </div>
              <a href="instead#" className="recommend-follow">
                팔로우
              </a>
            </div>
            <div className="recommend-member">
              <img
                className="profile-img"
                src="/images/seungbeomJeon/profilepicture.jpeg"
                alt=""
              />
              <div>
                <div>seung_jeon</div>
                <div className="recommend-relate">beom_jeon님 외 2명이 ...</div>
              </div>
              <a href="instead#" className="recommend-follow">
                팔로우
              </a>
            </div>
            <div className="recommend-member">
              <img
                className="profile-img"
                src="/images/seungbeomJeon/profilepicture.jpeg"
                alt=""
              />
              <div>
                <div>seung_jeon</div>
                <div className="recommend-relate">beom_jeon님 외 2명이 ...</div>
              </div>
              <a href="instead#" className="recommend-follow">
                팔로우
              </a>
            </div>
          </section>
          <footer>
            <ul className="test11">
              {footerData.map(item => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
            <div>Ⓒ 2019 WESTAGRAM</div>
          </footer>
        </aside>

        <div className="test" />
      </main>
    </>
  );
};

export default MainSeungbeom;
