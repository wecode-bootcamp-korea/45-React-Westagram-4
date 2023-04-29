import React, { useState } from 'react';
import './FeedItem.scss';
import CommentItem from './CommentItem';

function FeedItem({ feed }) {
  // console.log('feed props comment 📑', feed.comment && feed.comment[0]);
  // 왜 feed를 부모에서 전달받아올 때 , &&을 안써도 되는 거지? 원래 빈 배열로 초기값을 설정되어있는데 그것과는 상관없는걸까??

  // 부모인 main에서 map을 돌리기 때문에 각 객체 요소 내 데이터가 한 번씩 들어가게 됨

  const [commentValue, setCommentValue] = useState('');
  const [commentList, setCommentList] = useState(feed.comment);

  // feed.comment 데이터 예시
  // {id: 2, commenter: 'dreamer', commentText: '드림 봐야징'}
  // 위처럼 초기값을 객체 형식으로 저장한다. (댓글과 관련하여 여러 정보가 있기 때문.)

  // 댓글 달기 먼저 구현하기!!!
  const getUserComment = e => {
    setCommentValue(e.target.value);
  };

  const uploadComment = e => {
    e.preventDefault();
    // console.log('commentValue variable can be used here!! ', commentValue);

    // Early Return을 통한 빈문자열이면, 댓글 못 달게 방지
    if (commentValue === '') {
      return alert('댓글을 입력해주세요.');
    }

    // setCommentList([commentValue, ...commentList]);
    // 오답 노트 : setCommentList() 함수를 통해 댓글 목록을 업데이트 할 때, [배열 내부에 담고, 먼저 ...commentList를 통해 기존의 댓글 목록을 그대로 불러온다. 그 뒤에 추가적으로 신규 작성된 댓글을 추가한다. ]

    setCommentList([
      ...commentList,
      {
        id: commentList[commentList.length - 1].id + 1,
        // feedList.json의 데이터 갯수(or id) +1 => 바로 다음 데이터의 아이디 숫자로 들어가게 됨.
        commenter: 'hello_user1',
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
              {/* 댓글 목록 내 객체 데이터를 하나씩 순회한다 */}
              {commentList.map(comment => {
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
