import './Nav.scss';

function Nav() {
  return (
    <div className="navYoohyun">
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
    </div>
  );
}

export default Nav;
