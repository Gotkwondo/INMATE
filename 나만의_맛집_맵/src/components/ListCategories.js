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