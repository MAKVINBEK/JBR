import css from "./Akaunt.module.css";
import { useEffect, useRef, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { TextField, Button } from "@mui/material";
import { get, post } from "../Api"; 
import { toast } from "react-toastify";
import QrScanner from 'qr-scanner';
import mbank from "../img/mbank.webp";
import obank from "../img/obank.webp";
import optima from "../img/optimabank.jpg";
import { useNavigate } from "react-router-dom";

const Ak = () => {
  const [articles, setArticles] = useState([]);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [data, setData] = useState({ name: "", surname: "", img: null });
  const navigate = useNavigate();

  // Проверка токена при загрузке
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  const [dataCabinet, setDataCabinet] = useState({
    diagnosis: "",
    treatment: "",
    photo: null,
    sum: "",
    collected: "",
    age:"",
    phone_number:"",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const qrResult = await QrScanner.scanImage(file);
        setResult(qrResult);
        setError(null);
      } catch (err) {
        setError('Не удалось распознать QR-код');
        setResult(null);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("img", data.img);

    try {
      const res = await post.sendVolunteer(formData); 
      toast.success("Успешно: " + res.message);
      setData({ name: "", surname: "", img: null });
      setOpen(false);
      const response = await get.getVolunteer();
      setArticles(Array.isArray(response) ? response : []);
    } catch (err) {
      toast.error("Ошибка: " + err.response?.data?.message || "Что-то пошло не так");
    }
  };

  useEffect(() => {                                                                                                                                          
    const loadArticles = async () => {
      try {
        setLoading(true);
        const response = await get.getVolunteer
        ();
        setArticles(Array.isArray(response) ? response : []);
      } catch (err) {
        setError("Не удалось загрузить волонтеров: " + err.message);
        console.error("Fetch error:", err);
        setArticles([]); 
      } finally {
        setLoading(false);
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
    const { name, type, files, value } = e.target;
    setDataCabinet((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("diagnosis", dataCabinet.diagnosis);
    formData.append("treatment", dataCabinet.treatment);
    formData.append("sum", dataCabinet.sum);
    formData.append("collected", dataCabinet.collected);
    formData.append("photo", dataCabinet.photo);
    formData.append("age", dataCabinet.age);
    formData.append("phone_number", dataCabinet.phone_number);

    try {
      const res = await post.sendProfile(formData); 
      toast.success("Успешно: " + res.message);
      setDataCabinet({ diagnosis: "", treatment: "",phone_number:"",age:"", sum: "", collected: "", photo: null });
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
          }}
          />
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
                    required
                  />
                  <input
                    type="text"
                    placeholder="Фамилия"
                    name="surname"
                    value={data.surname}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <input
                      type="file"
                      name="img"
                      onChange={handleChange}
                      required
                    />
                    <button type="button">Добавить фотографию</button>
                  </div>
                  <button type="submit">Добавить</button>
                </form>
              )}
            </div>
            <div className={css.wrapp}>
              {loading ? (
                <p>Загрузка волонтеров...</p>
              ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
              ) : articles.length === 0 ? (
                <p>Нет волонтеров</p>
              ) : (
                articles.map((el) => (
                  <div key={el.id}>
                    <img src={el.img} alt="Фото волонтера" />
                    <p>
                      <span>ФИО:</span><br /> {el.name} {el.surname}
                    </p>
                  </div>
                ))
              )}
            </div>
            
          </div>
        </div>
        <button className={css.exit} onClick={handleLogout}>выйти</button>
      </div>
    </div>
  );
};

export default Ak;