import {useContext} from 'react';

import FavoritesContext from '../storage/favorites-context';
import PostList from '../components/post/PostList';

function FavoritePage(){
    const FavoriteCtx = useContext(FavoritesContext);

    let content;

    if(FavoriteCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start adding more?</p>;
    } else {
        content = <PostList posts={FavoriteCtx.favorites}/>;
    }

    return(
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritePage;