const Image = ({url, src}) => {
  return (
    <li>
      <a href={url}>
        <img src={src} target='_blank' rel='noreferrer' />
      </a>
    </li>
  )
}

export default Image;