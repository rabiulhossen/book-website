import React from 'react';
import Book from '../Books/Book';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Cards = ({bookData}) => {
    // console.log(props.bookData)
    const {name,image,price} =bookData;
    console.log(name);
    return (
        <div>
          <div className='img-container'> <img src={image} alt="" /></div>
            <h1>{name}</h1>
            <h2>Price:{price}</h2>
            <button> Add to Cart <BsFillCartPlusFill/> </button>
        </div>
    );
};

export default Cards;