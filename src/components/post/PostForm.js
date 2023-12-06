import {useRef} from 'react';

import Card from "../ui/Card";
import classes from "./PostForm.module.css";

function PostForm(data) {
    let date = new Date().toLocaleDateString("en-IN");
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const nameInputRef = useRef();
    const textInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredText = textInputRef.current.value;

        const postData = {
            title: enteredTitle,
            image: enteredImage,
            name: enteredName,
            date: date,
            text: enteredText,
        };

        data.addPost(postData);
    }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" required id="name" ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="date">Date</label>
            <input type="text" value={date} required id="date" readOnly/>
        </div>
        <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" required rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Post</button>
        </div>
      </form>
    </Card>
  );
}

export default PostForm;
