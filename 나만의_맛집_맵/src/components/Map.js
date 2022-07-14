/* global kakao */
import React, { useEffect } from 'react';

const { kakao } = window;

const Map = () => {

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById('map');
    const mapOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    //  지도 생성
    const kakaoMap = new kakao.maps.Map(container, mapOptions);

    var imageSrc = '../static/img/rice.png', // 마커이미지의 주소입니다    
      imageSize = new kakao.maps.Size(40,41), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

    //  마커 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      clickable: true //  마커를 클릭했을 때 지도의 클릭 이벤트 발생 방지
    });
    //  지도위에 마커 생성
    marker.setMap(kakaoMap);

    //  마커를 클릭시 마커 위에 표시할 인포윈도우 생성
    const iwContent = '<div style="padding: 5px;">Hello World!</div>', //  인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능하다.
      iwRemoveable = true;  //  removeable 속성을 true 로 설정하면 인포윈도우를 담을 수 있는 x버튼이 표시된다.
    
    //  인포윈도우를 생성한다.
    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable
    });

    //  마커에 클릭이벤트 등록
    kakao.maps.event.addListener(marker, 'click', function () {
      //  마커 위에 인포윈도우를 표시
      infowindow.open(kakaoMap, marker);
    });
  }, [])

  return (
    <div id="map"></div>
  );
};

export default Map;