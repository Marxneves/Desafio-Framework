import React, { useEffect, useState } from 'react'
import CardComponent from '../../components/CardComponent'
import Pagination from '../../components/Pagination';

import { TodosService } from '../../services'

import './index.css'

function Todos() {
  const [showTodos, setShowTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    TodosService.getAll()
      .then(({ data }) => {
        setAllTodos(data);
        setShowTodos(data.slice(0, 9))
        setLoaded(true);
      })
      .catch()
  }, [])

  return (
    <div className='main-container'>
      {
        loaded &&
        <>
          <h1>Todos</h1>
          <CardComponent itens={ showTodos } path={ 'todo' } todo />
          <Pagination setShowItens={ setShowTodos } totalItens={ allTodos } />
        </>
      }
    </div>
  )
}

export default Todos;
