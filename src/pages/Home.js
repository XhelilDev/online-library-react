import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import BookCard from '../componets/BookCard';


function Home() {
    const [defaultBooks, setDefaultBooks] = useState([]);
    // const [books, setBooks] = useState([])
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const[page,setPage]=useState(1)

    
    useEffect(() => {
        // Fetch the default books
        axios.get('https://gutendex.com/books')
        .then(response => setDefaultBooks(response.data.results.slice(0, 8)))
          .catch(error => console.error(error));
         
    
        // Fetch the search results
        axios.get(`https://gutendex.com/books?page=${page}&search=${searchQuery}`)
          .then(response => setSearchResults(response.data.results))
          .catch(error => console.error(error));
      }, [page,searchQuery]);

     
    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: `https://gutendex.com/books/?page=${page}`,
    //         // headers: {
    //         //     'X-RapidAPI-Key': 'f9ae788bf8mshede405325dc269ap12404cjsn850556a3187e',
    //         //     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    //         // }
    //     };

    //     axios.request(options).then(function (response) {
    //         setBooks(response.data.results)
            

            
            
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }, [page])

      const handlePageChange = (page) => {
        setPage(page);
      };


  return (
    <section className="latest-books bg-light py-5">
        
                <div className="container d-flex  gap-4">
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Make a quick search..." />
                 <button onClick={() => setSearchQuery('')}>Clear</button>
                    
                </div>
                <div className="container">
    <h3 className="mb-5 text-center">More downloadable books</h3>
    {
      searchQuery
        ? (searchResults.length > 0
           ? <div className="row">
               {searchResults.map(book => (
                 <div className="col-lg-3 col-md-4 col-sm-12" key={book.id}>
                   <BookCard book={book} />
                 </div>
               ))}
             </div>
           : <div className="text-center" style={{fontSize:'18px'}}>No book results where  found for that search</div>)
        : <div className="row">
            {defaultBooks.map(book => (
              <div className="col-lg-3 col-md-4 col-sm-12" key={book.id}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
    }
  </div>
    <div>
            <ul style={{listStyleType:'none',width:'200px',display:'flex',justifyContent:'space-between',margin:'20px auto'}}>
                <li onClick={()=>setPage(page=>page-=1)}>
                    Preview
                </li>
                <li>
                    <input type="text" pattern="[0-9]{1,4}" style={{width:'80px',margin:'0 20px',textAlign:'center'}}
                    required onKeyUp={handlePageChange} placeholder={page}/>
                </li>
                <li onClick={()=>setPage(page=>page+=1)}>
                    Next
                </li>
            </ul>
        </div>
</section>
  
);


  
}

export default Home