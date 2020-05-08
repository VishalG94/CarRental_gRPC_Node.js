import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import logo1 from './rangie.jpg';
import logo2 from './repair.jpg';
import logo3 from './users.jpg';
import logo4 from './billing.jpg';
import logo5 from './viewall.jpg';
import logo6 from './googlemaps.jpg'
import './admindashboard.css'
import Sidenavbar from './sidenavbar'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        Rental Car- Material UI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];
const cards1 = [1];
const cards2 = [1];
const cards3 = [1];
const cards4 = [1];
const card5 =[1];

export default function Dashboard() {
  const classes = useStyles();

  return (
    
    <React.Fragment> 
        
       <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
              Admin Dashboard
            </Typography>
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {logo1}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Add a new Vehicle
                    </Typography>
                    <Typography>
                      Add new cars to the list to cope up with the trend
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="/admin/addvehicle" size="small" color="primary">
                      Go
                    </Button>
                    <Button size="small" color="primary">
                      
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards1.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo2}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Edit Vehicle Details
                    </Typography>
                    <Typography>
                      Edit the details of the vehicles, delete them and add contents as well
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="/admin/editall" size="small" color="primary">
                      Go
                    </Button>
                    <Button size="small" color="primary">
                      
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards2.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo3}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      User Management
                    </Typography>
                    <Typography>
                      Get info of all the users and can manage them
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="/admin/usermanagement" size="small" color="primary">
                      Go
                    </Button>
                    <Button size="small" color="primary">
                      
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards3.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo4}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Set Up Vehicle Pricing 
                    </Typography>
                    <Typography>
                      Manage the Pricing of the Vehicles
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="/admin/vehiclepricemanagement" size="small" color="primary">
                      Go
                    </Button>
                    <Button size="small" color="primary">
                      
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {cards4.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo5}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      View All 
                    </Typography>
                    <Typography>
                      View all the cars and the various location details
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="/admin/viewallcars" size="small" color="primary">
                      Go
                    </Button>
                    <Button size="small" color="primary">
                      
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

{card5.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo6}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Add Rental Location
                    </Typography>
                    <Typography>
                      Add rental locations, set limits of locations and manage various location types
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="/admin/addLocation" size="small" color="primary">
                      Go
                    </Button>
                    <Button size="small" color="primary">
                      
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
    </React.Fragment>
  );
}