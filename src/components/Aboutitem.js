import React from 'react';
import { Link } from 'react-router-dom';

function Aboutitem(props) {
  return (
    <>
      <li className='cards__item'>
          <div className='cards__item__info'>
            <h1 className='cards_item_text'>{props.label}</h1>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
      </li>
    </>
  )
}

export default Aboutitem;
