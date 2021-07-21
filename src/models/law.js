import { routerRedux } from "dva/router";
import { Alert } from "../components/Alert.components";

import { getLaws, postCreateLaw, getSingleLaw } from "../services/law";

export default {
  namespace: "law",

  state: {
    lawsList: [
      {
        id: 0,
        name: "ACCIDENT INVESTIGATION BUREAU",
      },
      {
        id: 1,
        name: "ABUBAKAR TAFAWA BALEWA UNIVERSITY, BAUCHI ACT 1988",
      },
      {
        id: 2,
        name: "ACTS AUTHENTICATION ACT (1962)",
      },
      {
        id: 3,
        name: "ADMINISTRATION OF CRIMINAL JUSTICE ACT (2015)",
      },
      {
        id: 4,
        name: "ACCIDENT INVESTIGATION BUREAU",
      },
      {
        id: 5,
        name: "ABUBAKAR TAFAWA BALEWA UNIVERSITY, BAUCHI ACT 1988",
      },
      {
        id: 6,
        name: "ACCIDENT INVESTIGATION BUREAU",
      },
      {
        id: 7,
        name: "ABUBAKAR TAFAWA BALEWA UNIVERSITY, BAUCHI ACT 1988",
      },
    ],
    lawsTotal: 46,
    createLawModal: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllLaws({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getLaws, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { lawsList: list, lawsTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createLaw({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(postCreateLaw, payload);
      if (success) {
        const data = raw?.data;
        const oldList = yield select(({ law }) => law.lawsList);
        const newList = [data, ...oldList];

        Alert.success("Successfully created a law file.");
        yield put({
          type: "save",
          payload: { createLawModal: false, lawsList: newList },
        });
      } else {
        Alert.error(message);
      }
    },
    *readLaw({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getSingleLaw, payload);
      if (success) {
        console.log(raw);
        const data = {
          id: `Law-${raw?.data?.id}`,
          type: `Law`,
          data: raw?.data,
        };
        yield put({ type: "reader/addBook", payload: data });
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
