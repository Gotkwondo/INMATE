import './fullPageScroll.scss';
import { useEffect, useRef, useState } from 'react';
import Info1 from '../../Infos/Info1';
import Info2 from '../../Infos/Info2';
import Info3 from '../../Infos/Info3';

const FullPageScroll = () => {
  //  마우스 스크롤 이벤트 발생 후 탑 위치를 상태 관리
  const [scrollOffset, setScrollOffset] = useState({offset:0});

  const wrapperRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      //  스크롤 행동 구현
      const { deltaY } = e; //  wheel 이벤트의 방향이 아래이면 양수, 위면 음수가 나옴
      const { scrollTop } = wrapperRef.current; //  스크롤 위쪽 끝부분의 위치
      const pageHeight = window.innerHeight;  //  화면의 세로 길이로써 100vh와 같음
      
      if (deltaY > 0) {
        //  스크롤 내릴 때
        //  현재 1페이지
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //  2페이지로 이동
          wrapperRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollOffset({
            ...scrollOffset,
            offset: pageHeight
          });
        }
        //  현재 2페이지
        else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //  3페이지로 이동
          wrapperRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollOffset({
            ...scrollOffset,
            offset: pageHeight * 2
          });
        }
        //  현재 3페이지
        else {
          //  3페이지로 이동
          wrapperRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      }
      else {
        //  스크롤 올릴 때
        //  현재 1페이지
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //  1페이지로 이동
          wrapperRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
        //  현재 2페이지
        else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //  1페이지로 이동
          wrapperRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollOffset({
            ...scrollOffset,
            offset: 0
          });
        }
        //  현재 3페이지
        else {
          //  2페이지로 이동
          wrapperRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    const wrapperRefCurrent = wrapperRef.current;
    wrapperRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      wrapperRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  console.log(scrollOffset.offset);
  console.log(`inner element1` + `${(scrollOffset.offset === 0 ? " actived" : "")}`)
  return (
    <div ref={wrapperRef} className="inner_wrapper bg-bl">
      <div className={`inner element1` + `${(scrollOffset.offset === 0 ? " actived" : "")}`}>
        <Info1 act={0} />
      </div>
      <div className={`inner element2` + `${(scrollOffset.offset === window.innerHeight ? " actived" : "")}`}>
        <Info2 />
      </div>
      <div className={`inner element3` + `${(scrollOffset.offset === window.innerHeight * 2 ? " actived" : "")}`}>
        <Info3 />
      </div>
      
      
      
    </div>
  );
};

export default FullPageScroll;