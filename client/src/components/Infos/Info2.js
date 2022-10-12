import './info.scss';
import mapStaticImg from '../../static/img/mapStaticImg.gif';
import mapGif from '../../static/gif/mapGif.gif';
import GifAnimation from '../modules/GifAnimation';

const Info2 = ({ act }) => {
  return (
    <div className={`contentsBox sa anime_scaleUp ${act === 1 ? "show" : ""}`} >
      <div className="content background column">
        <p className="sub_text height_per10">"개발자가 추천하는</p>
        <p className="sub_text height_per10">인천의 맛집을 소개한다"</p>
        <div className="info_gif width_per100 height_per80">
          <GifAnimation url="/INMATE/maplist" img={mapStaticImg} text="INMATE" gif={mapGif} use={"info"} />
        </div>
      </div>
    </div>
  )
}
export default Info2;