import { connect } from "dva";
import { Search } from "./Search";
import { routerRedux } from "dva/router";
import qs from "query-string";

export const mapStateToProps = (state, ownProps) => {
  let params = qs.parse(window.location.search);
  const { loading, authentication } = state;
  const { profile } = authentication;
  console.log({ params });
  return {
    profile,
    params,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname, search) {
      dispatch(routerRedux.push({ pathname: `${pathname}`, search }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
