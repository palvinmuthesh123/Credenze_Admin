import axios from "axios";
import { BACKEND_API_URL } from "../app/utilities/constants";
function postHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Set the allowed origins
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Set allowed HTTP methods
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept", // Set allowed headers
  };
}

export const ApiRequest = (config = {}, headers = {}) => {
  const storedUser = localStorage.getItem("user");
  // console.log(storedUser)
  const user = JSON.parse(storedUser);
  let configObj = {
    ...config,
    headers: {
      ...(!headers.isFileUpload && {
        ...postHeaders(),
      }),
      ...(user?.accessToken && {
        Authorization: `Bearer ${user?.accessToken}`,
      }),
    },
    url: BACKEND_API_URL + "/" + config.url,
  };

  return new Promise((resolve, reject) => {
    axios(configObj)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};
