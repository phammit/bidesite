import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  typoclass: {
    fontSize: 12,
  },
  cardContent: {
    padding: "8px",
  }
});

export interface someProps {
  image: string,
  title: string,
  price: number,
  name: string,
  id: string,
}

const ImgMediaCard: FC<someProps> = ({image, title, price, name, id}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} id={id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="220"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.typoclass}>
            {title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.typoclass}>
            {name}
          </Typography>
          <Rating name="half-raing" defaultValue={2.5} precision={0.5} size="small"/>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {price}
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;

/**
 <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/images/digitalWallet.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
 */