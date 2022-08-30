import '../styles/title.scss';
import GitImage from "../static/img/kisspng-github-computer-software-logo-source-code-github-logo-png-5cc8c808c04229.7905269215566622807875.png";
import Tistory from "../static/img/tistory.svg";

const Title = () => {
  return (
    <div className="hd-wrapper">
      <div className="title">
        <a href='./'>
          <div className='title-wrapper'>
            <p>I</p>
            <p>N</p>
            <p>M</p>
            <p>A</p>
            <p>T</p>
            <p>E</p>
          </div>
        </a>
      </div>
      <div className="img-wrapper">
        <ul>
          <li>
            {/* 새창을 띄우기 위한 코드 target='_blank' rel='noreferrer' 코드를 입력 */}
            <a href='https://github.com/Gotkwondo/Side-Project/tree/main/%EB%82%98%EB%A7%8C%EC%9D%98_%EB%A7%9B%EC%A7%91_%EB%A7%B5' target='_blank' rel='noreferrer'>
              <img src={GitImage} />
            </a>
          </li>
          <li>
            {/* 새창을 띄우기 위한 코드 target='_blank' rel='noreferrer' 코드를 입력 */}
            <a href='https://58cjdcns99.tistory.com/' target='_blank' rel='noreferrer'>
              <img src={Tistory} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Title;