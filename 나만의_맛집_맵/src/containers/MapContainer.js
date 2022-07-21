import { connect } from 'react-redux';
import { getGeo } from '../modules/currentgeo';
import styled from 'styled-components';
import Map from '../components/Map'

const MapBlock = styled.div`
  display: flex;
  width: 100%;
  #map {
    display: block;
    width: 80vw;
    height: 100vh;
  }
`;

const MapContainer = ({
  getGeo,
  geo
}) => {
  return (
    <MapBlock>
      <Map geo={geo} getGeo={getGeo}/>
    </MapBlock>
  )
}

export default connect(
  ({ currentgeo }) => ({
    geo: currentgeo.geo
  }),
  {
    getGeo
  }
)(MapContainer);