const testArr = [
  {
    // latlng: new kakao.maps.LatLng(37.443014, 126.708708),
    name: '요리야 김밥',
    kind: '한식',
    id: 1,
    show: false
  },
  {
    // latlng: new kakao.maps.LatLng(37.442971, 126.708892),
    name: '서오릉 피자',
    kind: '피자',
    id: 2,
    show: false
  },
  {
    // latlng: new kakao.maps.LatLng(37.413328, 126.678618),
    name: '그시절 동태탕',
    kind: '한식',
    id: 3,
    show: false
  },
];

const ListItem = ({list}) => {
  return (
    <div>
      <span>{list.id}</span>
      <span>{list.name}</span>
      <br/>
      <span>{list.kind}</span>
      <hr />
    </div>
  );
};

const List = () => {
  return (
    <div>
      {testArr.map(list => (
        <ListItem
          list={list}
          key={list.id}
        />
      ))}
    </div>
  )
}

export default List;