import {
  postLogin,
  postForgotPassword,
  postEmailConfirmation,
  postRegistration,
} from "../services/authentication";

export default {
  namespace: "authentication",

  state: {
    emailVerified: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      console.log(payload);
      const { raw, success, message } = yield call(postLogin, payload);
      console.log("raw", raw);
    },
    *register({ payload }, { call, put }) {
      console.log("payload", payload);
      const { raw, success, message } = yield call(postRegistration, payload);
      if (success) {
        console.log(raw);
      }
    },
    *forgotPassword({ payload }, { call, put }) {
      console.log(payload);
      const { raw, success, message } = yield call(postForgotPassword, payload);
      console.log("raw", raw);
    },
    *emailConfirmation({ payload }, { call, put }) {
      console.log("payload", payload);
      const { raw, success, message } = yield call(
        postEmailConfirmation,
        payload
      );
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
