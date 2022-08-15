/* global kakao */
import React, { useEffect, useRef } from 'react';

const { kakao } = window;

const Map = ({ infos, centerLoca }) => {
  const container = useRef();
  //처음 지도 그리기
  useEffect(() => {
    const mapOptions = {
      //  geolocation이 작동하지 않을때 표시할 중심 좌표
      center: new kakao.maps.LatLng(37.443014, 126.708708),  //  geo.lat, geo.lng 형식으로 할까?
      level: 3,
    };
    //  지도 생성
    const kakaoMap = new kakao.maps.Map(container.current, mapOptions);
    //  현제 위치 렌더링에 필요한 좌표
    if (navigator.geolocation) {
      const onGeoOk = (position) => {
        const currentLat = position.coords.latitude;
        const currentLng = position.coords.longitude;
        const locPosition = new kakao.maps.LatLng(currentLat, currentLng);
        kakaoMap.setCenter(locPosition);
      };
      const onGeoError = () => {
        alert("위치권한을 다시 확인해주세요ㅠㅠ");
      };
      navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    };
    
    //  마커에 사용될 이미지와 그 이미지의 사이즈 선언
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png" // 마커이미지의 주소입니다
    const imageSize = new kakao.maps.Size(24, 35);
    infos.forEach(info => {
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      const content = `<div class="wrap">` +
                      `    <div class="info">` + 
                      `        <div class="title">` + 
                      `            ${info.name}` + 
                      `        </div>` + 
                      `        <div class="body">` + 
                      `            <div class="img">` +
                      `                <img src="" width="73" height="70">` +
                      `           </div>` + 
                      `            <div class="desc">` + 
                      `                <div class="ellipsis">주소 : ${info.adress}</div>` + 
                      `            </div>` + 
                      `        </div>` + 
                      `    </div>` +    
                      `</div>`;

      const marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(...info.latlng),
        clickable: true, //  마커를 클릭했을 때 지도의 클릭 이벤트 발생 방지
        image: markerImage
      });

      let customOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(...info.latlng),
        content: content,
      });

      kakao.maps.event.addListener(marker, 'mouseover', () => {
        customOverlay.setMap(kakaoMap);
      });

      kakao.maps.event.addListener(marker, 'mouseout', () => {
        setTimeout(() => {
          customOverlay.setMap(null);
        }, 100);
      });
    });
  }, []);
  return (
    <>
      <div id="map" ref={container}></div>
    </>
  );
};

export default Map;