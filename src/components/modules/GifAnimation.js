/**메인페이지에서 사용되는 contents_list에 들어가는 컴포넌트 */
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useEffect } from 'react';

const GifAnimation = ({ url, img, text, gif, use }) => {
  useEffect(() => {
    //  참고 출처 : https://marshall-ku.tistory.com/200
    //  hover 참고 명세서 : https://api.jquery.com/hover/
    $(".hov-anim").hover(
      function () {
        $(this).attr("src", $(this).data("animated"));
      },
      function () {
        $(this).attr("src", $(this).data("static"));
      }
    )
  });
  return (
    <div className={`main_contents_list_element height_per100 ${use}_background`}>
      <div className="link_wrapper height_per10">
        <p>{text}</p>
        <Link to={url} className="link">바로가기</Link>
      </div>
      {/* 아래의 Image는 나중에 애니메이션 효과로 gif를 띄우는 컴포넌트로 바꿀 예정 */}
      {/* <Image url={url} src={imgSrc} /> */}
      <div className="flex_area_row img_wrapper">
        <img src={img} alt="" data-animated={gif} data-static={img} className="hov-anim" />
      </div>
    </div>
  );
};

export default GifAnimation;