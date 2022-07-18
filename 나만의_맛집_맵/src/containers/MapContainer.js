import { connect } from 'react-redux';
import { getCurrentGeo, getCurrentGeoAsync } from '../modules/getCurrentGeo';
import Map from '../components/map';

const MapContainer = ({ getCurrentGeoAsync }) => {
  return (
    <Map getGeo={getCurrentGeoAsync} />
  );
};

export default connect(
  state => ({
    lat: state.lat,
    lng: state.lng
  }),
  {
    getCurrentGeoAsync
  }
)(MapContainer);