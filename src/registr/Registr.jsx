import { NavLink } from "react-router-dom";
import css from "./Registr.module.css"
import TextField from "@mui/material/TextField";

const Registr = ()=> {
    return(
        <form className={css.contentLogin}>
    <h2>Регистрация</h2>
    <h3>Введите ваш логин и пароль</h3>
    <TextField className={css.int} margin="normal" label="Имя" variant="outlined" placeholder="Введите ваш Имя"/>
    <TextField className={css.int} margin="normal" label="Email" variant="outlined" placeholder="Введите ваш email"/>
    <TextField className={css.int} margin="normal" label="password" variant="outlined" placeholder="Введите ваш пароль"/>
    <TextField className={css.int} margin="normal" label="password repeat" variant="outlined" placeholder="Введите ваш пароль"/>
    <button type="submit" variant="contained">Регистрация</button>
    <p>У вас нет аккаунта?<NavLink to="/login">Авторизация</NavLink></p>
</form>

    )
}

export default Registr