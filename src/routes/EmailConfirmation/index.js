import { connect } from "dva";
import { createForm } from "rc-form";
import { EmailConfirmation } from "./EmailConfirmation";
import { routerRedux } from "dva/router";
import qs from "query-string";

export const mapStateToProps = (state, ownProps) => {
  const { token } = qs.parse(window.location.search);
  const { loading } = state;
  return {
    token,
    isLoading: loading.effects["authentication/emailConfirmation"],
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    emailConfirmation(data) {
      dispatch({ type: "authentication/emailConfirmation", payload: data });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(EmailConfirmation));
