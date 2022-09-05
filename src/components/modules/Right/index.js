import Map from './Map';
import './right.scss'

const Right = ({infos, centerLoca}) => {
  return (
    <div className="right">
      <div className="map-block">
        <Map
          infos={infos}
          centerLoca={centerLoca}
        />
      </div>
    </div>
  );
};

export default Right;