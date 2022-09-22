import { Link } from 'react-router-dom';
import Image from '../modules/Image';
import testImage from '../../static/img/test_Image.jpg'

const Main = () => {
  return (
    <div className="main_contents">
      <div className="main_contents_list">
        <div className="main_contents_list_element">
          <div className="link_wrapper">
            <Link to="/INMATE/maplist">인천 맛집 지도</Link>
          </div>
          <Image url="/INMATE/maplist" src={testImage}/>
        </div>
        <div className="main_contents_list_element">
          <div className="link_wrapper">
            <Link to="/INMATE/webinfo">웹의 정보</Link>
          </div>
          <Image url="/INMATE/maplist" src={testImage}/>
        </div>
        <div className="main_contents_list_element">
          <div className="link_wrapper">
            <Link to="/INMATE/dev">개발일지</Link>
          </div>
          <Image url="/INMATE/maplist" src={testImage}/>
        </div>
      </div>
    </div>
  );
};

export default Main;