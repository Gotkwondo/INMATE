/* global kakao */
import React, { useEffect, useState } from 'react';

const { kakao } = window;

const Map = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,

    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, [])

  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

export default Map;