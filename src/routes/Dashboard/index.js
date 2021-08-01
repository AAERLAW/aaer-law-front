import { connect } from "dva";
import { Dashboard } from "./Dashboard";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, authentication } = state;
  const { profile } = authentication;
  return {
    profile,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
