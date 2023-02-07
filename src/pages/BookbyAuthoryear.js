
import React, { useState, useEffect } from 'react';
import BookByGenre from './BooksbyGenre';
import BookCard from '../componets/BookCard';

const BookbyAuthoryear = () => {
  const [authorYearStart, setAuthorYearStart] = useState(1800);
  const [authorYearEnd, setAuthorYearEnd] = useState(1899);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

// useEffect hook to make API call when component mounts
  useEffect(() => {
    fetch(`https://gutendex.com/books?page=${page}&author_year_start=${authorYearStart}&author_year_end=${authorYearEnd}`)
      .then(response => response.json())
      .then(data => setBooks(data.results))
  }, [page,authorYearStart, authorYearEnd]);

   // event to handle input changes
   const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'authorYearStart') {
      setAuthorYearStart(value);
    } else if (name === 'authorYearEnd') {
      setAuthorYearEnd
      (value);
    }
  };

  
//   const handleLanguageChange = (event) => {
//     setTopic(event.target.value);
    
//     setPage(1);
//   };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

    // sort books by author's year of birth
    books.sort(function (a, b) {
        return a.authors_year_birth - b.authors_year_birth;
      });
    
      return (
        <section className="latest-books bg-light py-5">
        <div className="container d-flex " >
          
            <br/>
            <div className="row">
        
          <h3>Books List</h3>
          <div style={{padding:'20px'}}>
            <label>
              Author's birth year:
              <input
                type="number"
                name="authorYearStart"
                value={authorYearStart}
                onChange={handleChange}
              />
            </label>
            <label>
              Author's death year:
              <input
                type="number"
                name="authorYearEnd"
                value={authorYearEnd}
                onChange={handleChange}
              />
            </label>
          </div>
     
          {books && books.map((book) => <div className="col-lg-3 col-md-4 col-sm-12" key={book.id} >
                <BookCard book={book} />
                
                </div>) }
 
        <div>
  <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between',width:'200px'}}>
      <li onClick={()=>setPage(page=>page-=1)} >
          Preeview
      </li>
      <li onClick={()=>setPage(page=>page+=1)}>
          Next
      </li>


  </ul>

</div>
</div>
</div>
    
</section>
          
  );

};
    

export default BookbyAuthoryear