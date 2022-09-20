import { List, AutoSizer } from 'react-virtualized';
import { useCallback } from 'react';
import ListItem from './ListItem';

const ListCategories = ({ onSelectLocation, lists }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const list = lists[index];
      return (
        <ListItem
          onSelectLocation={onSelectLocation}
          list={list}
          key={key}
          style={style}
        />
      );
    }, [onSelectLocation, lists]
  );

  return (
    <div className="left-innerWrapper" style={{ width: "100%", height: "80vh" }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            className="list"
            width={width}   //  전체 크기
            height={height}  //  전체 높이
            rowCount={lists.length} //  항목 개수
            rowHeight={150}  //  항목 높이
            rowRenderer={rowRenderer} //  항목을 렌더링할 때 쓰는 함수
            list={lists}  //  배열
          ></List>
        )}
      </AutoSizer>
    </div>
  );
};

export default ListCategories;