import { handleActions } from 'redux-actions';

const SELECT_LOCATION = 'setCenter/SELECT_LOCATION';
const SELECT_LOCATION_SECCESS = 'setCenter/SELECT_LOCATION_SECCESS';
const SELECT_LOCATION_FAILURE = 'setCenter/SELECT_LOCATION_FAILURE';

export const selectLocationAsync = id => async dispatch => {
  dispatch({ type: SELECT_LOCATION }); //  요청을 시작한 것을 알림
  try {
    // const response = await api.getPost(id);
    dispatch({
      type: SELECT_LOCATION_SECCESS,
      payload: id
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
  infos: [
    {
      latlng: [37.443014, 126.708708],
      name: '요리야 김밥',
      adress: "인천시 남동구 인하로 559",
      id: 1,
    },
    {
      latlng: [37.442971, 126.708892],
      name: '서오릉 피자',
      adress: "인천시 남동구 인하로 559",
      id: 2,
    },
    {
      latlng: [37.413328, 126.678618],
      name: '그시절 동태탕',
      adress: "인천시 연수구 샘말로 37-8",
      id: 3,
    },
  ],
  centerLoca: {
    // selectID: 0,
    latlng: [null]
  }
};
  

const setCenter = handleActions(
  {
    // [SELECT_LOCATION]: (state, { payload: id }) => {
    //   const index = state.infos.findIndex(info => info.id === id);
    //   state.centerLoca.latlng = state.infos[index].latlng;
    //   state.centerLoca.selectID = index + 1;
    //   return state;
    // },
    [SELECT_LOCATION]: (state, action) => ({
      ...state,
    }),
    [SELECT_LOCATION_SECCESS]: (state, action) => ({
      ...state,
      centerLoca: {
        latlng: [...state.infos[action.payload-1].latlng],
      }
    }),
  },
  initialState
);

export default setCenter;