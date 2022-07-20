import { connect } from 'react-redux';
import MapPage from '../components/MapPage';
import { getGeo } from '../modules/currentgeo';
import styled from 'styled-components';
import Map from '../components/Map'

const MapBlock = styled.div`
  display: flex;
  #map {
    display: block;
    width: 100%;
    height: 100vh;
  }
  width: 100%;
`;

const MapContainer = ({
  getGeo,
  geo
}) => {
  return (
    <MapBlock>
      <Map geo={geo}/>
      <button onClick={getGeo}>현제 위치로 이동</button>
    </MapBlock>
  )
}

export default connect(
  ({ currentgeo }) => ({
    geo: currentgeo.currentgeo
  }),
  {
    getGeo
  }
)(MapContainer);