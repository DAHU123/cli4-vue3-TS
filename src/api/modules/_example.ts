import axios from "@/utils/request";
import { proxyLogin } from "@/api/proxy";
const apiName = proxyLogin + "/staff/v1";

type Params = {
  params: any
}

export default {
  // 登录
  postAccountLogin({ params } : Params) {
    return axios.post(`${apiName}/login`, params);
  },
  // 获取当前用户的信息
  getStaffUserInfo({ params } : Params) {
    return axios.get(`${apiName}/user/getInfo`, { params });
  },
  // 修改密码
  updatePwd({ params } : Params) {
    return axios.put(`${apiName}/user/update/password`, { ...params });
  }
};
