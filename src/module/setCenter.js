import { handleActions } from 'redux-actions';

const SELECT_LOCATION = 'setCenter/SELECT_LOCATION';
const SELECT_LOCATION_SECCESS = 'setCenter/SELECT_LOCATION_SECCESS';
const SELECT_LOCATION_FAILURE = 'setCenter/SELECT_LOCATION_FAILURE';

export const selectLocationAsync = (lat, lng) => async dispatch => {
  dispatch({ type: SELECT_LOCATION }); //  요청을 시작한 것을 알림
  try {
    dispatch({
      type: SELECT_LOCATION_SECCESS,
      payload: {
        lat: lat,
        lng: lng
      }
    }); //  요청 성공
  }
  catch (e) {
    dispatch({
      type: SELECT_LOCATION_FAILURE,
      payload: e,
      error: true
    }); //  에러 발생
    throw e;  //  나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
  }
};

const initialState = {
  centerLoca: {
    lat: 0,
    lng: 0
  }
};
  

const setCenter = handleActions(
  {
    [SELECT_LOCATION]: (state, action) => ({
      ...state,
    }),
    [SELECT_LOCATION_SECCESS]: (state, action) => ({
      ...state,
      centerLoca: {
        lat: action.payload.lat,
        lng: action.payload.lng
      }
    }),
  },
  initialState
);

export default setCenter;