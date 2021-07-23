import { connect } from "dva";
import { JudgementList } from "./JudgementList";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, judgement, authentication } = state;
  const { judgementList, judgementTotal, createJudgementModal } = judgement;
  const isLoading = loading.effects["judgement/getAllJudgements"];
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("USER");
  return {
    judgementList,
    judgementTotal,
    createJudgementModal,
    isLoading,
    isAdmin,
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
    onRead(data) {
      dispatch({
        type: "judgement/onRead",
        payload: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JudgementList);
