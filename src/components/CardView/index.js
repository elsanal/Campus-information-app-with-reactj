import React from 'react';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../images/photos/img.jpeg'


const useStyles = makeStyles((theme)=> ({
    root: {
      backgroundColor:'green',
      height: 'fit-content',
      width: 400,
      maxHeight:400,
    },
    media: {
        height: 180,
        // paddingTop: '56.25%', // 16:9
        //backgroundColor:'orange',
        backgroundImage:'../../images/photos/img.jpeg'
      },
    
      deadline:{
        fontSize:'20px',
        fontWeight:'normal',
        color:'red',
        textAlign:'left',
        padding:5
        },
      title:{
        fontSize:'20px',
        fontWeight:'bold',
        color:'black',
        // overflow:'hidden',
        height:70,
        maxLines:2,
        // backgroundColor:'orange',
        
      },
      detail:{
        backgroundColor:'orange',
        color:'blue',
        textAlign:'rigth',
        padding:0,
        margin:0,
      },
      link:{
        backgroundColor:'white',
        color:'black',
        textAlign:'rigth',
        textDecoration:'none',
        padding:0,
        margin:0,
      },
      main:{
        backgroundColor:'white',
        color:'black',
        textAlign:'rigth',
        padding:0,
        margin:0,
        underline:'None'
      },
    }));

  export default function CardView(props){
    const classes = useStyles();
    const data = props.data;
    console.log(data.deadline)
    return(
        <Card className={classes.root}>
          <Link to={{pathname:'/scholar/detail/'+props.id, state:{data:data}}}
          className={classes.main}>
            <CardMedia
                          className={classes.media}
                          component="img"
                          alt=""
                          // heigth='150'
                          image={props.data.images[0].src.src}
                          title=""/>
          </Link>
              <Typography className={classes.title}>
                <Link 
                to={{pathname:'/scholar/detail/'+props.id, state:{data:"data"}}}
                className={classes.link}>{props.data.name_english}</Link>
              </Typography>
              <Typography className={classes.deadline}>
                Deadline: {props.data.deadline}
              </Typography>
        </Card>
    )
}
