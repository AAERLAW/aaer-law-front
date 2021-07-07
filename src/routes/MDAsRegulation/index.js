import { connect } from "dva";
import { MDAsRegulation } from "./MDAsRegulation";
import { routerRedux } from "dva/router";
import qs from "query-string";

export const mapStateToProps = (state, ownProps) => {
  let params = qs.parse(window.location.search);

  const { loading, mda } = state;
  const { regulationList, regulationTotal } = mda;
  return {
    regulationList,
    regulationTotal,
    params,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "mda/getAllMDAsRegulations";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllMDAsRegulations(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MDAsRegulation);
