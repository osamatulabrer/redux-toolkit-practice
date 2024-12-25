
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Post Fetching</h2>
      <section>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export default PostView;
