import React,{useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import BookCard from '../componets/BookCard'
import Books from './Books'


function Book() {

    const [book, setBook] = useState()
    const[author,setAuthor]=useState()
    const {id} = useParams()


    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://gutendex.com/books/${id}`,
            // headers: {
            //   'X-RapidAPI-Key': 'f9ae788bf8mshede405325dc269ap12404cjsn850556a3187e',
            //   'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            // }
        };
          
        axios.request(options).then(function (response) {
            setBook(response.data)
            console.log(response.data)
            
        }).catch(function (error) {
            console.error(error)
        });
    }, [id])
   

  return (
    <div className="container my-5">
    {book && (
        <>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12">
                {<img src={book.formats["image/jpeg"]} className="card-img-top" style={{height: '210px',width:'150px'}} />}
                <h5 > {book.title}</h5>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                <h4 > {book.title}</h4>

                <h5 > {book.authors.length > 0 ? book.authors[0]['name'] : 'Unknown Author'}</h5>
                
                
                <table style={{border: '1px solid black'}}>
              <thead>
                <tr>
                  <th style={{border: '1px solid black'}}>Format</th>
                  <th style={{border: '1px solid black'}}>Media type</th>
                  <th style={{border: '1px solid black'}}>Lenguage</th>
                  <th style={{border: '1px solid black'}}>Download Count</th>
              
                </tr>
              </thead>
              <tbody>
                <tr key={book.id}>
                  <td style={{border: '1px solid black'}}><img src={book.formats["image/jpeg"]} className="card-img-top" style={{height: '21px',width:'15px'}} />
                  <a href={book.formats["application/octet-stream"]} style={{fontSize: "16px", fontWeight: "bold", color: "blue"}} >
                        
                        Download
    </a></td>
                  <td style={{border: '1px solid black'}}>{book.media_type}</td>
                  <td style={{border: '1px solid black'}}>{book.languages}</td>
                  <td style={{border: '1px solid black'}}>{book.download_count}</td>
                </tr>
              </tbody>
            </table>
              
                    
                   
                </div>
            </div>
          
        </>
    )}
</div>
 
  )
}

export default Book