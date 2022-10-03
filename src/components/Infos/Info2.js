import './info.scss';
import mapStaticImg from '../../static/img/mapStaticImg.gif';
import mapGif from '../../static/gif/mapGif.gif';
import GifAnimation from '../modules/GifAnimation';

const Info2 = ({ act }) => {
  return (
    <div className={`contentsBox sa anime_scaleUp ${act === 1 ? "show" : ""}`} >
      <div className="content background column">
        <div className="explanation">"개발자가 추천하는</div>
        <div className="explanation">인천의 맛집을 소개한다"</div>
        
        <GifAnimation url="/INMATE/maplist" img={mapStaticImg} text="INMATE" gif={mapGif}/>
      </div>
    </div>
  )
}
export default Info2;