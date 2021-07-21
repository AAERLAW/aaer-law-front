import { connect } from "dva";
import { Reader } from "./Reader";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, reader } = state;
  const { bookList, activeTab } = reader;
  return {
    bookList,
    activeTab,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname, search) {
      dispatch(routerRedux.push({ pathname, search }));
    },
    saveReader(data) {
      dispatch({ type: "reader/save", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
