import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Button } from "@mui/material";
import {Link} from "react-router-dom"

const ProductCard = ({ product }) => {

  return (
    <div className="col-md-4">
      <Card sx={{ maxWidth: 450 }} className="mx-3 my-3">
        <CardMedia
          component="img"
          height="194"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.title.substring(0,12)}...
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            £{product.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Link to={`/Products/${product.id}`} style={{textDecoration:"none"}}>
        <Button variant="outlined" className="m-2" style={{color:"black",borderColor:"black",backgroundColor:"#EEEEEE"}}>
          Buy Now
        </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProductCard;
