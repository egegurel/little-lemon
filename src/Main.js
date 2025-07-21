import React from 'react';
import restauranfood from './icons_assets/restauranfood.jpg';



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
      <h2>Greek Salad</h2>
  </div>
    <div className="second-special">
      <h2>Bruschetta</h2>
    </div>
    <div className="third-special">
      <h2>Lemon Dessert</h2>
    </div>
  </div>

  </div>
  </main>
  );
}
export default Main;