import axios from "axios";
import qs from "qs";

// 引入vant的轻提示
import { Toast } from "vant";

// const urlPerfix = 'http://www.pudge.wang:3001'

// 创建axios实例，全局的配置
const instance = axios.create({
  baseURL: "https://m.youxiake.com",
  timeout: 10000
});

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    console.log(config);
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          params: params
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          Toast(error.message);
          reject(error);
        });
    });
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, qs.stringify(data))
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          Toast(error.message);
          reject(error);
        });
    });
  }
};

export default http;
