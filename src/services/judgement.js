import request from "../utils/request";
import { endpoint } from "../utils/config";

export async function getJudgements(data) {
  const url = `${endpoint}/judgements/paginated?`;
  return await request({
    url,
    method: "GET",
    data,
  });
}

export async function postJudgements(data) {
  const url = `${endpoint}/judgements?`;
  return await request({
    url,
    method: "POST",
    data,
    formatData: true,
  });
}
