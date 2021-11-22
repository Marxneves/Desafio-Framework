import React, { useEffect, useState } from 'react'

import CardComponent from '../../components/CardComponent'
import Pagination from '../../components/Pagination';

import { AlbumsService } from '../../services'
import './index.css'

function Albums() {
  const [allAlbuns, setAllAlbuns] = useState([]);
  const [showAlbums, setShowAlbums] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AlbumsService.getAll()
      .then(({ data }) => {
        setAllAlbuns(data);
        setShowAlbums(data.slice(0, 9));
        setLoaded(true);
      })
      .catch()
  }, [])

  return (
    <div className='main-container'>
      {
        loaded &&
        <>
          <h1>Álbuns</h1>
          <CardComponent itens={ showAlbums } path={ 'album' } />
          <Pagination setShowItens={ setShowAlbums } totalItens={ allAlbuns } />
        </>
      }
    </div >
  )
}

export default Albums;
