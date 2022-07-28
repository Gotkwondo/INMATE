/* global kakao */
import React, { useEffect } from 'react';

const { kakao } = window;

const Map = () => {
  //처음 지도 그리기  
  useEffect(() => {

    const container = document.getElementById('map');
    const mapOptions = {
      //  geolocation이 작동하지 않을때 표시할 중심 좌표
      center: new kakao.maps.LatLng(37.443014, 126.708708),  //  geo.lat, geo.lng 형식으로 할까?
      level: 3,
    };
    //  지도 생성
    const kakaoMap = new kakao.maps.Map(container, mapOptions);

    //  현제 위치 렌더링에 필요한 좌표
    
    if (navigator.geolocation) {
      const onGeoOk = (position) => {
        const currentLat = position.coords.latitude;
        const currentLng = position.coords.longitude;
        
        //  마커 표시 좌표와 표시할 메시지
        const locPosition = new kakao.maps.LatLng(currentLat, currentLng);
        const message = `<div>현재 위치</div>`;
        
        kakaoMap.setCenter(locPosition);
      };
      const onGeoError = () => {
        alert("위치권한을 다시 확인해주세요ㅠㅠ");
      };
      navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    };

    

    //  지도상에 표시할 가게들의 정보
    const position = [
      {
        latlng: new kakao.maps.LatLng(37.443014, 126.708708),
        name: '요리야 김밥',
        adress: "인천시 남동구 인하로 559",
        id: 1,
        show: false
      },
      {
        latlng: new kakao.maps.LatLng(37.442971, 126.708892),
        name: '서오릉 피자',
        adress: "인천시 남동구 인하로 559",
        id: 2,
        show: false
      },
      {
        latlng: new kakao.maps.LatLng(37.413328, 126.678618),
        name: '그 시절 동태촌',
        adress: "인천시 연수구 샘말로 37-8",
        id: 3,
        show: false
      },
    ];

    //  마커에 사용될 이미지와 그 이미지의 사이즈 선언
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png" // 마커이미지의 주소입니다
    const imageSize = new kakao.maps.Size(24, 35);


    //  position의 길이만큼 마커를 생성
    for (let i = 0; i < position.length; i++) {
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      //  오버레이 레이아웃
      const content = `<div class="wrap">` +
                      `    <div class="info">` + 
                      `        <div class="title">` + 
                      `            ${position[i].name}` + 
                      `        </div>` + 
                      `        <div class="body">` + 
                      `            <div class="img">` +
                      `                <img src="" width="73" height="70">` +
                      `           </div>` + 
                      `            <div class="desc">` + 
                      `                <div class="ellipsis">주소 : ${position[i].adress}</div>` + 
                      `            </div>` + 
                      `        </div>` + 
                      `    </div>` +    
                      `</div>`;

      const marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: position[i].latlng,
        clickable: true, //  마커를 클릭했을 때 지도의 클릭 이벤트 발생 방지
        image: markerImage
      });

      let customOverlay = new kakao.maps.CustomOverlay({
        position: position[i].latlng,
        content: content,
      });

      kakao.maps.event.addListener(marker, 'mouseover', () => {
        customOverlay.setMap(kakaoMap);
      });

      kakao.maps.event.addListener(marker, 'mouseout', () => {
        setTimeout(() => {
          customOverlay.setMap();
        }, 100);
      });
      
      //  지도위에 마커 생성
      marker.setMap(kakaoMap);
    };
    
  }, []);
  return (
    <>
      <div id="map"></div>
    </>
  );
};

export default Map;