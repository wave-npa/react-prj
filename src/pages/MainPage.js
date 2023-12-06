import { useState, useEffect } from "react";

import Message from "../components/Message";
import PostList from "../components/post/PostList";

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPost, setLoadedPost] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-prj-7579f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];

        for(const key in data){
          const post = {
            id: key,
            ...data[key]
          };

          posts.push(post);
        }

        setIsLoading(false);
        setLoadedPost(posts);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>All posts</h1>
      <PostList posts={loadedPost} />
    </section>
  );
}

export default MainPage;
