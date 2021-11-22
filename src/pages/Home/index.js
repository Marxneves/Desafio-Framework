import React from 'react'
import { useNavigate } from 'react-router-dom'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FiImage, FiList, FiFileText } from "react-icons/fi";

import './index.css'

const itens = [
  { title: 'Álbuns', icon: <FiImage size='100px' />, path: 'albums' },
  { title: 'Posts', icon: <FiFileText size='100px' />, path: 'posts' },
  { title: 'Todos', icon: <FiList size='100px' />, path: 'todos' },
]

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 200,
    marginBottom: '20px',
    display: 'grid',
    backgroundColor: 'white',
    boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.2)',
    borderRadius: '12px',
    textAlign: 'center'
  },
  title: {
    fontSize: 14,
  },
  action: {
    alignSelf: 'flex-end'
  }
});

function Home() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className="main-container">
      <h1>Bem vindo a aplicação</h1>
      <div className='home-cards'>
        { itens.map(({ title, icon, path }) => (
          <Card onClick={ () => { navigate(`/${path}`) } } className={ `${classes.root} card-content` } variant="outlined">
            <CardContent>
              <Typography variant='h4'>{ title }</Typography>
              { icon }
            </CardContent>
          </Card>
        )) }
      </div>
    </div>
  )
}

export default Home;
