import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PostsService } from '../../services'

import CardEspecific from '../../components/CardEspecific';

function Posts() {
  const [loaded, setLoaded] = useState(false);
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    PostsService.get(id)
      .then(({ data }) => {
        setPost(data);
        setLoaded(true);
      })
      .catch()
  }, [id])

  return (
    <div className='main-container'>
      {
        loaded &&
        <>
          <h1>Post</h1>
          <CardEspecific item={ post } type='post' />
        </>
      }
    </div>
  )
}

export default Posts;
