import { NavLink } from "react-router-dom";
import css from "./Login.module.css"
import TextField from "@mui/material/TextField";

const Login = ()=> {
    return(
        <form className={css.contentLogin}>
    <h2>Авторизация</h2>
    <h3>Введите ваш логин и пароль</h3>
    <TextField className={css.int} label="Email" variant="outlined" placeholder="Введите ваш email"/>
    <TextField className={css.int} label="password" variant="outlined" placeholder="Введите ваш пароль"/>
    <button type="submit" variant="contained">Войти</button>
    <p>У вас нет аккаунта?<NavLink to="/registr">Регистрация</NavLink></p>
</form>

    )
}

export default Login