import { getJudgements } from "../services/judgement";

export default {
  namespace: "judgement",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllJudgemnets({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getJudgements, payload);
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
