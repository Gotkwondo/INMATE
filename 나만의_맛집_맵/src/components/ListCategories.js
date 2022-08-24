import { List, AutoSizer } from 'react-virtualized';
import { useCallback } from 'react';

const ListItem = ({ info, onSelectLocation, style }) => {
  return (
    //  onClick을 사용할 때는 항상 함수 타입이 주어져야 된다.
    <li onClick={() => onSelectLocation(info.id)} style={style}>
      <em className='name'>{info.name}</em>
      {/* <br /> */}
      <p className='kind'>{info.adress}</p>
      <p>{info.phone}</p>
    </li>
  );
};


const ListCategories = ({ onSelectLocation, infos }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const info = infos[index];
      return (
        <ListItem
          onSelectLocation={onSelectLocation}
          info={info}
          key={key}
          style={style}
        />
      )
    },[onSelectLocation, infos]
  )


  return (
    <div className="left-innerWrapper" style={{width:"100%", height:"80vh"}}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            className="list"
            width={width}   //  전체 크기
            height={height}  //  전체 높이
            rowCount={infos.length} //  항목 개수
            rowHeight={150}  //  항목 높이
            rowRenderer={rowRenderer} //  항목을 렌더링할 때 쓰는 함수
            list={infos}  //  배열
            style={{ outline: 'none' }} //  List에 기본 적용되는 outline 스타일 제거
          ></List>
        )}
        
      </AutoSizer>
      {/* <ul>
        {infos.map(info => (
          <ListItem
            onSelectLocation={onSelectLocation}
            info={info}
            key={info.id}
          />
        ))}
      </ul> */}
    </div>
  );
};

export default ListCategories;