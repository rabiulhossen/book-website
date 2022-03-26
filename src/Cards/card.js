import React from 'react';
import Books from '../Books/Book';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Cards = ({bookData,cartButton}) => {
    // console.log(props.bookData)
    const {name,image,price} =bookData;
    // console.log(name);
    
    return (
        <div className='first-div'>
          <div className='img-container'> <img src={image} alt="" /></div>
            <h1>{name}</h1>
            <h2>Price:{price}</h2>
            <button onClick={() => cartButton(bookData)}> Add to Cart <BsFillCartPlusFill className='icons'/> </button>
        </div>
    );
};

export default Cards;