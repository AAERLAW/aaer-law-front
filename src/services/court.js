import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getRules(data) {
  const url = `${endpoint}/rules/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function getCourts(data) {
  const url = `${endpoint}/courts/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function postCourts(data) {
  const url = `${endpoint}/courts`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}
