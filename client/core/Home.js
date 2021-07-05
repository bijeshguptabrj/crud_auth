import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicornbike.jpg'
import Grid from '@material-ui/core/Grid';
import MediaQuery from 'react-responsive';

const useStyles = makeStyles(theme => ({
  card: {
  maxWidth: 900,
  margin: 'auto',
  marginTop: theme.spacing(5),
  },
  title: {
  padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
  color: theme.palette.openTitle
  },
  media: {
  minHeight: 400
  }
  
 })) 
// <Card className={classes.card}> 
export default function Home(){
  const classes = useStyles()
  return (
  <Card className={classes.card}>
  <MediaQuery minDeviceWidth={600} device={{ deviceWidth: 1600 }}>
  <Typography variant="h6" className={classes.title}>
  Home Page
  </Typography>
  <CardMedia className={classes.media} 
  image={unicornbikeImg} title="Unicorn Bicycle"/>
  <CardContent>
  <Typography variant="body2" component="p">
  
  Welcome to the MERN Skeleton home page.
  </Typography>
  </CardContent>
  </MediaQuery>
  </Card>
  )
 }
 