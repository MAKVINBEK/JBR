import axios from "axios";

export const api = axios.create({
  baseURL: "http://212.193.24.72/api/",
});

api.interceptors.request.use((config) => {
  const userLanguage = localStorage.getItem("i18nextLng");
  const token = localStorage.getItem("token");

  if (userLanguage) {
    config.headers["Accept-Language"] = userLanguage;
  }
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.data);
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

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

export const get = {
  getFaunder: () => requester("Founders"),
  getProfile: () => requester("Needy_Profile"),
  getVolunteer: () => requester("Volunteer"),
  getNeedy: () => requester("Helped_Needy"),
};

export const post = {
  sendVolunteer: (data) => poster("Volunteer", data),
  sendProfile: (data) => poster("Needy_Profile", data),
  sendLogin: (data) => poster("token/", data),
};
