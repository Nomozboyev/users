import { NavLink } from "react-router-dom";
import "./posts.scss";

export const Post = ({ post }) => {

  if (post) {
    return (
    <>
      <li className="post-item">
        <b> { post.body } </b>
        <p>{ post.body } </p>
        <NavLink className={"comments"}>coments</NavLink>
      </li>
    </>
  )}
  else {
    return null}
};
