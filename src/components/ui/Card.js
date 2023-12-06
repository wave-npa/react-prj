import classes from './Card.module.css';

function Card(data){
    return <div className={classes.card}>{data.children}</div>
}

export default Card;