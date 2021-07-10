import { connect } from "dva";
import { JudgementList } from "./JudgementList";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, judgement } = state;
  const { judgementList, judgementTotal, createJudgementModal } = judgement;
  return {
    judgementList,
    judgementTotal,
    createJudgementModal,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "judgement/getAllJudgements";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllJudgements(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateJudgementModal() {
      dispatch({
        type: "judgement/save",
        payload: { createJudgementModal: true },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JudgementList);
