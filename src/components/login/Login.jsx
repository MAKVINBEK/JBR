import { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Login.module.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={css.margin}>
      <form className={css.contentLogin}>
        <h2>Авторизация</h2>
        <h3>Введите ваш логин и пароль</h3>

        <TextField
          className={css.int}
          type="email"
          label="Email"
          placeholder="Введите ваш email"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "royalblue" },
              "&:hover fieldset": { borderColor: "blue" },
            },
          }}
        />

        <TextField
          className={css.int}
          type={showPassword ? "text" : "password"}
          label="Пароль"
          placeholder="Введите ваш пароль"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "royalblue" },
              "&:hover fieldset": { borderColor: "blue" },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <button type="submit" className={css.button}>Войти</button>
      </form>
    </div>
  );
};

export default Login;
