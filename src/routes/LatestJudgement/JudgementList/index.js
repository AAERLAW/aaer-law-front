import { connect } from "dva";
import { JudgementList } from "./JudgementList";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading } = state;
  return {};
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "judgement/getAllJudgemnets";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllJudgemnets(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JudgementList);
