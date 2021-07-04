import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getLaws(data) {
  const url = `${endpoint}/laws/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
    formatData: true,
  });
}
