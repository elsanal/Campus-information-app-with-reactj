import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme)=> ({
    root: {
      backgroundColor:'green',
      height: 'fit-content',
      maxWidth: 800, 
      maxHeight:400,
      marginTop:40,
    },
    media: {
        height: 400,
        maxWidth: 800, 
        // paddingTop: '56.25%', // 16:9
        //backgroundColor:'orange',
        backgroundImage:'../../images/photos/img.jpeg'
      },
    }));



export default function ImageView(props){
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardMedia
            className={classes.media}
            component="img"
            alt=''
            // heigth='150'
            image={props.image}
            title=''/>
    </Card>
    )
}

