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
const test = () => {
  console.log('button test');
}

const MapPage = () => {
  return (
    <MapBlock>
      <Map />
      <button onClick={test}>현제 위치로 이동</button>
    </MapBlock>
  )
}

export default MapPage;