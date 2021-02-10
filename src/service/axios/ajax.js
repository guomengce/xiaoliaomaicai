import axios from 'axios'


export default function ajax (url = '', params = {}, type = 'GET') {
  let promise;
  return new Promise((resolve, reject) => {
    let paramsStr;
    if (type.toUpperCase() === 'GET') {
      Object.keys(params).forEach(key => {
        paramsStr += `${key}=${params[key]}&`
      })

      // 去掉最后一个参数加的“&”,最前面添加"?"
      if (paramsStr) {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
        console.log('paramsStr', paramsStr);
        // 完整路径
        url += '?' + paramsStr;
      }
      promise = axios.get(url)
    } else if (type.toUpperCase() === "POST") {
      promise = axios.post(url, params)
    }


    promise.then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}