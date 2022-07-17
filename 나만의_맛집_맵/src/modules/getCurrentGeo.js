//  이후 redux를 이용해 현제 위치를 불러오는 액션을 관리
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

let currentLat = 0;
let currentLng = 0;

const onGeoOk = (position) => {
  currentLat = position.coords.latitude;
  currentLng = position.coords.longitude;
}
const onGeoError = () => {
  alert("위치권한을 다시 확인해주세요ㅠㅠ");
}


//  액션 타입
const GET_CURRENT_GEO = `mapMarkers/GET_CURRENT_GEO`;

//  액션 생성 함수
export const getCurrentGeo = createAction(GET_CURRENT_GEO);

//  Thunk생성 함수
export const getCurrentGeoAsync = () => dispatch => {
  dispatch(getCurrentGeo());
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
};

const initialState = {
  geo: { lat: 37.443014, lng: 126.708708 }
};

const getGeo = handleActions(
  {
    [GET_CURRENT_GEO]: state => ({
      geo: {lat: currentLat, lng: currentLng}
    })
  },
  initialState
);

export default getGeo;