import { routerRedux } from "dva/router";
import axios from "axios";
import {
  postLogin,
  postForgotPassword,
  postEmailConfirmation,
  postResendActivation,
  postRegistration,
  postCompleteRegistration,
  getSubscriptionPlans,
  postVerifyPayment,
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
  subscriptionDetail: {},
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
        const isAdmin = data?.roles?.includes("ADMIN");
        if (isAdmin) {
          // If account is an admin
          yield put({
            type: "authentication/postLogin",
            payload: { data: data },
          });
        } else {
          // Normal user account
          const isSubscribed = data?.subscription?.status;
          if (isSubscribed) {
            // Subscribed User
            yield put({
              type: "authentication/postLogin",
              payload: { data: data },
            });
          } else {
            // Non Subscribed User
            yield put({ type: "save", payload: { subscriptionDetail: data } });
            yield put(routerRedux.push("/subscription"));
          }
        }
      } else {
        Alert.error(message);
      }
    },

    *postLogin({ payload }, { put }) {
      const { data } = payload;
      const { access_token, refresh_token } = data;
      localStorage.setItem(storageToken, access_token);
      localStorage.setItem(storageRefeshToken, refresh_token);
      localStorage.setItem(storageProfile, JSON.stringify(data));
      yield put({ type: "save", payload: { profile: data } });
      yield put(routerRedux.push("/law-reports"));
    },
    *register({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postRegistration, payload);
      if (success) {
        let responseMessage = raw?.meta?.info;
        Alert.success(responseMessage);
        yield put(routerRedux.push("/login"));
      } else {
        Alert.error(message);
      }
    },
    *forgotPassword({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postForgotPassword, payload);
      if (success) {
        console.log(raw);
      } else {
        Alert.error(message);
      }
    },
    *emailConfirmation({ payload }, { call, put }) {
      const { raw, success, message } = yield call(
        postEmailConfirmation,
        payload
      );
      if (success) {
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
    *verifyPayment({ payload }, { call, put }) {
      const access_token = payload.access_token;

      const data = {
        reference: payload.reference,
        subscribe_plan: payload.subscribe_plan,
        transaction: payload.transaction,
      };
      access_token &&
        (axios.defaults.headers.common.Authorization = `Bearer ${access_token}`);
      const { raw, success, message } = yield call(postVerifyPayment, data);

      if (success || true) {
        Alert.success("Payment verified successfully.");
        yield put({
          type: "authentication/postLogin",
          payload: { data: payload.subscriptionDetail },
        });

        yield put({
          type: "save",
          payload: {
            subscriptionDetail: {},
            subcriptionPlan: {},
            openPaymentModal: false,
          },
        });

        // yield put(routerRedux.push("/login"));
      } else {
        Alert.error(message);
      }
    },
    *logOut({ payload }, { call, put }) {
      const { refresh_token } = payload;
      call(getLogOut, { refresh_token });
      localStorage.clear();
      yield put(routerRedux.push("/login"));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
