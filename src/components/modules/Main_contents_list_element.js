/**메인페이지에서 사용되는 contents_list에 들어가는 컴포넌트 */
import { Link } from 'react-router-dom';
import Image from './Image';

const MainContentsListElement = ({ url, imgSrc, text }) => {
  return (
    <div className="main_contents_list_element">
      <div className="link_wrapper">
        <Link to={url}>{text}</Link>
      </div>
      {/* 아래의 Image는 나중에 애니메이션 효과로 gif를 띄우는 컴포넌트로 바꿀 예정 */}
      <Image url={url} src={imgSrc} />
    </div>
  );
};

export default MainContentsListElement;