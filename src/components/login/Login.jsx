import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../../Api';
import css from "./Login.module.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function Login() {
    const [showPass, setShowPass] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({ show: false, message: "", type: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const showAlert = (message, type) => {
        setAlert({ show: true, message, type });
        setTimeout(() => setAlert({ show: false, message: "", type: "" }), 10000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!password) {
            showAlert("Введите пароль!", "error");
            return;
        }
        if (!login) {
            showAlert("Введите ваше имя!", "error");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const data = await post.sendLogin({
                username: login,
                password: password,
            });

            if (data.access) {
                localStorage.setItem("token", data.access);
                localStorage.setItem("refresh", data.refresh);
                showAlert("Вход выполнен успешно!", "success");

                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
            } else {
                const errorMessage = data.detail || "Неверный логин или пароль!";
                showAlert(errorMessage, "error");
                console.error("Ошибка авторизации:", data);
            }
        } catch (err) {
            console.error("Login failed:", err);
            showAlert("Неверный логин или пароль!", "error");
            setError(err.response?.data?.detail || err.message || JSON.stringify(err));
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className={css.margin}>
            <form className={css.contentLogin} onSubmit={handleSubmit}>
                <TextField
                    className={css.int}
                    type="text"
                    label="Логин"
                    placeholder="Введите ваш Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    disabled={loading}
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
                    type={showPass ? "text" : "password"}
                    label="Пароль"
                    placeholder="Введите ваш пароль"
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    fullWidth
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "royalblue" },
                            "&:hover fieldset": { borderColor: "blue" },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={() => setShowPass(!showPass)} edge="end">
                                {showPass ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        ),
                    }}
                />
                {alert.show && (
                    <div className={`${css.alert} ${css[`alert-${alert.type}`]}`}>
                        <Alert severity={alert.type}>{alert.message}</Alert>
                    </div>
                )}
                
                <button
                    className={css.button}
                    type="submit"
                    disabled={loading}>
                    {loading ? "Загрузка..." : "Войти"}
                </button>
            </form>

            
        </div>
    );
}

export default Login;