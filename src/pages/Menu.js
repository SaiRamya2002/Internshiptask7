import React from 'react';
import './Menu.css'; // Import a separate CSS file for styling

const Menu = () => {
  return (
    <div>
      <header>
        <h1 className="menu-title">Order Your Food</h1>
      </header>
      
      <hr />

      <table className="menu-table">
        <caption>Items Table</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Item</th>
            <th>Cost (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Idli</td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNoM7Qj7t82_DNY28z0Y1s9e3oRsUgOOekw&s" alt="Idli" /></td>
            <td>30</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dosa</td>
            <td><img src="https://5.imimg.com/data5/QU/KO/MY-26933826/masala-dosa-500x500.png" alt="Dosa" /></td>
            <td>50</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Tea</td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWadirf-MTVAo-byvp7iVZHW9dmOmKae_0g&s" alt="Tea" /></td>
            <td>15</td>
          </tr>
        
          <tr>
            <td>4</td>
            <td>Vada</td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMLfggyVfOxIiTyx26luavAspDMyRGZsy8w&s" alt="Vada" /></td>
            <td>25</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Puri</td>
            <td><img src="https://images.pexels.com/photos/8617361/pexels-photo-8617361.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Puri" /></td>
            <td>40</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Lemon Rice</td>
            <td><img src="https://www.cookwithmanali.com/wp-content/uploads/2016/01/South-Indian-Lemon-Rice-Recipe-800x1212.jpg" alt="Lemon Rice" /></td>
            <td>45</td>
          </tr>
        </tbody>
      </table>
      &nbsp;
    </div>
  );
};

export default Menu;
