import React from 'react';
import restauranfood from './icons_assets/restauranfood.jpg';
import greeksalad from './icons_assets/greek_salad.jpg';
import lemondessert from './icons_assets/lemon_dessert.jpg';
import bruchetta from './icons_assets/bruchetta.jpg';
import deliveryicon from './icons_assets/deliveryicon.png';



const Main = () => {
  return (
    <main>
  <div className="main-title-row">
    <div className="main-title">
      <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="main-button">Reserve a Table</button>
    </div>
    <img src={restauranfood} alt="Restaurant Food" width={250} height={300} />
  </div>
 
  <div className="contain-specials">
    <div className="specials-section">
      <h1>This weeks specials!</h1>
      <button>Online Menu</button>
    </div>

    <div className='specials'>

    <div className="first-special">
      <img src={greeksalad} alt="Greek Salad" width={250} height={250} />
      <div className="first-special-text">
        <h2>Greek Salad</h2>
        <h2 class="h2C">$12.99</h2>
      </div>  
      <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
      <a className="orderonlinebutton" href="/orderonline" >Order a delivery <img src={deliveryicon} alt="Delivery Icon" height={15} width={15} style={{marginLeft:10}} /></a>

  </div>
    <div className="second-special">
      <img src={bruchetta} alt="Bruschetta" width={250} height={250} />
      <div className="second-special-text">
         <h2>Bruschetta</h2>
        <h2 class="h2C">$5.99</h2>
      </div>
      <p> Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
      <a className="orderonlinebutton" href="/orderonline"  >Order a delivery <img src={deliveryicon} alt="Delivery Icon" height={15} width={15} style={{marginLeft:10}} /></a>

    </div>
    <div className="third-special">
      <img src={lemondessert} alt="Lemon Dessert" width={250} height={250} />
      <div className="third-special-text">
        <h2>Lemon Dessert</h2>
        <h2 class="h2C">$6.99</h2>
        
      </div>
      <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
      <a className="orderonlinebutton" href="/orderonline" >Order a delivery <img src={deliveryicon} alt="Delivery Icon" height={15} width={15} style={{marginLeft:10}} /></a>
    </div>
  </div>

  </div>
  </main>
  );
}
export default Main;