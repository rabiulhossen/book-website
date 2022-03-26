import logo from './logo.svg';
import './App.css';
import Book from './Books/Book';
import { useState } from 'react';
import { useEffect } from 'react';
import Cards from './Cards/card';

function App() {
  const [books,setBooks] = useState([]);
  const [cart,setCarts] = useState([]);
  console.log(cart);
  const cartButton =(book) => {
    const newCart = [...cart,book];
    
    setCarts(newCart);
}
 
  useEffect(() => {
    fetch ("data.json")
    .then(res => res.json())
    .then((data) => setBooks(data))
  },[])
  return (
    <div className="App">
  
      <Book></Book> 
      {
        cart.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))};
        {
     books.map((book ) => (
      <div className='card-container'>
        <Cards key={book.id} bookData={book} cartButton={cartButton}> 
        </Cards>
      </div> ))
   }
    </div>
   
  );
}

export default App;
