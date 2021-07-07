import { getMDAs, postCreateMDA, getMDAsRegulations } from "../services/mda";

const initialState = {
  totalItem: 64,
  itemList: [
    {
      id: 1,
      name: "ACCIDENT INVESTIGATION BUREAU ",
    },
    {
      id: 2,
      name: "BUREAU OF PUBLIC PROCUREMENT",
    },
    {
      id: 3,
      name: "CORPORATE AFFAIRS COMMISSION OF NIGERIA ",
    },
    {
      id: 4,
      name: "CENTRAL BANK OF NIGERIA",
    },
    {
      id: 5,
      name: "CONSUMER PROTECTION COUNCIL",
    },
  ],
  createMdaModal: false,
  regulationList: [
    {
      id: 1699,
      name: "CIVIL AVIATION",
      agency: "ACCIDENT INVESTIGATION BUREAU",
      year: 2019,
    },
    {
      id: 1701,
      name: "INVESTIGATION TRAINING MANUAL",
      agency: "ACCIDENT INVESTIGATION BUREAU",
      year: 2018,
    },
    {
      id: 1709,
      name: "OPERATIONS INVESTIGATIONS GUIDANCE MATERIAL",
      agency: "ACCIDENT INVESTIGATION BUREAU",
      year: 2007,
    },
    {
      id: 1700,
      name: "GUIDANCE MATERIAL FOR ENGINEERING",
      agency: "ACCIDENT INVESTIGATION BUREAU",
      year: 2007,
    },
    {
      id: 1725,
      name: "CIVIL AVIATION (REPEAL AND RE-ENACTMENT) ACT ",
      agency: "ACCIDENT INVESTIGATION BUREAU",
      year: 2006,
    },
  ],
  regulationTotal: 43,
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
    *getAllMDAs({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getMDAs, payload);
      if (success) {
        console.log(raw);
      }
    },
    *createMDA({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postCreateMDA, payload);
      if (success) {
        console.log(raw);
      }
    },
    *getAllMDAsRegulations({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getMDAsRegulations, payload);
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
