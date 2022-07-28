import { connect } from 'react-redux';
import { getGeo } from '../modules/currentgeo';
import Map from '../components/Map'
import List from '../components/List';
import './mapContainer.scss';

const MapContainer = () => {
  return (
    <div className="middle-wrapping">
      <div className="left">
        <List/>
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
  ({ currentgeo }) => ({
    geo: currentgeo.geo
  }),
  {
    getGeo
  }
)(MapContainer);