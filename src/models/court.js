import { getRules, getCourts, postCourts } from "../services/court";

const initialState = {
  rules: [
    {
      id: 1,
      title: "Arrest of Man",
      jurisdiction: "Abia State Jurisdiction",
      rule_date: "04-02-2020",
    },
    {
      id: 2,
      title: "Arrest of Woman",
      jurisdiction: "Ebo State Jurisdiction",
      rule_date: "04-02-2020",
    },
    {
      id: 3,
      title: "Arrest of Girl",
      jurisdiction: "Abia State Jurisdiction",
      rule_date: "04-02-2020",
    },
    {
      id: 4,
      title: "Arrest of Criminal",
      jurisdiction: "Delta State Jurisdiction",
      rule_date: "04-02-2020",
    },
    {
      id: 5,
      title: "Arrest of Robber",
      jurisdiction: "Abia State Jurisdiction",
      rule_date: "04-02-2020",
    },
    {
      id: 6,
      title: "Arrest of Politician",
      jurisdiction: "Abuja State Jurisdiction",
      rule_date: "04-02-2020",
    },
  ],
  rulesTotal: 36,
  courts: [
    {
      id: 1,
      name: "Federal High Court",
    },
    {
      id: 2,
      name: "Federal Low Court",
    },
    {
      id: 3,
      name: "Supreme High Court",
    },
    {
      id: 4,
      name: "Supreme Low Court",
    },
    {
      id: 5,
      name: "Religious High Court",
    },
    {
      id: 6,
      name: "Religious Low Court",
    },
    {
      id: 7,
      name: "Traditional High Court",
    },
    {
      id: 8,
      name: "Traditional Low Court",
    },
    {
      id: 9,
      name: "Sample High Court",
    },
    {
      id: 10,
      name: "Sample Low Court",
    },
  ],
  courtsTotal: 46,
  createCourtModal: false,
};
export default {
  namespace: "court",

  state: { ...initialState },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllRules({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getRules, payload);
      if (success) {
        console.log(raw);
      }
    },
    *getAllCourts({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getCourts, payload);
      if (success) {
        console.log(raw);
      }
    },
    *createCourt({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postCourts, payload);
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
