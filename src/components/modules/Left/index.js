import './left.scss';
import ListCategories from './ListCategories';

const Left = ({ list, selectLocationAsync }) => {
  return (
    <div className="left">
      <ListCategories
        list={list}
        onSelectLocation={selectLocationAsync}
      />
    </div>
  );
};

export default Left;