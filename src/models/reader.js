import { routerRedux } from "dva/router";

export default {
  namespace: "reader",

  state: {
    bookList: [],
    activeTab: "",
    editFormModal: false,
    editFormData: {},
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {},

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    addBook(state, action) {
      let newBookList = [...state.bookList];

      const existingIndex = newBookList.findIndex(
        (item) => item?.id === action?.payload?.id
      );

      !(existingIndex > -1) && newBookList.push(action.payload);
      return {
        ...state,
        bookList: [...newBookList],
        activeTab: action?.payload?.id,
      };
    },
  },
};
