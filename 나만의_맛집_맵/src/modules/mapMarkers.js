//  이후 redux를 이용해 상태관리를 하여 식당의 정보들을 해당 파일에서 다루겠음.




import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

//  액션 타입
const CHANGE_INPUT = `mapMarkers/CHANGE_INPUT`;
const INSERT = `mapMarkers/INSERT`;
const REMOVE = `mapMarkers/REMOVE`;

// //  createActions를 사용한 액션 생성 함수
// export const changeInput = createAction(CHANGE_INPUT, input => input);
// let i = 2;
// export const insert = createAction(INSERT, (text, kind, latlng) => ({
//   text,
//   kind,
//   latlng,
//   id: i++
// }));
// export const remove = createAction(REMOVE, id => id);

//  Thunk생성 함수
export const insertAsync = () => dispatch => {
  dispatch(insert());
};
export const removeAsync = () => dispatch => {
  dispatch(remove());
};

const initialState = {
  input: '',
  storeInfos: [
    {
      name: '요리야 김밥',
      kind: "한식",
      latlng: [37.443014, 126.708708],
      id: 1
    },
  ]
};

// //  handleActions를 사용한 리듀서
// const markers = handleActions(
//   {
//     [CHANGE_INPUT]: (state, action) =>
//       produce(state, draft => {
//         draft.input = action.payload;
//       }),
//     [INSERT]: (state, { payload: storeInfo }) =>
//       produce(state, draft => {
//         draft.storeInfos.push(storeInfo);
//       }),
//     [REMOVE]: (state, { payload: id }) =>
//       produce(state, draft => {
//         const index = draft.storeInfos.findIndex(storeInfo => storeInfo.id === id);
//         draft.storeInfos.splice(index, 1);
//       })
//   },
//   initialState,
// )

export default markers;