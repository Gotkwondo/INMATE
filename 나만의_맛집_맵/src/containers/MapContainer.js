import { connect } from 'react-redux';
import { getGeo } from '../modules/currentgeo';
import styled from 'styled-components';
import Map from '../components/Map'

const MapBlock = styled.div`
  display: flex;
  width: 100%;
  heigth: 50vh;
  #map {
    display: block;
    width: 80vw;
    height: 50vh;
    .wrap {position: absolute;left: 0;bottom: 35px;width: 288px;height: 132px;margin-left: -140px;text-align: left;overflow: hidden;font-size: 12px;font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;}
    .wrap * {padding: 0;margin: 0;}
    .wrap .info {width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;}
    .wrap .info:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
    .info .title {padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
    .info .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
    .info .close:hover {cursor: pointer;}
    .info .body {position: relative;overflow: hidden;}
    .info .desc {position: relative;margin: 13px 0 0 90px;height: 75px;}
    .desc .ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .desc .jibun {font-size: 11px;color: #888;margin-top: -2px;}
    .info .img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;}
    .info:after {content: '';position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
  }
`;



const ListItem = ({list}) => {
  return (
    <div>
      <span>{list.id}</span>
      <span>{list.name}</span>
    </div>
  );
};

const MapContainer = () => {
  const testArr = [
  {
    // latlng: new kakao.maps.LatLng(37.443014, 126.708708),
    name: '요리야 김밥',
    id: 1,
    show: false
  },
  {
    // latlng: new kakao.maps.LatLng(37.442971, 126.708892),
    name: '서오릉 피자',
    id: 2,
    show: false
  },
  {
    // latlng: new kakao.maps.LatLng(37.413328, 126.678618),
    name: '그시절 동태탕',
    id: 3,
    show: false
  },
];
  return (
    <div>
      <div>dddddddddddddd</div>
      <div className="list">
        {testArr.map(list => (
          <ListItem
            list={list}
            key={list.id}
          />
        ))}
      </div>
      {/* <MapBlock>
        <Map/>
      </MapBlock> */}
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