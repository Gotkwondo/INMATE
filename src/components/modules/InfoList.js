import note from '../../static/img/note.svg'

const InfoList = ({ img, text, url }) => {
  return (
    <div className="flex_area_row width_per100 icon">
      <div className="width_per20 height_per100">
        {img ? <img src={img} alt="" /> : <img className="width_per15" src={note} alt="" />}
      </div>
      <div className="flex_area_row width_per60">
        {url ? <div className=""><a href={url} target="_blank" rel="noreferrer" className="a_deco_none">{text}</a></div> : <div className="width_per100 info_text">{text}</div> }
      </div>
    </div>
  )
}

export default InfoList;