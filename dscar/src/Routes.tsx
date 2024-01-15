import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Busca from 'pages/Busca';
import CashOut from 'pages/CashOut';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route>
      <Route path="/buscar">
        <Busca />
      </Route>
      <Route path="/comprar">
        <CashOut />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
