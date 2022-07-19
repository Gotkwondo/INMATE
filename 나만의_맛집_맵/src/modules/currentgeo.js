import { handleActions } from 'redux-actions';

const onGeoOk = (position) => {
  const currentLat = position.coords.latitude;
  const currentLng = position.coords.longitude;
  return { currentLat, currentLng };  //  이게 반환됨
}
const onGeoError = () => {
  alert("위치권한을 다시 확인해주세요ㅠㅠ");
}

const GET_GEO = 'currentgeo/GET_GEO';
const GET_GEO_SUCCESS = 'currentgeo/GET_GEO_SUCCESS';
const GET_GEO_FAILURE = 'currentgeo/GET_GEO_FAILURE';

export const getGeo = () => dispatch => {
  dispatch({ type: GET_GEO });
  try {
    const response = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    dispatch({
      type: GET_GEO_SUCCESS,
      payload: response
    }); //  요청 성공
  }
  catch (e) {
    dispatch({
      type: GET_GEO_FAILURE,
      payload: e,
      error: true
    }); //  에러 발생
    throw e;
  }
};

const initialState = {
  lat: 37.443014,
  lng: 126.708708
};

const currentgeo = handleActions(
  {
    [GET_GEO]: state => ({
      ...state
    }),
    [GET_GEO_SUCCESS]: (state, action) => ({
      ...state,
      lat: action.payload.currentLat,
      lng: action.payload.currentLng
    }),
    [GET_GEO_FAILURE]: state => ({
      ...state
    }),
  },
  initialState
);

export default currentgeo;