import Topography from 'material-ui/Topography';
import Card from 'material-ui/Card';
import CardContent from 'material-ui/CardContent';
import CardActionArea from 'material-ui/CardActionArea';
import CardMedia from 'material-ui/CardMedia';
import CardActions from 'material-ui/CardActions';
import Button from 'material-ui/Button';
import Link from 'material-ui/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  export default function CardView(props){
    const classes = useStyles();
    return(
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt=""
                    height="140"
                    image={props.image}
                    title=""
                />
                <CardContent>
                    <Topography>
                        {props.title}
                    </Topography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Topography>
                    {props.deadline}
                </Topography>
                <Button>
                    <Link>
                        {props.website}
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}