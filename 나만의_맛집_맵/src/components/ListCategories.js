// const testArr = [
//   {
//     // latlng: new kakao.maps.LatLng(37.443014, 126.708708),
//     name: '요리야 김밥',
//     adress: "인천시 남동구 인하로 559",
//     kind: '한식',
//     id: 1,
//     show: false
//   },
//   {
//     // latlng: new kakao.maps.LatLng(37.442971, 126.708892),
//     name: '서오릉 피자',
//     adress: "인천시 남동구 인하로 559",
//     kind: '피자',
//     id: 2,
//     show: false
//   },
//   {
//     // latlng: new kakao.maps.LatLng(37.413328, 126.678618),
//     name: '그 시절 동태촌',
//     adress: "인천시 연수구 샘말로 37-8", 
//     kind: '한식',
//     id: 3,
//     show: false
//   },
// ];

const ListItem = ({ info, onSelectLocation }) => {
  return (
    //  onClick을 사용할 때는 항상 함수 타입이 주어져야 된다.
    <li onClick={() => onSelectLocation(info.id)}>
      <span className='name'>{info.name}</span>
      <br />
      <span className='kind'>{info.kind}</span>
    </li>
  );
};


const ListCategories = ({ onSelectLocation, infos }) => {
  return (
    <ul>
      {infos.map(info => (
        <ListItem
          onSelectLocation={onSelectLocation}
          info={info}
          key={info.id}
        />
      ))}
    </ul>
  );
};

export default ListCategories;