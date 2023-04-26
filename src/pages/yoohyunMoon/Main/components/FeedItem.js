import React, { useState } from 'react';
import './FeedItem.scss';
import CommentItem from './CommentItem';

function FeedItem({ feed }) {
  console.log('feed props', feed);
  console.log('feed props comment 📑', feed.comment && feed.comment[0]);
  // 부모인 main에서 map을 돌리기 때문에 각 객체 요소 내 데이터가 한 번씩 들어가게 됨

  const [commentValue, setCommentValue] = useState('');
  const [commentList, setCommentList] = useState(feed.comment);

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
      {
        id: commentList[commentList.length - 1].id + 1,
        commenter: 'hello',
        commentText: commentValue,
      },
    ]);
    setCommentValue('');
  };

  return (
    <section className="feedItem">
      <article>
        <div className="postHeader">
          <div className="posterInfoWrapper">
            <img
              alt="user profile"
              src={feed.posterImg}
              className="profileImg"
            />
            <h2>{feed.posterName}</h2>
            <div className="createdAt">
              <span className="dot" />
              {feed.createdAt}
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
          <img src={feed.img} alt="cute doggie" />
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
            <img alt="user profile" src={feed.likerImg} class="profileImg" />
            <p>
              <span class="bold">{feed.likerName}</span>님
              <span class="bold"> 외 {feed.likesCount}명</span>이 좋아합니다
            </p>
          </div>
          <div className="postContent">
            <div className="postContentWrapper">
              <span className="posterName">{feed.posterName}</span>
              <p>
                {feed.content}
                <span>...</span>
              </p>
            </div>
            <p className="moreContent">더 보기</p>
          </div>
        </div>
        <div className="commentsList">
          <div id="uploadedCommentsBox">
            <p className="more">댓글 {feed.commentCount}개 모두 보기</p>
            <ul>
              {/* <li className="commentItem">
                 <div className="commentItemDetail">
                  <span>{feed.comment[0].commenter}</span>
                  {feed.comment[0].commentText}
                </div>
                <div>
                  <img
                    alt="heart icon"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    className="commentItemLike"
                  />
                </div>
              </li> */}
              {commentList.map(comment => {
                console.log('???? ', comment);
                return <CommentItem key={comment.id} comment={comment} />;
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
    </section>
  );
}

export default FeedItem;
