import { connect } from 'react-redux';
import selectLocation from '../modules/setCenter'
import Map from '../components/Map'
import ListCategories from '../components/ListCategories';
import '../styles/mapContainer.scss';

const MapContainer = () => {
  return (
    <div className="middle-wrapping">
      <div className="left">
        <ListCategories/>
      </div>
      <div className="right">
        <div className="map-block">
          <Map />
        </div>
      </div>
    </div>
  )
}

//  이후 맛집 리스트를 연결할 때 사용
export default connect(
  ({ state }) => ({
    info: state.info,
    centerLoca: state.centerLoca
  }),
  {
    //  액션 함수를 작성
    selectLocation
  }
)(MapContainer);