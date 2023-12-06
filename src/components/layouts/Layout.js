import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(data){
    return <div>
        <MainNavigation/>
        <main className={classes.main}>
            {data.children}
        </main>
    </div>
}

export default Layout;