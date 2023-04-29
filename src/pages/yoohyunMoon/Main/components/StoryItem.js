import './StoryItem.scss';

function StoryItem({ story }) {
  // console.log('story props!! ', story);

  return (
    <div className="storyItem">
      <ul>
        <li>
          <div>
            <img
              alt="story poster profile"
              src={story.img}
              className="profileImg"
            />
          </div>
          <p>{story.userName}</p>
        </li>
      </ul>
    </div>
  );
}

export default StoryItem;
