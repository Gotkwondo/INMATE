import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main_container">
      <h1>
        <Link to="/INMATE/maplist">인천 맛집 지도</Link>
      </h1>
      <h1>
        <Link to="/INMATE/webinfo">웹의 정보</Link>
      </h1>
      <h1>
        <Link to="/INMATE/dev">개발일지</Link>
      </h1>
    </div>
  );
};

export default Main;