import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { AlbumsService } from '../../services'

import './index.css'
import CardEspecific from '../../components/CardEspecific';


function Albums() {
  const [album, setAlbum] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    AlbumsService.get(id)
      .then(({ data }) => {
        setAlbum(data);
        setLoaded(true);
      })
      .catch()
  }, [id])

  return (
    <div className='main-container'>
      {
        loaded &&
        <>
          <h1>Álbum</h1>
          <CardEspecific item={ album } />
        </>
      }
    </div>
  )
}

export default Albums;
