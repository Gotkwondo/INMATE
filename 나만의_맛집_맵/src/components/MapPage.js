import styled from 'styled-components';
import Map from './Map';

const MapBlock = styled.div`
  display: flex;
  #map {
    display: block;
    width: 100%;
    height: 100vh;
  }
  width: 100%;
`;

const MapPage = () => {
  return (
    <MapBlock>
      <Map/>
    </MapBlock>
  )
}

export default MapPage;