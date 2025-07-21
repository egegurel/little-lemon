import React from 'react';
import little_lemon from './icons_assets/little_lemon.png';
const Nav = () => {
  return (
    <nav>
      <img id="little-lemon-logo" src={little_lemon} alt="Little Lemon Logo" width={140} height={60} />
      <ul>
        <li><a href="/home" role="button">Homepage</a></li>        
        <li><a href="/about" role="button">About Us</a></li>
        <li><a href="/menu" role="button">Menu</a></li>  
        <li><a href="/reservations" role="button">Reservations</a></li>
        <li><a href="/orderonline" role="button">Order Online</a></li>
        <li><a href="/contact" role="button">Contact Us</a></li>
        <li><a href="/booking" role="button">Booking</a></li>
        <li><a href="/login" role="button">Login</a></li>
      </ul>
    </nav>
  );
}
export default Nav;