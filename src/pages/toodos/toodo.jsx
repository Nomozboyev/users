import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import "./toodo.scss";
import { useState } from "react";
import { URLansver } from "../../hooks/URL";
import { useParams } from "react-router-dom";
export const TooDo = () => {
  let toodosURL = URLansver("/todos");
  let params = useParams();
  let toodoId = params.toodoId;
  return (
    <>
      <ul className="toodolist" key="todolist">
        <h1 key="todo">Toodo</h1>
        {toodosURL.map((toodo) => {
          if (toodo.userId == toodoId) {
            return (
              <li key={toodo.id} className="toodo-item">
                <p>{toodo.title}</p>
                <div className="toodo-icons">
                  {toodo.completed ? (
                    <div className="toodo-icon">
                      <CheckRoundedIcon style={{ color: "green" }} />
                    </div>
                  ) : (
                    <div className="toodo-icon">
                      <CloseRoundedIcon style={{ color: "darkred" }} />
                    </div>
                  )}
                </div>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </>
  );
};
