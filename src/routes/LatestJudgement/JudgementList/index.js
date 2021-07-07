import { connect } from "dva";
import { JudgementList } from "./JudgementList";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, judgement } = state;
  const { judgementList, judgementTotal } = judgement;
  return {
    judgementList,
    judgementTotal,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JudgementList);
