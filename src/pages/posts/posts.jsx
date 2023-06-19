import { useParams } from "react-router-dom";
import { URLansver } from "../../hooks/URL";
import { Post } from "./post";
import "./posts.scss";

export const Posts = () => {
  let userPosts = URLansver("/posts");
  let params = useParams();
  // console.log(userPosts);
  let postId = params.postId;
  return (
    <>
        <h1>Posts</h1>
      <ul className="postlist">
        {userPosts.map((post) => {
          if (postId == post.userId) {
            return <Post post={post} key={post.id} />;
          } else {
            return null;
          }
        })}

        <Post />
      </ul>
    </>
  );
};
