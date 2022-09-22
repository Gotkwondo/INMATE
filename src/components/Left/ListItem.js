const ListItem = ({ info, onSelectLocation, style }) => {
  return (
    //  onClick을 사용할 때는 항상 함수 타입이 주어져야 된다.
    <li onClick={() => onSelectLocation(info.lat, info.lng)} style={style}>
      <div className='list_area'>
        <em className='name'>{info.name}</em>
        <div className='list'>
          <p className='kind'>{info.adress}</p>
          <p>{info.phone}</p>
        </div>
      </div>
    </li>
  );
};

export default ListItem;