import logo from './logo.svg';
import './App.css';
import LoginFunctionComponent from './Pages/Login/LoginFunctionComponent';
import RegisterFunctionComponent from './Pages/Register/RegisterFunctionComponent';
import { BrowserRouter, Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ListProductFunctionComponent from './Pages/ListProduct/ListProductFunctionComponent';
import NavBarComponent from './Components/NavBarComponent';
import ProductDetailsFunction from './Pages/ProductDetails/ProductDetailsFunction';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'icofont/dist/icofont.css';
import ProductSearchComponent from './Pages/ProductSearch/ProductSearchComponent';
import FooterClassCom from './Components/FooterClassCom';
import HomeFunctionComponent from './Pages/Home/HomeFunctionComponent';
import ProductsOfCategory from './Pages/ProductsOfCategory/ProductsOfCategory';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBarComponent />
    <Switch>
      <Route exact path={'/'} component={HomeFunctionComponent} />
      <Route exact path={'/login'} component={LoginFunctionComponent}/>
      <Route exact path={'/register'} component={RegisterFunctionComponent}/>
      <Route exact path={'/products'} component={ListProductFunctionComponent} />
      <Route exact path={'/productdetails/:productId'} component={ProductDetailsFunction} />
      <Route exact path={'/products/:productName'} component={ProductSearchComponent} />
      <Route exact path={'/categoey/:categoryName'} component={ProductsOfCategory} />
    </Switch>
    <FooterClassCom />
    </BrowserRouter>
    </>
  );
}

export default App;
