import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateJudgement } from "./CreateModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, judgement, court } = state;
  const { createJudgementModal } = judgement;
  const { courts } = court;
  const isLoading = loading.effects["judgement/createJudgement"];
  const isCourtsLoading = loading.effects["court/getAllCourts"];
  return {
    createJudgementModal,
    isLoading,
    courts,
    isCourtsLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createJudgement(data) {
      dispatch({ type: "judgement/createJudgement", payload: data });
    },
    getAllCourts(data) {
      dispatch({ type: "court/getAllCourts", payload: data });
    },
    closeModal() {
      dispatch({
        type: "judgement/save",
        payload: { createJudgementModal: false },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateJudgement));
