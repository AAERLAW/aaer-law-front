import { routerRedux } from "dva/router";
import { Alert } from "../components/Alert.components";

import {
  getReports,
  postReports,
  getSingleReport,
} from "../services/judgement";

const initialState = {
  judgementList: [],
  judgementTotal: 0,
  createJudgementModal: false,
};
export default {
  namespace: "judgement",

  state: { ...initialState },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllJudgements({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getReports, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { judgementList: list, judgementTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createJudgement({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(postReports, payload);
      if (success) {
        const data = raw?.data;
        const oldList = yield select(
          ({ judgement }) => judgement.judgementList
        );
        const newList = [data, ...oldList];
        Alert.success("Successfully created case.");
        yield put({
          type: "save",
          payload: { createJudgementModal: false, judgementList: newList },
        });
      } else {
        Alert.error(message);
      }
    },
    *onRead({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getSingleReport, payload);
      if (success) {
        const data = { ...raw.data, name: raw?.data?.case_title };
        const book = {
          id: `Report-${raw?.data?.id}`,
          type: `Report`,
          data: data,
        };
        yield put({ type: "reader/addBook", payload: book });
        yield put(routerRedux.push("/reader"));
      } else {
        Alert.error(message);
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
