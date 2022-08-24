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
      adress: '인천시 남동구 인하로 559',
      id: 1,
      phone: '0507-1409-9431'
    },
    {
      latlng: [37.442971, 126.708892],
      name: '서오릉 피자 구월점',
      adress: '인천시 남동구 인하로 559',
      id: 2,
      phone: '0507-1342-6576'
    },
    {
      latlng: [37.413328, 126.678618],
      name: '그시절 동태촌',
      adress: '인천시 연수구 샘말로 37-8',
      id: 3,
      phone: '0507-1404-9932'
    },
    {
      latlng: [37.4683, 126.6509],
      name: '오목골 즉석메밀우동',
      adress: '인천 미추홀구 석정로 142 오목골즉석메밀우동',
      id: 4,
      phone: '032-868-1717'
    },
    {
      latlng: [37.4075, 126.6723],
      name: '로스타임',
      adress: '인천 연수구 앵고개로 260 맘모스빌딩',
      id: 5,
      phone: '032-815-1025'
    },
    {
      latlng: [37.4075, 126.6723],
      name: '로스타임',
      adress: '인천 연수구 앵고개로 260 맘모스빌딩',
      id: 5,
      phone: '032-815-1025'
    },
    {
      latlng: [37.4075, 126.6723],
      name: '로스타임',
      adress: '인천 연수구 앵고개로 260 맘모스빌딩',
      id: 5,
      phone: '032-815-1025'
    },
    {
      latlng: [37.4075, 126.6723],
      name: '로스타임',
      adress: '인천 연수구 앵고개로 260 맘모스빌딩',
      id: 5,
      phone: '032-815-1025'
    },
    {
      latlng: [37.4075, 126.6723],
      name: '로스타임',
      adress: '인천 연수구 앵고개로 260 맘모스빌딩',
      id: 5,
      phone: '032-815-1025'
    },
    {
      latlng: [37.4075, 126.6723],
      name: '로스타임',
      adress: '인천 연수구 앵고개로 260 맘모스빌딩',
      id: 5,
      phone: '032-815-1025'
    },
    // {
    //   latlng: [],
    //   name: '',
    //   adress: '',
    //   id: 6,
    //   phone: ''
    // },
    // {
    //   latlng: [],
    //   name: '',
    //   adress: '',
    //   id: 7,
    //   phone: ''
    // },
  ],
  centerLoca: {
    // selectID: 0,
    latlng: 0
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