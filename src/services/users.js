import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getUsers(data) {
  const url = `${endpoint}/users/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function postCreateUser(data) {
  const url = `${endpoint}/users`;
  return await request({
    url,
    method: "POST",
    data,
  });
}
