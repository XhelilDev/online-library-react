import React from 'react'

const Pagination = (props) => {
    const { currentPage, totalPages, handlePageChange } = props;
  
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  
    return (
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page}>
              <button onClick={() => handlePageChange(page)}>{page}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
export default Pagination