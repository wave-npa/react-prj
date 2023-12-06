import PostForm from "../components/post/PostForm";

import {useNavigate} from 'react-router-dom';

function DiscussionPage() {
    const navigate = useNavigate();

  function addPostHandler(postData) {
    fetch(
      "https://react-prj-7579f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
      }
    ).then(() => {
        navigate('/');
    });
  }

  return (
    <section>
      <h1>Join the discussion</h1>
      <PostForm addPost={addPostHandler} />
    </section>
  );
}

export default DiscussionPage;
