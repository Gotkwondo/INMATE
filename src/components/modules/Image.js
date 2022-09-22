/*const Image = ({url, 이미지 src}) =>{ li>a>img } */
const Image = ({ url, src }) => {
  return (
    <li>
      <a href={url}>
        <img src={src} alt="" target='_blank' rel='noreferrer' />
      </a>
    </li>
  )
}

export default Image;