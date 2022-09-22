import Map from './Map';
import './right.scss'

const Right = ({list, centerLoca}) => {
  return (
    <div className="right">
      <div className="map-block">
        <Map
          list={list}
          centerLoca={centerLoca}
        />
      </div>
    </div>
  );
};

export default Right;