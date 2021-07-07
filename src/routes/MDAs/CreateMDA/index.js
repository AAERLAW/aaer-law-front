import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateMDA } from "./CreateMDA";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, mda } = state;
  const isLoading = loading.effects["mda/createMDA"];
  const { createMdaModal } = mda;
  return {
    createMdaModal,
    isLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createMDA(data) {
      dispatch({ type: "mda/createMDA", payload: data });
    },
    closeModal() {
      dispatch({ type: "mda/save", payload: { createMdaModal: false } });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateMDA));
