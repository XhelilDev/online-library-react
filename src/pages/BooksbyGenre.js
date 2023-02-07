import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../componets/BookCard';

// function BookByGenre() {
//     const [books, setBooks] = useState([])
//     const [topic, setTopic] = useState('children');
//     const [totalPages, setTotalPages] = useState(0);
//     const[page,setPage]=useState(1)
//     const [hasMore, setHasMore] = useState(true);

 

function BookByGenre() {
  const [topic, setTopic] = useState('children');
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);



  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://gutendex.com/books/?page=${page}&topic=${topic}`);
      const data = await response.json();
      setBooks(data.results);
      console.log(data)
    }
    fetchData();
  }, [page,topic]);

  const handleLanguageChange = (event) => {
    setTopic(event.target.value);
    
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // const handleViewDetails = (bookId) => {
  //   history.push(`/books/${bookId}`);
  // };

  // return (
  //   <div>
  //     <select value={selectedLanguage} onChange={handleLanguageChange}>
  //     <option value="">All</option>
  //       <option value="en">English</option>
  //       <option value="de">German</option>
  //     </select>
  //     {books.length > 0 ? (
  //       <table>
  //         <thead>
  //           <tr>
            
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {books.map((book) => (
  //             <tr key={book.id}>
  //               <td> <BookCard book={book}/></td>
              
             
              
  //             </tr>
              
  //           ))}
  //         </tbody>
  //       </table>
  //     ) : (
  //       <p>No books found</p>
  //     )}
  //     {books.length > 0 && (
  //       <div>
  //         <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
  //           Previous
  //         </button>
  //         <button onClick={() => handlePageChange(page + 1)}>Next</button>
  //       </div>
  //     )}
  //     {books.length === 0 && page > 1 && <p>No more results found</p>}
  //   </div>
  
    
  // );
  //     }
 

    
  return (
    <section className="latest-books bg-light py-5">
    <div className="container">
        <h3 className="mb-5 text-center">More</h3>
        <br/>
        <div className="row">
        <select onChange={handleLanguageChange} style={{marginBottom:'20px'}}>
        <option value="children">children</option>
        <option value="Bildungsromans">Bildungsromans</option>
        <option value="City and town life -- Fiction">City and town life -- Fiction</option>
        
      </select>
      
        {
            books && books.map((book) => <div className="col-lg-3 col-md-4 col-sm-12" key={book.id} >
                <BookCard book={book} />
                
                </div>)    
        }
        <div>
            <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between'}}>
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
  )
}


  


export default BookByGenre;









