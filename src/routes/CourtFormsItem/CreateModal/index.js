import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateModal } from "./CreateModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, court, auxillary } = state;
  const { createCourtItemModal } = court;
  const { stateList } = auxillary;
  const isLoading = loading.effects["court/createCourtFormsItem"];
  return {
    createCourtItemModal,
    stateList,
    isLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createCourtFormsItem(data) {
      dispatch({ type: "court/createCourtFormsItem", payload: data });
    },
    getAllStates(data) {
      dispatch({ type: "auxillary/getAllStates", payload: data });
    },
    closeModal() {
      dispatch({
        type: "court/save",
        payload: { createCourtItemModal: false },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateModal));
