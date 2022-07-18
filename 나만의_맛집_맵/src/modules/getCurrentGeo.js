//  이후 redux를 이용해 현제 위치를 불러오는 액션을 관리
import { createAction, handleActions } from 'redux-actions';  //

let currentLat = 1;
let currentLng = 1;

const onGeoOk = (position) => {
  currentLat = position.coords.latitude;
  currentLng = position.coords.longitude;
  return { currentLat, currentLng };
}
const onGeoError = () => {
  alert("위치권한을 다시 확인해주세요ㅠㅠ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//  액션 타입
const GET_CURRENT_GEO = `mapMarkers/GET_CURRENT_GEO`;

//  액션 생성 함수
// export const getCurrentGeo = createAction(GET_CURRENT_GEO);

//  Thunk생성 함수
export const getCurrentGeoAsync = () => dispatch => {
  dispatch({ type: GET_CURRENT_GEO });
  
};

const initialState = {
  lat: 37.443014,
  lng: 126.708708
};

const getgeo = handleActions(
  {
    [GET_CURRENT_GEO]: state => ({
      ...state,
      lat: currentLat,
      lng: currentLng
    })
  },
  initialState
);

export default getgeo;