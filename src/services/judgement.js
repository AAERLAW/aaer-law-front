import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getJudgements(data) {
  const url = `${endpoint}/judgements/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
    formatData: true,
  });
}
