import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../images/photos/img.jpeg'

const useStyles = makeStyles((theme)=> ({
    root: {
      maxWidth: 300,
    //   maxHeight: 500,
      backgroundColor:'orange',
    //   height: 400,
        // width: 300,
    },
    cardContent:{
        backgroundColor:'white',
        // color:'white',
    },
    cardActionArea:{
        backgroundColor:'red',
        height: 400,
        width: 300,
        // color:'white'
    },
    media: {
        height: 180,
        // paddingTop: '56.25%', // 16:9
        //backgroundColor:'orange',
        backgroundImage:'../../images/photos/img.jpeg'
      },
      typography:{
          
        // backgroundColor:'orange',
        
            fontSize:'40px',
            fontWeight:'bold',
            color:'black',
      },
      deadline:{
        fontSize:'16px',
        fontWeight:'normal',
        color:'red',
        textAlign:'right'
        },
      title:{
        fontSize:'25px',
        fontWeight:'bold',
        color:'black',
        overflow:'hidden',
      },
      link:{
        backgroundColor:'orange',
        color:'blue',
        textAlign:'right'
      }
    }));

  export default function CardView(props){
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardMedia
                        className={classes.media}
                        component="img"
                        alt=""
                        heigth='150'
                        image={props.image}
                        title=""
                    />
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography className={classes.deadline}>
                        {props.deadline}
                    </Typography>
                    <Typography className={classes.deadline}>
                    <Link className={classes.link}>
                        website
                    </Link>
                    </Typography>
                    
                </CardContent>   
        </Card>
    )
}
