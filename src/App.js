import './App.css';
import { Routes, Route, useLocation  } from 'react-router-dom';
import Nav from './Nav';
//import Header from './Header';
import Main from './Main';
import Footer from './Footer';
 
//import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

import OrderOnline from './OrderOnline';
import Reservations from './Reservations';
import Menu from './Menu';

const App = () => {
  const location = useLocation();

  return(
    <div className="App">
        <Nav/>
        <div className='routesButtons'>
          <Routes>
            <Route path="/home" element={<Main />} />
             <Route path="/" element={<Main />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/orderonline" element={<OrderOnline />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<Specials />} />
            <Route path="/contact" element={<CustomersSay />} />
            <Route path="/login" element={<Chicago />} />
            
          </Routes>
                {location.pathname !== "/booking" && <Footer />}
        </div>
        
      

    
    
    </div>
  );
}

export default App;
