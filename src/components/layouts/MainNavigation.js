import { useContext } from 'react';
import {Link} from 'react-router-dom';

import classes from './MainNaviation.module.css';
import FavoritesContext from '../../storage/favorites-context';


function MainNavigation(){
    const favoriteCtx =  useContext(FavoritesContext);

    return(
        <header className={classes.header}>
            <div className={classes.logo}>Message App</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Main</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/discussion'>Discussion</Link>
                    </li>
                    <li>
                        <Link to='/favorite'>Favorite
                        <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                        </Link>
                        
                    </li>
                </ul>    
            </nav>
        </header>
    );
}

export default MainNavigation;