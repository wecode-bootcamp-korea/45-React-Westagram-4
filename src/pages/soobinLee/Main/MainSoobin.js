import React, { useEffect, useState } from 'react';
import { FOOTER_INFO_LIST } from './FOOTER_INFO';
import Feed from './Feed';
import './MainSoobin.scss';

export default function MainSoobin() {
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
    <div className="MainSoobin">
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
          <div>
            {/* <Feed /> */}
            {feedList.map(feed => {
              return (
                <Feed
                  key={feed.id}
                  profileId={feed.profileId}
                  profileSrc={feed.profileSrc}
                  imgSrc={feed.imgSrc}
                  feedScript={feed.feedScript}
                  {...feed} // 없으면 commentId, comment1 사라짐
                />
              );
            })}
          </div>

          <div className="main_right">
            <div className="userprofilebox">
              <div className="userProflie">
                <img
                  className="userImage"
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
              <div className="user_profile5">
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
              <ul className="script">
                {FOOTER_INFO_LIST.map(info => (
                  <li key={info.id}>
                    <li className="script2" href={info.href}>
                      {info.title}
                    </li>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
