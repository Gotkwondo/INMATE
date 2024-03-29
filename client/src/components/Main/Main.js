import GifAnimation from '../modules/GifAnimation';
import mapGif from './../../static/gif/mapGif.gif';
import mapStaticImg from '../../static/img/mapStaticImg.gif'
import infoGif from '../../static/gif/infoGif.gif'
import infoStatic from '../../static/img/infoStatic.jpg'

const Main = () => {
  return (
    <div className="main_contents">
      <div className="main_contents_list">
        <GifAnimation url="/maplist" img={mapStaticImg} text="인천 맛집 지도" gif={mapGif} use={"main"} />
        <GifAnimation url="/info" img={infoStatic} text="웹의 정보" gif={infoGif } use={"main"} />
      </div>
    </div>
  );
};

export default Main;