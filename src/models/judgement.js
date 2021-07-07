import { getJudgements } from "../services/judgement";

const initialState = {
  judgementList: [
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      id: 1,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      id: 2,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      id: 3,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      id: 4,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      id: 5,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      id: 6,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      id: 7,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      id: 8,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      id: 9,
    },
    {
      lead_judgement_by: "Ugochukwu Anthony Ogakwu, JCA",
      suit_number: "(2021)LPELR-54417(CA)",
      judgement_date: "06-09-2021",
      case_title: "AINA V.STATE",
      id: 10,
    },
  ],
  judgementTotal: 36,
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
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
