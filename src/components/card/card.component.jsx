import { Link, NavLink } from "react-router-dom";
import "./card.scss";

export const Card = ({ user }) => {
  let addressStreet = user.address.street;
  let { name, username,email, website, city, phone, id } = user;
  // console.log(user.address);
  return (
    <>
      <li className="card">
        <h2>{name}</h2>
        <h3 style={{ color: "white" }}>{username}</h3>
        <a href={email} className="Email">
          <span>Email: </span>
          {email}
        </a>
        <a href={website} className="website">
          <span>Website: </span>
          {website}
        </a>
        <p>
          <span> Address:</span>
          {city +'  '+ addressStreet}
        </p>
        <p>
          <span>Phone:</span>
          {phone}
        </p>
        <div className="buttons">
          <NavLink to={`toodo/${id}`} className="btn">
            toodo
          </NavLink>
          <NavLink to={`posts/${id}`} className="btn">
            posts
          </NavLink>
          <NavLink to={`galarey/${id}`} className="btn">
            galarey
          </NavLink>
        </div>
      </li>
    </>
  );
};
