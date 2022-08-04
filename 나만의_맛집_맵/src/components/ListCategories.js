const testArr = [
  {
    // latlng: new kakao.maps.LatLng(37.443014, 126.708708),
    name: '요리야 김밥',
    adress: "인천시 남동구 인하로 559",
    kind: '한식',
    id: 1,
    show: false
  },
  {
    // latlng: new kakao.maps.LatLng(37.442971, 126.708892),
    name: '서오릉 피자',
    adress: "인천시 남동구 인하로 559",
    kind: '피자',
    id: 2,
    show: false
  },
  {
    // latlng: new kakao.maps.LatLng(37.413328, 126.678618),
    name: '그 시절 동태촌',
    adress: "인천시 연수구 샘말로 37-8", 
    kind: '한식',
    id: 3,
    show: false
  },
];

const ListItem = ({ locaInfo, onSelectLocation }) => {
  return (
    <li onClick={onSelectLocation(locaInfo.id)}>
      <span className='name'>{locaInfo.name}</span>
      <br />
      <span className='kind'>{locaInfo.kind}</span>
    </li>
  );
};


const ListCategories = ({ onSelectLocation, locaInfo }) => {
  return (
    <ul>
      {testArr.map(list => (
        <ListItem
          onSelectLocation={onSelectLocation}
          locaInfo={locaInfo}
          key={list.id}
        />
      ))}
    </ul>
  );
};

export default ListCategories;