/* global kakao */
import React, { useEffect, useRef, useState } from 'react';

const Map = ({ list, centerLoca }) => {
  //

  const [kakaoMap, setKakaoMap] = useState(null);

  const container = document.getElementById("map");
  
  //지도 그리기
  useEffect(() => {
    const center = new kakao.maps.LatLng(37.50802, 127.062835);
    const options = {
      center: center,
      level: 3
    };
    const map = new kakao.maps.Map(container.current, options);
    //  현재위치
    if (navigator.geolocation) {
      const onGeoOk = (position) => {
        const currentLat = position.coords.latitude;
        const currentLng = position.coords.longitude;
        const locPosition = new kakao.maps.LatLng(currentLat, currentLng);
        map.setCenter(locPosition);
      };
      const onGeoError = () => {
        alert("위치권한을 다시 확인해주세요ㅠㅠ");
      };
      navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    };
    setKakaoMap(map);
  }, [container]);

  //  마커 생성 및 오버레이 생성
  useEffect(() => {

    if (kakaoMap === null) {
      return;
    }
    list.forEach(info => {
      const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png" // 마커이미지의 주소입니다
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      //  마커 생성
      const marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(info.lat, info.lng),
        clickable: true, //  마커를 클릭했을 때 지도의 클릭 이벤트 발생 방지
        image: markerImage
      });

      //  오버레이에서 보여지는 형태
      const content = `<div class="wrap">` +
        `    <div class="info">` +
        `        <div class="title">` +
        `            ${info.name}` +
        `        </div>` +
        `        <div class="body">` +
        `            <div class="desc">` +
        `                <p class="ellipsis">주소 : ${info.adress}</p>` +
        `                <p class="ellipsis">전화번호 : ${info.number ? info.number : '없음'}</p>` +
        `            </div>` +
        `        </div>` +
        `    </div>` +
        `</div>`;
      //  커스텀 오버레이
      let customOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(info.lat, info.lng),
        content: content,
      });
      //  오버레이 생성과 제거(마우스 호버 여부)
      kakao.maps.event.addListener(marker, 'mouseover', () => {
        customOverlay.setMap(kakaoMap);
      });
      kakao.maps.event.addListener(marker, 'mouseout', () => {
        setTimeout(() => {
          customOverlay.setMap(null);
        }, 100);
      });
    });

    const bounds = new kakao.maps.LatLngBounds();
    if (centerLoca.lat !== 0 && centerLoca.lat !== 0) {
      bounds.extend(new kakao.maps.LatLng(centerLoca.lat, centerLoca.lng));
      kakaoMap.setBounds(bounds);
    }
  }, [kakaoMap, list, centerLoca]);
  return (
    <>
      <div id="map"></div>
    </>
  );
};

export default Map;