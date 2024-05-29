import axios from "axios";

const API_URLS = [
  "https://reqres.in/api/users",
  "https://reqres.in/api/users?page=2",
];

export const fetchEmployeesPage1 = async () => {
  const response = await axios.get(API_URLS[0]);
  return response.data.data;
};

export const fetchEmployeesPage2 = async () => {
  const response = await axios.get(API_URLS[1]);
  return response.data.data;
};
