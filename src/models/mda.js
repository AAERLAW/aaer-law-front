import { routerRedux } from "dva/router";
import { Alert } from "../components/Alert.components";

import {
  getRegulations,
  postCreateRegulation,
  getRegulationItems,
  getSingleRegulationItem,
  postCreateRegulationItem,
} from "../services/mda";

const initialState = {
  regulationTotal: 0,
  regulationList: [],
  createModal: false,
  regulationItemsList: [],
  regulationItemsTotal: 0,
  createRegItemModal: false,
};

export default {
  namespace: "mda",

  state: { ...initialState },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllRegulations({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getRegulations, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { regulationList: list, regulationTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createRegulation({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(
        postCreateRegulation,
        payload
      );
      if (success) {
        const data = raw?.data;
        const oldList = yield select(({ mda }) => mda.regulationList);
        const newList = [data, ...oldList];
        Alert.success("Successfully created regulation.");
        yield put({
          type: "save",
          payload: { createModal: false, regulationList: newList },
        });
      } else {
        Alert.error(message);
      }
    },

    *getAllRegulationItems({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getRegulationItems, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { regulationItemsList: list, regulationItemsTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createRegulationItem({ payload }, { call, put, select }) {
      const { raw, success, message } = yield call(
        postCreateRegulationItem,
        payload
      );
      if (success) {
        const data = raw?.data;
        const oldList = yield select(({ mda }) => mda.regulationItemsList);
        const newList = [data, ...oldList];
        Alert.success("Successfully created regulation item.");
        yield put({
          type: "save",
          payload: { createRegItemModal: false, regulationItemsList: newList },
        });
      } else {
        Alert.error(message);
      }
    },
    *onRead({ payload }, { call, put }) {
      const { raw, success, message } = yield call(
        getSingleRegulationItem,
        payload
      );
      if (success) {
        const data = {
          id: `Regulation-${raw?.data?.id}`,
          type: `Regulation Item`,
          data: raw?.data,
        };
        console.log({ data });
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
