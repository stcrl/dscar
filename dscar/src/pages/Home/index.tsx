import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import BtnHome from 'components/BtnHome';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>

            <h4>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </h4>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <div className="bbottom-container">
          <Link to="/products">
            <BtnHome />
          </Link>
          <h5>Comece agora a navegar</h5>
        </div>
      </div>
    </>
  );
};
export default Home;
