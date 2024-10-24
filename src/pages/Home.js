import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Tiffin Delight</h1>
        <p>
          At Tiffin Delight, we specialize in providing freshly made, home-cooked meals with love. Our tiffins are healthy, affordable, and perfect for busy individuals looking for delicious homemade food.
        </p>
        <center>
          <a href="/menu" className="cta-button">Explore Our Menu</a>
        </center>
      </header>

      <main className="offerings">
        <div className="offering-item">
          <img 
            src="https://as1.ftcdn.net/v2/jpg/05/33/82/34/1000_F_533823407_h0wVzQub7h3b6OZVWE44BPf5E6SHndxI.jpg" 
            alt="Tiffin 1" 
            className="offering-image" 
          />
        </div>
        <div className="offering-item">
          <img 
            src="https://t3.ftcdn.net/jpg/04/98/56/60/240_F_498566013_NJ6rQuOEFbuA9f5YgSaGzrwZ2E0k9fyL.jpg" 
            alt="Tiffin 2" 
            className="offering-image" 
          />
        </div>
        <div className="offering-item">
          <img 
            src="https://as1.ftcdn.net/v2/jpg/09/32/64/38/1000_F_932643854_4EVpNUSooBQayVxuTtmo0YIIE7O8hKys.jpg" 
            alt="Tiffin 3" 
            className="offering-image" 
          />
        </div>
      </main>
      
    </div>
  );
};

export default Home;

