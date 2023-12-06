import PostItem from './PostItem';
import classes from './PostList.module.css'

function PostList(data){
    return(
        <ul className={classes.list}>
            {data.posts.map(post => <PostItem 
            key={post.id} 
            id={post.id} 
            image={post.image}
            title={post.title}
            date={post.date}
            name={post.name}
            text={post.text}
            />)}
        </ul>
    );
}

export default PostList;