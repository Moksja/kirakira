import React from 'react';
import '../styles/Cart.css';
import { objectsList } from '../datas/objectList';

function Cart() {

  let sum = 0;
  
  objectsList.forEach(element => {
      sum += element.price;
    });
  
    return (
        <div className='cart'>
          <div className='cartOpacity'>
            <div className='cartText'>
              <h2 className='itemTitle'>Panier</h2>
              <ul className='cartList'>
                    {objectsList.map((element, index) => (
                    <li key={index}>
                        {element.name}: {element.price} € {element.bestseller && <span>✨</span>} {element.sale && <span>💸</span>}
                    </li>
                    ))}
                </ul>
              <h3 className='itemSubtitle'>Total: {sum} €</h3>
            </div>
          </div>
        </div>
    );
  }

  export default Cart