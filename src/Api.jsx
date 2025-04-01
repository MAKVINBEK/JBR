import axios from "axios";

export const api = axios.create({
  baseURL: "http://212.193.24.72/api/",
});

// Интерцептор для добавления токена в заголовки
api.interceptors.request.use((config) => {
  const userLanguage = localStorage.getItem("i18nextLng");
  const token = localStorage.getItem("access"); // access-токен

  if (userLanguage) {
    config.headers["Accept-Language"] = userLanguage;
  }
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

// Интерцептор для обработки ошибок и обновления токена
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error("API Error:", error.response?.data || error.message);

    // Если ошибка 401 (токен недействителен)
    if (error.response?.status === 401 && error.response?.data?.code === "token_not_valid") {
      const refreshToken = localStorage.getItem("refresh");

      if (refreshToken) {
        try {
          // Запрашиваем новый access-токен
          const { data } = await axios.post("http://212.193.24.72/api/token/refresh/", {
            refresh: refreshToken,
          });

          // Сохраняем новый access-токен
          localStorage.setItem("access", data.access);
          api.defaults.headers["Authorization"] = `Bearer ${data.access}`;

          // Повторяем оригинальный запрос с новым токеном
          error.config.headers["Authorization"] = `Bearer ${data.access}`;
          return api(error.config);
        } catch (refreshError) {
          console.error("Ошибка обновления токена", refreshError);
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          window.location.href = "/login"; // Разлогиниваем пользователя
        }
      }
    }

    return Promise.reject(error.response?.data || error.message);
  }
);

// Функции запросов
const requester = async (url = "") => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const poster = async (url, data, config = {}) => {
  try {
    const isFormData = data instanceof FormData;
    const headers = {
      ...config.headers,
    };
    if (!isFormData) {
      headers["Content-Type"] = "application/json";
      headers["Accept"] = "application/json";
    }
    const response = await api.post(url, data, {
      headers,
      ...config,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Готовые запросы
export const get = {
  getFaunder: () => requester("Founders"),
  getProfile: () => requester("api/needy_profile/"),
  getVolunteer: () => requester("Volunteer"),
  getNeedy: () => requester("Helped_Needy"),
  getGuarentee: () => requester("Guarentee"),
};

export const post = {
  sendVolunteer: (data) => poster("Volunteer", data),
  sendProfile: (data) => poster("needy_profile/", data),
  sendLogin: (data) => poster("token/", data),
  sendAplication: (data) => poster("Aplication", data),
};
