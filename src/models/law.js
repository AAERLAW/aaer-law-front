import { getLaws } from "../services/law";

export default {
  namespace: "law",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllLaws({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getLaws, payload);
      if (success) {
        console.log(raw);
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
