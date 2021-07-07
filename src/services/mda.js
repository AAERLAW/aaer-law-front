import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getMDAs(data) {
  const url = `${endpoint}/regulations/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
    formatData: true,
  });
}

export async function postCreateMDA(data) {
  const url = `${endpoint}/regulations`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}

export async function getMDAsRegulations(data) {
  const url = `${endpoint}/regulationitems/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
    formatData: true,
  });
}
