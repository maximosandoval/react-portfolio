import React from 'react'
import "../../App.css";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer';

export default function MediaCard() {
    return (
        <>
         <Container className='card-container'>
        
        <Grid container >
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="https://media.publit.io/file/MaximoTheGreat/tile-aif.png"
                alt="photo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Budeget App
        </Typography>
                <Typography variant="body2" color="text.secondary">
                The budget app or budget tracker allows the end-user to add budget line items in an online or offline state.
        </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://maximosandoval.github.io/budget-app/" >Live App</a>
                <a className='card-links' href="https://github.com/maximosandoval/budget-app" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* team profile generator */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="https://media.publit.io/file/MaximoTheGreat/tile-aif.png"
                alt="photo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Workout App
        </Typography>
                <Typography variant="body2" color="text.secondary">
                Track the progress of your workouts quickly, easily, and effectively with this workout app.
                  
                </Typography>
              </CardContent>
              <CardActions>
              <a className='card-links' href="https://gist.github.com/PurpleBooth/109311bb0361f32d87a2" >Live App</a>
                <a className='card-links' href="https://github.com/maximosandoval/workout-tracker" >Github</a>
                
              </CardActions>
            </Card>
          </Grid>

          
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="https://media.publit.io/file/MaximoTheGreat/tile-aif.png"
                alt="photo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Really Good Fake Store
        </Typography>
                <Typography variant="body2" color="text.secondary">
                This app is a mock e-commerce website where the user can products.
        </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://really-good-fake-store.herokuapp.com" >Live Page</a>
                <a className='card-links' href="https://github.com/maximosandoval/Really-Good-Fake-Store">Github</a>
              </CardActions>
            </Card>
          </Grid>

         
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="https://media.publit.io/file/MaximoTheGreat/tile-aif.png"
                alt="photo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Weather App
        </Typography>
                <Typography variant="body2" color="text.secondary">
                Utilizing the OpenWeather One Call API to retrieve weather data for cities
        </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="hhttps://maximosandoval.github.io/weather-app/" >Live App</a>
                <a className='card-links' href="https://github.com/maximosandoval/weather-app" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="https://media.publit.io/file/MaximoTheGreat/tile-aif.png"
                alt="photo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  eCommerce Back End
        </Typography>
                <Typography variant="body2" color="text.secondary">
                Build the back end for an eCommerce website utilizing SQL, Node.js, and other languages and applications.
                  </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href="https://media.publit.io/file/DU/Module-13-walkthru-y.mp4" >Video</a>
                <a className='card-links' href="https://github.com/maximosandoval/ecommerce-backend" >Github</a>
              </CardActions>
            </Card>
          </Grid>

          {/* Budget tracker app */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component="img"
                height="140"
                image="https://media.publit.io/file/MaximoTheGreat/tile-aif.png"
                alt="Photo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  WorkDay Planner
        </Typography>
                <Typography variant="body2" color="text.secondary">
                Create a simple calendar application that allows a user to save events. 
        </Typography>
              </CardContent>
              <CardActions>
                
                <a className='card-links' href="https://maximosandoval.github.io/workday-planner/" >Github</a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <br></br>
      <br></br>
      <Footer />
    </>
    );
  }

