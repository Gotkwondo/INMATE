const ListItem = ({ list, onSelectLocation, style }) => {
  return (
    //  onClick을 사용할 때는 항상 함수 타입이 주어져야 된다.
    <li onClick={() => onSelectLocation(list.id)} style={style}>
      <div className='list_area'>
        <em className='name'>{list.name}</em>
        <div className='list'>
          <p className='kind'>{list.adress}</p>
          <p>{list.phone}</p>
        </div>
      </div>
    </li>
  );
};

export default ListItem;