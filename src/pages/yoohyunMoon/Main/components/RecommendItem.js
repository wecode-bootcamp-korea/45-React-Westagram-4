import './RecommendItem.scss';

function RecommendItem(props) {
  console.log('recommend! ', props);

  return (
    <ul className="recommendedUserList">
      {recommendData.map(data => {
        return (
          <li className="recommendedUserListItem" key={data.id}>
            <div className="recommendedUserListItemWrapper">
              <img alt="recommended user profile" src={data.img} />
              <div>
                <h4>{data.userName}</h4>
                <p>{data.followStatus}</p>
              </div>
            </div>
            <button>팔로우</button>
          </li>
        );
      })}
    </ul>
  );
}

export default RecommendItem;
