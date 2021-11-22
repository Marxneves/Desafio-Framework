import React, { useEffect, useState } from 'react'

import CardComponent from '../../components/CardComponent'
import Pagination from '../../components/Pagination'

import { PostsService } from '../../services'

import './index.css'

function Posts() {
  const [showPosts, setShowPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    PostsService.getAll()
      .then(({ data }) => {
        setAllPosts(data);
        setShowPosts(data.slice(0, 9))
        setLoaded(true);
      })
      .catch()
  }, [])

  return (
    <div className='main-container'>
      {
        loaded &&
        <>
          <h1>Posts</h1>
          <CardComponent itens={ showPosts } path={ 'post' } post />
          <Pagination setShowItens={ setShowPosts } totalItens={ allPosts } />
        </>
      }
    </div>
  )
}

export default Posts;
