import './RecommendItem.scss';

function RecommendItem({ recommend }) {
  return (
    <ul className="recommendedUserList">
      <li className="recommendedUserListItem">
        <div className="recommendedUserListItemWrapper">
          <img alt="recommended user profile" src={recommend.img} />
          <div>
            <h4>{recommend.userName}</h4>
            <p>{recommend.followStatus}</p>
          </div>
        </div>
        <button>팔로우</button>
      </li>
    </ul>
  );
}

export default RecommendItem;
