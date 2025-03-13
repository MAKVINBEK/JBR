import { NavLink } from "react-router-dom";
import css from "./Login.module.css"
import TextField from "@mui/material/TextField";

const Login = ()=> {
    return(
        <div className={css.margin}>
        <form className={css.contentLogin}>
    <h2>Авторизация</h2>
    <h3>Введите ваш логин и пароль</h3>
    <TextField className={css.int} label="Email" placeholder="Введите ваш email" 
    sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "royalblue", // Цвет бордюра
          },
          "&:hover fieldset": {
            borderColor: "blue", // Цвет при наведении
          }
        },
      }}/>
    <TextField className={css.int} label="password" placeholder="Введите ваш пароль"
    sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "royalblue", // Цвет бордюра
          },
          "&:hover fieldset": {
            borderColor: "blue", // Цвет при наведении
          }
        },
      }}/>
    <button type="submit" variant="contained">Войти</button>
    <p>У вас нет аккаунта?<NavLink to="/registr">Регистрация</NavLink></p>
</form>
</div>
    )
}

export default Login