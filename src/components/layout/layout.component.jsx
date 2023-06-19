import { Route, Routes } from "react-router-dom";
import { Home, TooDo, Posts, Galarey } from "../../pages";
import './layout.scss'

export const Layout = () => {
  return (
    <>
      <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="toodo/:toodoId" element={<TooDo />} />
            <Route path="posts/:postId" element={<Posts />} />
            <Route path="galarey/:photoId" element={<Galarey />} />
          </Routes>
        </div>
    </>
  );
};
