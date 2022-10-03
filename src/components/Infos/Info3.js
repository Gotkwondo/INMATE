import './info.scss';

const Info3 = ({act}) => {
  return (
    <div className={`contentsBox sa anime_scaleUp ${act === 1 ? "show" : ""}`} >
      <div className="content background column">
        <div className="content_title">
          <p>사용한 기술/라이브러리</p>            
          </div>
        <div className="list_area">
          <div className="technic_list">
            여기에는 사용한 중요 라이브러리/기술 리스트
          </div>
          <div className="technic_list">
            참고한 글들
          </div>
        </div>
        <div className="link_area">
          소스코드와 블로그 링크
        </div>
      </div>
    </div>
  )
}
export default Info3;