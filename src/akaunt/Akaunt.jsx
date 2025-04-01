import css from "./Akaunt.module.css";
import { useEffect, useRef, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { TextField, Button } from "@mui/material";
import { get, post } from "../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Ak = () => {
  const [articles, setArticles] = useState([]);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [data, setData] = useState({ name: "", surname: "", img: null });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const [dataCabinet, setDataCabinet] = useState({
    collected: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!data.name || !data.surname) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    if (data.img) {
      formData.append("img", data.img);
    } else {
      toast.error("Пожалуйста, добавьте фотографию");
      return;
    }
  
    try {
      const res = await post.sendVolunteer(formData);
      if (!res || !res.message) {
        throw new Error("Некорректный ответ от сервера");
      }
  
      toast.success("Успешно: " + res.message);
      setData({ name: "", surname: "", img: null });
      setOpen(false);
  
      const response = await get.getVolunteer();
      setArticles(response);
      console.log(response);
    } catch (err) {
      console.error("Ошибка при отправке формы:", err);
      toast.error("Ошибка: " + (err.response?.data?.message || err.message || "Что-то пошло не так"));
    }
  };
  
  useEffect(() => {
                const loadArticles = async () => {
                  try {
                    const response = await get.getProfile()
                    setArticles(response);
                  } catch (err) {
                    console.error("rr",err);
                  }
                };
                loadArticles();
              }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChangeProfile = (e) => {
    const { name, value } = e.target;
    setDataCabinet(prev => ({
        ...prev,
        [name]: value
    }));
};

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("collected", dataCabinet.collected);
     
    try {
      const res = await post.sendProfile(formData);
      toast.success("Успешно: " + res.message);
      setDataCabinet({ collected: "",});
    } catch (err) {
      toast.error("Ошибка: " + err.response?.data?.message || "Что-то пошло не так");
    }
  };

  return (
    <div className={css.content}>
      <div className={css.patientDetail}>
        <form onSubmit={handleSubmitProfile} className={css.form}>
          <div>
            <TextField
              label="Собрано"
              type="number"
              name="collected"
              value={dataCabinet.collected}
              onChange={handleChangeProfile}
              fullWidth
              className={css.input}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "royalblue" },
                  "&:hover fieldset": { borderColor: "blue" },
                },
              }} />
          </div>

          <Button type="submit" variant="contained" fullWidth className={css.button}>
            Отправить
          </Button>
        </form>

        <div className={css.patientDetailContainers}>
          <h3 className={css.valanter}>Волонтеры</h3>
          <div className={css.flexx}>
            <div ref={menuRef}>
              <button onClick={() => setOpen(true)} className={css.btns}>
                Добавить <GrAddCircle />
              </button>
              {open && (
                <form onSubmit={handleSubmit} className={css.add}>
                  <span onClick={() => setOpen(false)}><IoClose /></span>
                  <input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required />
                  <input
                    type="text"
                    placeholder="Фамилия"
                    name="surname"
                    value={data.surname}
                    onChange={handleChange}
                    required/>
                  <div>
                    <input
                      type="file"
                      name="img"
                      onChange={handleChange}
                      required />
                    <button type="button">Добавить фотографию</button>
                  </div>
                  <button type="submit">Добавить</button>
                </form>
              )}
            </div>
            <div className={css.wrapp}>
            {articles.map((e, index) => (
  
    e.volunteers.map((el, subIndex) => (
      <div key={`${index}-${subIndex}`}>
        <img src={el.img} alt="Фото волонтера" />
        <p>
          <span>ФИО:</span>
          <br /> {el.name} {el.surname}
        </p>
      </div>
    ))
))}
            </div>
          </div>
        </div>
        <button className={css.exit} onClick={handleLogout}>выйти</button>
      </div>
    </div>
  );
};

export default Ak;