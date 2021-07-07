import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function postLogin(data) {
  const url = `${endpoint}/auth`;
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
  const url = `${endpoint}/signup`;
  return await request({ url, method: "post", data, formatData: true });
}

export async function postCompleteRegistration(data) {
  const url = `${endpoint}/signup/complete`;
  return await request({ url, method: "post", data, formatData: true });
}
