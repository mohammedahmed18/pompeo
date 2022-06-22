import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Aboutpage from './pages/aboutpage';
import Contactpage from './pages/contactpage';
import Homepage from './pages/homepage';
import Productpage from './pages/productpage';
import Shoppage from './pages/shoppage';
import CategoryProducts from './pages/categoryproducts';
import Checkout from './pages/checkoutpage';
import Cart from './components/cart/cart';
import Shop from './components/shop/shop';

function App() {

  return (
    <BrowserRouter>
    
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/shop' element={<Shoppage />} />
          <Route exact path='/about' element={<Aboutpage />} />
          <Route exact path='/contact' element={<Contactpage />} />
          <Route exact path='/category/:category/' element={<CategoryProducts />} />
       


          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/product/:id/' element={<Productpage />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
