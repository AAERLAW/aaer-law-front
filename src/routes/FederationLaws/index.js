import { connect } from "dva";
import { FederationLaws } from "./FederationLaws";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading } = state;
  return {};
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "law/getAllLaws";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getFederalLaws(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FederationLaws);
