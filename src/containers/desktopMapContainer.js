import { connect } from 'react-redux';
import { selectLocationAsync } from '../module/setCenter';
import Map from '../components/modules/Map/Map';
import ListCategories from '../components/modules/ListCategories/ListCategories';
import '../styles/mapContainer.scss';

const DesktopMapContainer = ({
  infos,
  centerLoca,
  selectLocationAsync
}) => {

  return (
    
    <div className="middle-wrapping">
      <div className="contents">
        <div className="left">
          <ListCategories
            infos={infos}
            onSelectLocation={selectLocationAsync}
          />
        </div>
        <div className="right">
          <div className="map-block">
            <Map
              infos={infos}
              centerLoca={centerLoca}
            />
          </div>
        </div>
      </div>
      
    </div>
  )
};

//  이후 맛집 리스트를 연결할 때 사용
export default connect(
  //  비구조화 할당을 통해 원하는 상태를 가져올 때는
  //  모듈에서 export한 상태를 모듈을 가져와야 가능하다.
  //  이 상황에서는 state로 작성할 경우 에러가 발생하며 setCenter로 작성해야 한다.
  ({ setCenter }) => ({
    infos: setCenter.infos,
    centerLoca: setCenter.centerLoca
  }),
  {
    //  액션 함수를 작성
    selectLocationAsync
  }
)(DesktopMapContainer);