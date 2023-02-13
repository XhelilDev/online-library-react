import React from 'react'
import { Link } from 'react-router-dom'


    function BookCard({book}) {
    
        
        return (
            <div className="card mb-3" style={{height: '310px'}}>
                {<img src={book.formats["image/jpeg"]} className="card-img-top" style={{height: '210px',width:'150px',marginLeft:'60px',marginTop:'10px'}} />}
                <div className="card-body d-flex justify-content-between align-items-center">
                    <h5 className="card-title" style={{fontSize: "14px"}}>{book.title.substring(0,20)}</h5>
                    <p>{book.authors['name']}</p>
 
                    <Link to={`/books/${book.id}`} className="btn btn-outline-primary">Download</Link>
                </div>
            </div>
        )
    }


export default BookCard