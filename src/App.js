import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Bestdeal from './components/deals/BestDeal';
import Footer from './components/footer/Footer';
import Menu from './components/menus/Menu';
import Navbar from './components/navbar/Navbar';
import Offers from './components/Offers';
import Topproducts from './components/products/TopProducts';
import Services from './components/services/Services';
import Userlogin from './components/Users/UserLogin';
import Usersignup from './components/Users/UserSignUp';
import Cart from './components/mycart/Cart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Menu />
          <h1 className="text-center" style={{textAlign: "center", margin: "10px auto"}}>Hot Offers</h1>
          <Offers />
          <h1 className="text-center" style={{textAlign: "center", margin: "20px auto"}}>Top Products</h1>
          <Topproducts />
          <Footer />
        </Route>
        <Route exact path="/events">
          <About />
        </Route>
        <Route exact path="/about">
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route exact path="/deals">
          <Navbar />
          <Menu />
          <Bestdeal />
          <Footer />
        </Route>
        <Route exact path="/services">
          <Navbar />
          <Services />
          <Footer />
        </Route>
        <Route exact path="/login">
          <Navbar />
          <Userlogin />
        </Route>
        <Route exact path="/register">
          <Navbar />
          <Usersignup />
        </Route>
        <Route exact path="/cart">
          <Navbar />
          <Cart />
        </Route>
        <Route>
          <h1 className="text-center">Opps! something wrong</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
