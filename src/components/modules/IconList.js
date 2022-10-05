import note from '../../static/img/note.svg'

const InfoList = ({ img, text, url }) => {
  return (
    <div className="flex_area_row width_per100 icon">
      <div className="flex_area_row width_per45">
        {img ? <img src={img} alt="" /> : <img className="width_per45" src={note} alt="" />}
      </div>
      <div className="flex_area_row width_per45">
        {url ? <div className="width_per45"><a href={url} target="_blank" rel="noreferrer" className="a_deco_none">{text}</a></div> : <div className="width_per45">{text}</div> }
      </div>
    </div>
  )
}

export default InfoList;