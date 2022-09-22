import MainContentsListElement from '../modules/Main_contents_list_element';
import testImage from '../../static/img/test_Image.jpg'

const Main = () => {
  return (
    <div className="main_contents">
      <div className="main_contents_list">
        <MainContentsListElement url="/INMATE/maplist" imgSrc={testImage} text="인천 맛집 지도" />
        <MainContentsListElement url="/INMATE/webinfo" imgSrc={testImage} text="웹의 정보" />
        <MainContentsListElement url="/INMATE/dev" imgSrc={testImage} text="개발일지" />
      </div>
    </div>
  );
};

export default Main;