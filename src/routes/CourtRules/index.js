import { connect } from "dva";
import { CourtRules } from "./CourtRules";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, court } = state;
  const { rules, rulesTotal } = court;
  const isLoading = loading.effects["court/getAllRules"];
  return {
    isLoading,
    rules,
    rulesTotal,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "court/getAllRules";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllRules(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourtRules);
