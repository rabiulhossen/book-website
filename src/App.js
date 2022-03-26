import logo from './logo.svg';
import './App.css';
import Book from './Books/Book';
import { useState } from 'react';
import { useEffect } from 'react';
import Cards from './Cards/card';

function App() {
  const [books,setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    fetch ("data.json")
    .then(res => res.json())
    .then((data) => setBooks(data))
  },[])
  return (
    <div className="App">
  
      <Book></Book>
     
      {
     books.map((book )=> (
      <div className='card-container'>
        <Cards key={book.id} bookData={book}> 
        </Cards>
      </div> ))
   }
    </div>
   
  );
}

export default App;
