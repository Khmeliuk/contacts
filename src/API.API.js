import axios from "axios";

axios.defaults.baseURL = "https://64e6563109e64530d17fe5d5.mockapi.io/";

export const getContacts = () => axios({ method: "GET", url: "contacts" });
export const addContact = (data) =>
  axios({
    method: "POST",
    url: "contacts",
    data: data,
  });

export const deleteContact = (id) => {
  return axios({ method: "DELETE", url: `contacts/${id}`, data: id });
};
