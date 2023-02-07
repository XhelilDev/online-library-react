import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import BookCard from '../componets/BookCard';

function Books() {

    const [totalPages, setTotalPages] = useState(0);


    const [books, setBooks] = useState([])
    const [languages, setLanguages] = useState('')
    const[page,setPage]=useState(1)

     useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://gutendex.com/books/?page=${page}&languages=${languages}`,
            // headers: {
            //     'X-RapidAPI-Key': 'f9ae788bf8mshede405325dc269ap12404cjsn850556a3187e',
            //     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            // }
        };

        axios.request(options).then(function (response) {
            setBooks(response.data.results)
            
          
                
        }).catch(function (error) {
            console.error(error);
        });
    }, [page,languages])


    const handleLanguageChange = (event) => {
        setLanguages(event.target.value);
        setPage(1);
      };
    
    //   const handlePageChange = (page) => {
    //     setPage(page);
    //   };


    const handlePageChange = (newPage) => {
        setPage(newPage);
      };

    //   const handlePaginationChange=(e)=>{
    //     e.preventDefault()
    //     switch(e.keyCode){
    //         case 13:
    //             setPage(e.target.value)

    //     }
    //   }


    

    
  return (
    <section className="latest-movies bg-light py-5">
        
    <div className="container">
        
        <h3 className="mb-5 text-center">More</h3>
        
        <div className="row">
            
        <select onChange={handleLanguageChange} style={{marginBottom:'20px'}}>
        <option value="">All</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="es">Spanish</option>
      </select>
      
      {books.length>0 ?(
        
            books && books.map((book) => <div className="col-lg-3 col-md-4 col-sm-12" key={book.id} >
                <BookCard book={book} />
                
                </div>)
 
      ) : (
        <p>No books found</p>
      )}

{books.length > 0 && (
        <div>
          <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        </div>
      )}
      {books.length === 0 && page > page.length && <p>No more results found</p>}
    </div>
       
        {/* <div>
            <ul style={{listStyleType:'none',width:'200px',display:'flex',justifyContent:'space-between',margin:'20px auto'}}>
                <li onClick={()=>setPage(page=>page-=1)}>
                    Preview
                </li>
                <li>
                    <input type="text" pattern="[0-9]{1,4}" style={{width:'80px',margin:'0 20px',textAlign:'center'}}
                    required onKeyUp={handlePaginationChange} placeholder={page}/>
                </li>
                <li onClick={()=>setPage(page=>page+=1)}>
                    Next
                </li>
            </ul>
        </div> */}
        </div>
    
</section>
  )
}

export default Books