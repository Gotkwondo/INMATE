/* global kakao */
import React, { useEffect } from 'react';

const { kakao } = window;

const Map = () => {

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById('map');
    const mapOptions = {
      center: new kakao.maps.LatLng(37.443014, 126.708708),
      level: 3,
    };
    //  지도 생성
    const kakaoMap = new kakao.maps.Map(container, mapOptions);

    //  지도상에 표시할 가게들의 정보
    const position = [
      {
        latlng: new kakao.maps.LatLng(37.443014, 126.708708),
        name: '요리야 김밥',
        kind: "한식",
        id: 1,
        show: false
      }
    ]

    //  마커에 사용될 이미지와 그 이미지의 사이즈 선언
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png" // 마커이미지의 주소입니다
    const imageSize = new kakao.maps.Size(24, 35);

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    };

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(infowindow) {
      return function() {
        infowindow.close();
      };
    }

    //  position의 길이만큼 마커를 생성
    for (let i = 0; i < position.length; i++){
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      const marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: position[i].latlng,
        clickable: true, //  마커를 클릭했을 때 지도의 클릭 이벤트 발생 방지
        image: markerImage
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function() {
        console.log(`click event test`);
        position[i].show = true;  //  show 요소의 불리언으로 유효성 검사를 거친뒤 상세정보 블럭의 상태를 나타내고 없앤다.
        console.log(position[i].show); 
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: position[i].name //  인포윈도우에 해당 가게 이름 표시
      });

      //  마우스를 마커에 호버시 영업점 이름을 infowindow에 표시
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(kakaoMap, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

      //  지도위에 마커 생성
      marker.setMap(kakaoMap);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    // const markerPosition = new kakao.maps.LatLng(37.443014, 126.708708); // 마커가 표시될 위치입니다

    // //  마커 생성
    // const marker = new kakao.maps.Marker({
    //   position: markerPosition,
    //   clickable: true //  마커를 클릭했을 때 지도의 클릭 이벤트 발생 방지
    // });
    // //  지도위에 마커 생성
    // marker.setMap(kakaoMap);

    // //  마커를 클릭시 마커 위에 표시할 인포윈도우 생성
    // const iwContent = '<div style="padding: 5px;">Hello World!</div>', //  인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능하다.
    //   iwRemoveable = true;  //  removeable 속성을 true 로 설정하면 인포윈도우를 담을 수 있는 x버튼이 표시된다.
    
    // //  인포윈도우를 생성한다.
    // const infowindow = new kakao.maps.InfoWindow({
    //   content: iwContent,
    //   removable: iwRemoveable
    // });

    // //  마커에 클릭이벤트 등록
    // kakao.maps.event.addListener(marker, 'click', function () {
    //   //  마커 위에 인포윈도우를 표시
    //   infowindow.open(kakaoMap, marker);
    // });
  }, [])

  return (
    <div id="map"></div>
  );
};

export default Map;

// // 마커 이미지를 생성합니다    여러개 생성
//     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
//     // 마커를 생성합니다
//     var marker = new kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: positions[i].latlng, // 마커를 표시할 위치
//         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//         image : markerImage // 마커 이미지 
//     });