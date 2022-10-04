import InfoList from '../modules/IconList';
import './info.scss';
import axios from '../../static/img/axios.png';
import express from '../../static/img/express.svg';
import jquery from '../../static/img/jquery.png';
import mariaDB from '../../static/img/mariaDB.png';
import react from '../../static/img/react.png';
import sass from '../../static/img/sass.png';
import tistory from '../../static/img/tistory.svg';
import git from '../../static/img/kisspng-github-computer-software-logo-source-code-github-logo-png-5cc8c808c04229.7905269215566622807875.png';

const Info3 = ({act}) => {
  return (
    <div className={`contentsBox sa anime_scaleUp ${act === 1 ? "show" : ""}`} >
      <div className="content background column">
        <div className="content_title width_per100 height_per10">
          <div className="sub_text">기술 및 참고한 글</div>
        </div>
        <div className="flex_area_row height_per80">
          <div className="technic_list width_per45 flex_area_column">
            {/* 여기에는 사용한 중요 라이브러리/기술 리스트 */}
            <div className="text_center width_per100">
              사용한 중요 기술
            </div>
            <div className="flex_area_column width_per100 height_per80">
              <InfoList img={axios} text={"axios"} />
              <InfoList img={express} text={"Express"} />
              <InfoList img={jquery} text={"jquery"} />
              <InfoList img={mariaDB} text={"mariaDB"} />
              <InfoList img={react} text={"react"} />
              <InfoList img={sass} text={"sass"} />
            </div>
          </div>
          <div className="technic_list width_per45 flex_area_column">
            <div className="text_center width_per100">
              참고 자료
            </div>
            <div className="flex_area_column width_per100">
              <InfoList url={"https://marshall-ku.tistory.com/200"} text={"Gif재생"} />
              <InfoList url={"https://velog.io/@wiostz98kr/React-Express-CORS-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0"} text={"CORS설정"} />
              <InfoList url={"https://artistjay.tistory.com/27?category=928989"} text={"MySQL설정"} />
              <InfoList url={"https://apis.map.kakao.com/web/sample/"} text={"카카오맵API"} />
              <InfoList url={"https://joshua-dev-story.blogspot.com/2020/11/javascript-css-scroll-animation.html"} text={"스크롤 애니메이션"} />
              <InfoList url={"https://codingapple.com/forums/topic/axios-%EB%B6%88%ED%95%84%EC%9A%94%ED%95%9C%EC%9A%94%EC%B2%AD%EC%9D%B4%EA%B3%84%EC%86%8D%EB%93%A4%EC%96%B4%EA%B0%80%EB%8A%94%EC%9D%B4%EC%9C%A0%EA%B0%80/"} text={"axios무한요청"} />
            </div>
          </div>
        </div>
        <div className="flex_area_row width_per100 height_per10">
          <div className="link_content width_per45">
            <div className="flex_area_row width_per100 ">
              <InfoList img={git} text={"Github"} />
              <div className="width_per45">
                <a href="https://github.com/Gotkwondo/INMATE" rel="noreferrer" target="_blank" className="a_deco_none">바로가기</a>
              </div>
            </div>
          </div>
          <div className="link_content width_per45">
            <div className="flex_area_row width_per100 ">
              <InfoList img={tistory} text={"티스토리"} />
              <div className="width_per45">
                <a href="https://58cjdcns99.tistory.com/category/INMATE%20%EC%9D%B8%EC%B2%9C%20%EB%A7%9B%EC%A7%91%20%EC%86%8C%EA%B0%9C" rel="noreferrer" target="_blank" className="a_deco_none">바로가기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info3;