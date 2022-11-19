import axios from "axios";

export const requestGetUserData = () => {
  return axios.get("http://localhost:3000/api/userdata");
};

export const requestCheckIn = (checkInStatus, checkInTime) => {
  return axios.post("http://localhost:3000/api/checkin", {
    checkInStatus: checkInStatus,
    checkInTime: checkInTime,
  });
};

export const requestCheckOut = (checkInStatus, checkOutTime) => {
  return axios.post("http://localhost:3000/api/checkin", {
    checkInStatus: checkInStatus,
    checkOutTime: checkOutTime,
  });
};

export const requestGetCheckInLog = () => {
  return axios.get("http://localhost:3000/api/userdata");
};

export const getJsonplaceholderPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};
