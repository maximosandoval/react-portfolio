import * as React from 'react';
import './Form.css';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/Styles';


const useStyles = makeStyles({
  fields: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles()

  return (
    <Container>
      <h4 className="fill-in">Get teh help you need</h4>
      <form autoComplete="off">
        <TextField
          className={classes.fields}
          label="name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.fields}
          label="email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.fields}
          label="message"
          multiline
          rows={4}
          fullWidth
          required
        />
        <button className="form-btn">Submit</button>
      </form>

    </Container>

  );
}
