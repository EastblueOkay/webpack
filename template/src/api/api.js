/*
 * 基础的网络请求工具
 */
import axios from "axios"

// 设置axios默认地址
// axios.defaults.baseURL = "";

// 设置axios默认Content-type类型
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

/**
 * Post方法
 * @param url
 * @param par
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function Post(url, par) {
  return axios.post(url, par, {
    headers: {
      //  存放token
    }
  })
}

/**
 * Get方法
 * @param url
 * @param par
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function Get(url, par) {
  return axios.get(url, {
    params: par,
    headers: {
      //  存放token
    }
  });
}

/**
 * Delete方法
 * @param url
 * @param par
 * @returns {AxiosPromise}
 * @constructor
 */
export function Del(url, par) {
  return axios.delete(url, {
    params: par,
    headers: {
      //  存放token
    }
  });
}

/**
 * Put方法
 * @param url
 * @param par
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function Put(url, par) {
  return axios.put(url, par, {
    headers: {
      //  存放token
    }
  })
}
