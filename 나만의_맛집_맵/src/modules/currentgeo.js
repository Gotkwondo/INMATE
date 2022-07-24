import { handleActions } from 'redux-actions';

let currentLat = 0;
let currentLng = 0;

const onGeoOk = (position) => {
  currentLat = position.coords.latitude;
  currentLng = position.coords.longitude;
};
const onGeoError = () => {
  alert("위치권한을 다시 확인해주세요ㅠㅠ");
};

//useEffect로 navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
//위의 동작을 처리해야 하나? 일단 밥부터

const GET_GEO = 'currentgeo/GET_GEO';
const GET_GEO_SUCCESS = 'currentgeo/GET_GEO_SUCCESS';
const GET_GEO_FAILURE = 'currentgeo/GET_GEO_FAILURE';

export const getGeo = () => dispatch => {
  dispatch({ type: GET_GEO });
  try {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    console.log(currentLat, currentLng);
    dispatch({
      type: GET_GEO_SUCCESS,
      payload: {lat: currentLat, lng: currentLng}
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

const initialState = [
  {
    latlng: new kakao.maps.LatLng(37.443014, 126.708708),
    name: '요리야 김밥',
    id: 1,
    show: false
  },
  {
    latlng: new kakao.maps.LatLng(37.442971, 126.708892),
    name: '서오릉 피자',
    id: 2,
    show: false
  },
  {
    latlng: new kakao.maps.LatLng(37.413328, 126.678618),
    name: '그시절 동태탕',
    id: 3,
    show: false
  },
];

const currentgeo = handleActions(
  {
    [GET_GEO]: state => ({
      ...state
    }),
    [GET_GEO_SUCCESS]: (state, action) => ({
      ...state,
      geo: action.payload
    }),
    [GET_GEO_FAILURE]: state => ({
      ...state
    }),
  },
  initialState
);

export default currentgeo;