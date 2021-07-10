import { getJudgements, postJudgements } from "../services/judgement";

const initialState = {
  judgementList: [
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      court_id: 1,
      id: 1,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      court_id: 2,
      id: 2,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      court_id: 3,
      id: 3,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      court_id: 4,
      id: 4,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      court_id: 5,
      id: 5,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      court_id: 6,
      id: 6,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      court_id: 7,
      id: 7,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      court_id: 8,
      id: 8,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      court_id: 9,
      id: 9,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      court_id: 10,
      id: 10,
    },
  ],
  judgementTotal: 36,
  createJudgementModal: false,
};
export default {
  namespace: "judgement",

  state: { ...initialState },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *getAllJudgements({ payload }, { call, put }) {
      const { raw, success, message } = yield call(getJudgements, payload);
      if (success) {
        console.log(raw);
      }
    },
    *createJudgement({ payload }, { call, put }) {
      const { raw, success, message } = yield call(postJudgements, payload);
      if (success) {
        console.log(raw);
      } else {
        console.log(message);
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
