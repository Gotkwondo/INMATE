import Image from './Image';
import '../../../styles/title.scss';
import GitImage from "../../../static/img/kisspng-github-computer-software-logo-source-code-github-logo-png-5cc8c808c04229.7905269215566622807875.png";
import TistoryImage from "../../../static/img/tistory.svg";

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
          <Image url={'https://github.com/Gotkwondo/INMATE'} src={GitImage} />
          <Image url={'https://58cjdcns99.tistory.com/'} src={TistoryImage}/>
        </ul>
      </div>
    </div>
  )
};

export default Title;