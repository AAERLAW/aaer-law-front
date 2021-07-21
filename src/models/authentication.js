import { routerRedux } from "dva/router";
import {
  postLogin,
  postForgotPassword,
  postEmailConfirmation,
  postResendActivation,
  postRegistration,
  postCompleteRegistration,
  getSubscriptionPlans,
  getLogOut,
} from "../services/authentication";
import { Alert } from "../components/Alert.components";

import {
  storageToken,
  storageRefeshToken,
  storageProfile,
} from "../utils/constant";

const initialState = {
  profile: {},
  emailVerified: false,
  subcriptionPlan: {},
  openPaymentModal: false,
};

export default {
  namespace: "authentication",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      //Persist token details logic
      try {
        let profile = localStorage.getItem(storageProfile);
        console.log({ profile });
        if (profile) {
          let profileData = JSON.parse(profile);
          dispatch({
            type: "save",
            payload: { profile: profileData },
          });
        }
      } catch (err) {
        console.log(err);
      }
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
        yield put(routerRedux.push("/law-reports"));
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
      const { raw, success, message } = yield call(
        postEmailConfirmation,
        payload
      );
      if (success) {
        console.log(raw);
        yield put({
          type: "save",
          payload: { emailVerified: true },
        });
      } else {
        Alert.error(message);
      }
    },
    *resendActivation({ payload }, { call, put }) {
      const { raw, success, message } = yield call(
        postResendActivation,
        payload
      );
      if (success) {
        Alert.success("A new activation link has been sent to your mail.");
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
    *getAllSubscriptionPlans({ payload }, { call, put }) {
      const { raw, success, message } = yield call(
        getSubscriptionPlans,
        payload
      );
      if (success) {
        console.log(raw);
      } else {
        Alert.error(message);
      }
    },
    *logOut({ payload }, { call, put }) {
      const { refresh_token } = payload;
      call(getLogOut, { refresh_token });
      localStorage.clear();
      yield put(routerRedux.push("/"));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
