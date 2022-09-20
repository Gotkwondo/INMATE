import Map from './Map';
import './right.scss'

const Right = ({lists, centerLoca}) => {
  return (
    <div className="right">
      <div className="map-block">
        <Map
          lists={lists}
          centerLoca={centerLoca}
        />
      </div>
    </div>
  );
};

export default Right;