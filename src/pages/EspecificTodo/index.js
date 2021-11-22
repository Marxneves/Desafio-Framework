import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { TodosService } from '../../services'

import CardEspecific from '../../components/CardEspecific';

function Todos() {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    TodosService.get(id)
      .then(({ data }) => {
        setTodo(data);
        setLoaded(true);
      })
      .catch()
  }, [id])

  return (
    <div className='main-container'>
      {
        loaded &&
        <>
          <h1>To-Do</h1>
          <CardEspecific item={ todo } type='todo' />
        </>
      }
    </div>
  )
}

export default Todos;
