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
  return await request({ url, method: "POST", data, formatData: true });
}

export async function postEmailConfirmation(data) {
  const url = `${endpoint}/signup/validate`;
  return await request({ url, method: "POST", data, formatData: true });
}

export async function postRegistration(data) {
  const url = `${endpoint}/signup`;
  return await request({ url, method: "POST", data, formatData: true });
}

export async function postCompleteRegistration(data) {
  const url = `${endpoint}/signup/complete`;
  return await request({ url, method: "POST", data, formatData: true });
}

export async function postResendActivation(data) {
  const url = `${endpoint}/signup/resend`;
  return await request({ url, method: "POST", data, formatData: true });
}
export async function getLogOut(data) {
  const url = `${endpoint}/auth/logout`;
  return await request({ url, method: "POST", data, formatData: true });
}

export async function getSubscriptionPlans(data) {
  const url = `${endpoint}/subscription/plans`;
  return await request({ url, method: "GET" });
}

export async function postVerifyPayment(data) {
  const url = `${endpoint}/auth/verify-payment`;
  return await request({ url, method: "POST", data, formatData: true });
}
