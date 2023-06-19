import { NavLink, useParams } from "react-router-dom";
import { URLansver } from "../../hooks/URL";

import "./galarey.scss";
export const Galarey = () => {
  let albums=URLansver('/albums');
  let userPhotoId = useParams().photoId;
  console.log(albums);
  return (
    <>
      <div className="container">
        <h1>galarey</h1>
        <ul className="photoList">
          {albums.map(album =>{
            if(album.userId==userPhotoId){
            return (
              <li className="photos" key={album.id}>
                <b>{album.title}</b>
                <div className="photoBtn">
                  <NavLink>Photos</NavLink>
                </div>
              </li>
            );}
            else null
          })}
         
        </ul>
      </div>
    </>
  );
};
