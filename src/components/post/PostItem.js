import { Context, useContext } from "react";

import classes from "./PostItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../storage/favorites-context";

function PostItem(data) {
  const FavoriteCtx = useContext(FavoritesContext);

  const isFavorite = FavoriteCtx.isFavorite(data.id);

  function toggleFavoriteStatusHandler(){
    if(isFavorite) {
      FavoriteCtx.removeFavorite(data.id);
    } else {
      FavoriteCtx.addFavorite({
        id: data.id,
        title: data.title,
        name: data.name,
        text: data.text,
        image: data.image,
        date: data.date,
      })
    }
  }

  return (
    <li>
      <Card>
        <div className={classes.image}>
          <img src={data.image} alt={data.title} />
        </div>
        <div className={classes.content}>
          <h2>{data.title}</h2>
          <h5>{data.name}</h5>
          <p>{data.text}</p>
          <h6>{data.date}</h6>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{isFavorite ? 'Remove from Favorites' : 'Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default PostItem;
