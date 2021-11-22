import React from 'react';

import './index.css';

function Pagination({ totalItens, setShowItens }) {

  const totalPages = (Math.ceil(totalItens.length / 9));
  const arratTotalPages = [];
  for (let i = 0; i < totalPages; i++) {
    arratTotalPages.push(i);
  }

  const handleChangePage = (pageNumber) => {
    setShowItens(totalItens.slice((pageNumber - 1) * 9, pageNumber * 9));
  }

  return (
    <div className='pagination'>
      Pages:
      <div className='pagination-numbers'>
        { arratTotalPages.map((_, index) => (
          <button onClick={ () => { handleChangePage(index + 1) } } key={ index }>{ index + 1 }</button>
        ))
        }
      </div>
    </div>
  )
}

export default Pagination;
