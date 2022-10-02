import { useEffect, useState } from 'react';
import './info.scss';

const Info1 = ({ act }) => {
  const [trigger, setTrigger] = useState({num: 0});
  useEffect(() => {
    if (act === 1) {
      setTimeout(() => {
        setTrigger({
          ...trigger,
          num: 1
        })
      }, 500);
    }
  }, trigger);
  return (
    <div className={`contentsBox sa anime_up ${trigger.num === 1 ? "show" : ""}`} >
      <div className="content intro">
        <div className="sub_text">
          안녕하세요
        </div>
        <div className="sub_text">
          인천의 맛집을 소개한다
        </div>
        <div className="main_text">
          만나서 반갑습니다
          <br />
          INMATE 입니다
        </div>
      </div>
    </div>
  )
}
export default Info1;