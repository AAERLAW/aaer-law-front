import { routerRedux } from "dva/router";
import {
  postLogin,
  postForgotPassword,
  postEmailConfirmation,
  postRegistration,
  postCompleteRegistration,
} from "../services/authentication";
import { Alert } from "../components/Alert.components";

import {
  storageToken,
  storageRefeshToken,
  storageProfile,
} from "../utils/constant";

const initialState = {
  profile: {},
  verificationInfo: {},
  emailVerified: false,
};

export default {
  namespace: "authentication",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postLogin, payload);
      if (success) {
        const { data } = raw;
        const { access_token, refresh_token } = data;
        localStorage.setItem(storageToken, access_token);
        localStorage.setItem(storageRefeshToken, refresh_token);
        localStorage.setItem(storageProfile, JSON.stringify(data));
        yield put({ type: "save", payload: { profile: data } });
        yield put(routerRedux.push("/dashboard"));
      } else {
        Alert.error(message);
      }
    },
    *register({ payload }, { call, put }) {
      console.log("payload", payload);
      const { raw, success, message } = yield call(postRegistration, payload);
      if (success) {
        console.log(raw);
        let responseMessage = raw?.meta?.info;
        Alert.success(responseMessage);
        yield put(routerRedux.push("/"));
      } else {
        Alert.error(message);
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
        yield put({
          type: "save",
          payload: { emailVerified: true, verificationInfo: raw?.data },
        });
      } else {
        Alert.error(message);
      }
    },
    *completeRegistration({ payload }, { call, put }) {
      const { raw, success, message } = yield call(
        postCompleteRegistration,
        payload
      );
      if (success) {
        console.log(raw);
        raw?.meta?.info && Alert.success(raw?.meta?.info);
        yield put(routerRedux.push("/"));
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
