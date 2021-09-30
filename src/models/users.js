import { Alert } from "../components/Alert.components";

import { getUsers, postCreateUser } from "../services/users";

const initialState = {
  usersTotal: 0,
  usersList: [],
  createUsersModal: false,
};

export default {
  namespace: "users",

  state: { ...initialState },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllUsers({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getUsers, payload);
      if (success) {
        const list = raw?.data?.items;
        const total = raw?.data?.pagination?.total_record;
        yield put({
          type: "save",
          payload: { usersList: list, usersTotal: total },
        });
      } else {
        Alert.error(message);
      }
    },
    *createUser({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postCreateUser, payload);
      if (success) {
        console.log(raw);
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
