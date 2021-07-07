import { connect } from "dva";
import { MDAs } from "./MDAs";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, mda } = state;
  const { itemList, totalItem, createMdaModal } = mda;
  return {
    itemList,
    totalItem,
    createMdaModal,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "mda/getAllMDAs";
  return {
    fetchActionURL,
    redirect(pathname, search) {
      dispatch(routerRedux.push({ pathname, search }));
    },
    getMDAs(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateModal() {
      dispatch({ type: "mda/save", payload: { createMdaModal: true } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MDAs);
