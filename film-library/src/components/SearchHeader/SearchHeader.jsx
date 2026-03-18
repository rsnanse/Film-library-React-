import Headling from '../Headling/Headling';
import Paragraph from '../Paragraph/Paragraph';
import './SearchHeader.css';

function SearchHeader() {
  return (
    <>
      <div className="searchHeader-wrapper">
        <Headling></Headling>
        <Paragraph></Paragraph>
      </div>
    </>
  );
}

export default SearchHeader;
