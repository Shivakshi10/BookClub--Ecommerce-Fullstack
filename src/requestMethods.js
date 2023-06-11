import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
//const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const token =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
console.log(token);
//const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYzYTZjMjVmYWY0YmQ4M2Y0ZWM2YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjE0NjQ5NSwiZXhwIjoxNjg2NDA1Njk1fQ.ajFH4Kpqui5mP0WgoHp4jqcEYbO1Otu_1PZbBps-AfQ';

//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken) ;
/* const token = () => {
    if (
      JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
        .currentUser.accessToken
    ) {
      return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
        .currentUser.accessToken;
    } else { return '' }
  }; */

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token :`Bearer ${token}`},
});