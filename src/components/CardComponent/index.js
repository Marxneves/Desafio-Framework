import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  root: {
    width: 255,
    marginBottom: '20px',
    display: 'grid',
    backgroundColor: 'white',
    boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.2)',
    borderRadius: '12px',
    padding: '12px',
  },
  title: {
    fontSize: 14,
  },
  action: {
    alignSelf: 'flex-end'
  }
});

function CardComponent({ itens, path, todo = false, post = false }) {
  const navigate = useNavigate();
  const classes = useStyles();
  const [, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={ { display: 'grid', flexWrap: 'wrap', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' } }>
      { itens.map(({ id, title, userId, completed, body }) => (
        <Card className={ classes.root } variant="outlined">
          <CardContent>
            <Typography className={ classes.title } color="textSecondary" gutterBottom>
              Usuário: { userId }
            </Typography>
            <Typography variant="h5" component="h2">
              { title }
            </Typography>
            { todo && (
              <Typography variant="body1">
                Completo:
                <Checkbox
                  onChange={ handleChange }
                  defaultChecked={ completed }
                  color="primary"
                  inputProps={ { 'aria-label': 'secondary checkbox' } }
                />
              </Typography>)
            }
            { post && (
              <Typography variant="body1">
                { body }
              </Typography>)
            }
          </CardContent>
          <CardActions className={ classes.action }>
            <Button size="small" onClick={ () => { navigate(`/${path}/${id}`) } }>Ver mais</Button>
          </CardActions>
        </Card>
      )) }
    </div>
  )
}

export default CardComponent
