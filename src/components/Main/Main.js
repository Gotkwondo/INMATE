import GifAnimation from '../modules/GifAnimation';
import testImage from '../../static/img/test_Image.jpg';
import mapGif from './../../static/gif/mapGif.gif';
import mapStaticImg from '../../static/img/mapStaticImg.gif'

const Main = () => {
  return (
    <div className="main_contents">
      <div className="main_contents_list">
        <GifAnimation url="/INMATE/maplist" img={mapStaticImg} text="인천 맛집 지도" gif={mapGif}/>
        <GifAnimation url="/INMATE/info" img={testImage} text="웹의 정보" gif={mapGif }/>
        <GifAnimation url="/INMATE/dev" img={testImage} text="개발일지" gif={ mapGif}/>
      </div>
    </div>
  );
};

export default Main;