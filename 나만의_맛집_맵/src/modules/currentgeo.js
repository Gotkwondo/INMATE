import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';


const CHANGE_CENTER = 'currentgeo/CHANGE_CENTER';
// const GET_GEO_SUCCESS = 'currentgeo/GET_GEO_SUCCESS';
// const GET_GEO_FAILURE = 'currentgeo/GET_GEO_FAILURE';

export const getGeo = () => dispatch => {
  // dispatch({
  //   type: CHANGE_INPUT,
  //   payload: input
  // });
  // try {
  //   navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  //   console.log(currentLat, currentLng);
  //   // dispatch({
  //   //   type: GET_GEO_SUCCESS,
  //   //   payload: {lat: currentLat, lng: currentLng}
  //   // }); //  요청 성공
  // }
  // catch (e) {
  //   dispatch({
  //     type: GET_GEO_FAILURE,
  //     payload: e,
  //     error: true
  //   }); //  에러 발생
  //   throw e;
  // }
};

//  해당 위치를 잡아주는 액션 함수
export const changeCenter = (id) => dispatch => {
  
}

const initialState = {
  info: [
    {
      latlng: [37.443014, 126.708708],
      name: '요리야 김밥',
      id: 1,
      show: false
    },
    {
      latlng: [37.442971, 126.708892],
      name: '서오릉 피자',
      id: 2,
      show: false
    },
    {
      latlng: [37.413328, 126.678618],
      name: '그시절 동태탕',
      id: 3,
      show: false
    },
  ],
  centerLoca: [0, 0]
};
  

const currentgeo = handleActions(
  {
    // [GET_GEO]: state => ({
    //   ...state
    // }),
    // [GET_GEO_SUCCESS]: (state, action) => ({
    //   ...state,
    //   geo: action.payload
    // }),
    // [GET_GEO_FAILURE]: state => ({
    //   ...state
    // }),
  },
  initialState
);

export default currentgeo;