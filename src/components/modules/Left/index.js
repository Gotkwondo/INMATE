import './left.scss';
import ListCategories from './ListCategories';

const Left = ({ infos, selectLocationAsync }) => {
  return (
    <div className="left">
      <ListCategories
        infos={infos}
        onSelectLocation={selectLocationAsync}
      />
    </div>
  );
};

export default Left;