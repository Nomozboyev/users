import { createTheme, darkScrollbar } from "@mui/material";
import { Card } from "../../components/card";
import { URLansver } from "../../hooks/URL";
 import './home.scss'

export const Home = () => {
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => ({
          body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
        }),
      },
    },
  });
  
  let data = URLansver('/users')

  return (
    <>
       <div className="usersContainer">
        <h1>Users' Information</h1>
        <ul className="userList">
          {data.map((user) => (

            <Card user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </>
  );
};
