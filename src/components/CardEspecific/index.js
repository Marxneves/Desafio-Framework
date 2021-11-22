import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles({
  root: {
    width: 250,
    marginBottom: '20px',
    boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.2)',
    borderRadius: '12px',
    padding: '12px',
  },
  title: {
    fontSize: 14,
  },
});

function CardEspecific({ item, type = null }) {
  const classes = useStyles();
  const [, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Card className={ classes.root } variant="outlined">
        <CardContent>
          <Typography className={ classes.title } color="textSecondary" gutterBottom>
            Usuario: { item.userId }
          </Typography>
          <Typography variant="h5" component="h2">
            { item.title }
          </Typography>
          {
            type === 'todo' &&
            <Typography variant="body1">
              Completo:
              <Checkbox
                onChange={ handleChange }
                defaultChecked={ item.completed }
                color="primary"
                inputProps={ { 'aria-label': 'secondary checkbox' } }
              />
            </Typography>
          }
          {
            type === 'post' &&
            <Typography variant="body" >
              { item.body }
            </Typography>
          }
        </CardContent>
      </Card>
    </div>
  )
}

export default CardEspecific;
