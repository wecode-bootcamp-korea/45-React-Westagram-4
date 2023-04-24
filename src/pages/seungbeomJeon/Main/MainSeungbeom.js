import React, { useState } from 'react';
import './MainSeungbeom.scss';
import '../../../styles/common.scss';
let preventEmptyContent = '';
const MainSeungbeom = () => {
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
      if (item.key === e.key) {
        item.img === '/images/seungbeomJeon/heartred.png'
          ? (item.img = '/images/seungbeomJeon/heart.png')
          : (item.img = '/images/seungbeomJeon/heartred.png');
        setCommentList([...commentList]);
      }
    });
  };

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
        <section className="main-feed-area">
          <div className="feed-profile-area">
            <div>
              <img
                className="profile-img"
                src="/images/seungbeomJeon/profilepicture.jpeg"
                alt=""
              />
              <span className="profile-name">seungbeom_jeon</span>
            </div>
            <img
              className="circle-feedIcon"
              src="/images/seungbeomJeon/circlethree.png"
              alt=""
            />
          </div>
          <img
            className="feed-img"
            src="/images/seungbeomJeon/feed.jpg"
            alt=""
          />
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
            <span className="feed-likeNum">wecode님 외 7명이 좋아합니다</span>
            <div className="comment-area">
              <div className="comment-first">
                <div>seungbeom_jeon 위워크에서 1주차 시작...</div>
                <details>
                  <summary>더 보기</summary>
                  내용추가
                </details>
              </div>
              <div className="comment-next">
                {commentList.map(item => {
                  return (
                    <div className="appendChild-add" key={item.key}>
                      <div>
                        <span>
                          {item.id}
                          {item.content}
                        </span>
                        <span className="deleteAndLike">
                          <button
                            className="delete-button"
                            onClick={() => onClickCommentDelete(item.key)}
                          >
                            <img
                              className="delete-commentIcon"
                              src="/images/seungbeomJeon/deleteicon.png"
                              alt=""
                            />
                          </button>
                          <button
                            className="like-button"
                            onClick={() => onClickCommentLike(item)}
                          >
                            <img
                              className="heart-commentIcon"
                              src={item.img}
                              alt=""
                            />
                          </button>
                        </span>
                      </div>
                      <div className="comment-time">{item.time}</div>
                    </div>
                  );
                })}
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
            <div>Westagram 정보·지원·홍보 센터·API·</div>
            <div>채용정보·개인정보처리방침·약관·</div>
            <div>디렉터리·프로필·해시태그·언어</div>
            <br />
            <div>Ⓒ 2019 WESTAGRAM</div>
          </footer>
        </aside>

        <div className="test" />
      </main>
    </>
  );
};

export default MainSeungbeom;
