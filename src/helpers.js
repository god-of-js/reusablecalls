import axios from "axios";
const format = (str = " ") => {
  str = str.toLowerCase();
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
let Delete = (apiUrl, data, config, callback = () => {}) => {
  axios
    .delete(apiUrl, {
      data,
      config
    })
    .then(result => {
      alert(result.data.message)
    })
    .catch(err => {
      alert(err.response.data.message,)
    })
    .finally(() => {
      callback();
    });
};
const post = (url, data, config, callback = () => {}) => {
  axios
    .post(url,data,config)
    .then(result => {
      alert(result.data.message, 'alert')
    })
    .catch(err => {
      alert(err.response.data.message, 'error')
    })
    .finally(() => {
      callback();
    });
};
const get = (url, config) =>
  new Promise(resolve => {
    axios
      .get(
        url,
        config
      )
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        alert(err.response.data.message, )
      });
  });
export {
  format,
  post,
  Delete,
  get
};
