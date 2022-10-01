import './info.scss';
import mapStaticImg from '../../static/img/mapStaticImg.gif';
import mapGif from '../../static/gif/mapGif.gif';
import GifAnimation from '../modules/GifAnimation';

const Info2 = ({ act }) => {
  return (
    <div className={`contentsBox sa anime_scaleUp ${act === 1 ? "show" : ""}`} >
      <div className="content">
        <GifAnimation url="/INMATE/maplist" img={mapStaticImg} text="인천의 맛집을 소개한다" gif={mapGif}/>
      </div>
    </div>
  )
}
export default Info2;