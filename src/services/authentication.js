import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function postLogin(data) {
  const url = `${endpoint}/auth/login`;
  return await request({
    url,
    method: "post",
    data,
    formatData: true,
  });
}

export async function postForgotPassword(data) {
  const url = `${endpoint}/auth/forgotpassword`;
  return await request({ url, method: "post", data, formatData: true });
}

export async function postEmailConfirmation(data) {
  const url = `${endpoint}/signup/validate`;
  return await request({ url, method: "post", data, formatData: true });
}

export async function postRegistration(data) {
  const url = `${endpoint}/users/signup/admin`;
  return await request({ url, method: "post", data, formatData: true });
}
