import './left.scss';
import ListCategories from './ListCategories';

const Left = ({ lists, selectLocationAsync }) => {
  return (
    <div className="left">
      <ListCategories
        lists={lists}
        onSelectLocation={selectLocationAsync}
      />
    </div>
  );
};

export default Left;