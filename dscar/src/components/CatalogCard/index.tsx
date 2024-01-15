import { ReactComponent as MainImage } from 'assets/images/car-card.svg';
import './styles.css';
import { Link } from 'react-router-dom';
const CatalogCard = () => {
  return (
    <>
      <div className="catalog-card">
        <Link to="/comprar">
          <button className="catalog-content-bottom-button">COMPRAR</button>
        </Link>
        <div className="catalog-content-container">
          <h1>Audi Supra TT</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, Cupiditate
            nisi
          </h5>
        </div>
        <div className="catalog-image-container">
          <MainImage />
        </div>
      </div>
    </>
  );
};
export default CatalogCard;
