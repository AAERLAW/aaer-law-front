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
