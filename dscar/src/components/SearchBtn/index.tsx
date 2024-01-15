import { Link } from 'react-router-dom';
import './styles.css';
const SearchBtn = () => {
  return (
    <>
      <div className="searchbtn-container">
        <div className="input-group">
          <input
            type="search"
            id="bp1"
            className="form-control rounded"
            placeholder="Digite a sua busca"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <Link to="/buscar">
            <button
              type="button"
              id="bp2"
              className="btn  data-mdb-ripple-init"
            >
              BUSCAR
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default SearchBtn;
