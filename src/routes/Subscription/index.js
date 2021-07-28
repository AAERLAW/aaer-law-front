import { connect } from "dva";
import { Subscription } from "./Subscription";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, authentication } = state;
  const { openPaymentModal, subscriptionDetail } = authentication;
  return {
    openPaymentModal,
    subscriptionDetail,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    openModal(data) {
      dispatch({
        type: "authentication/save",
        payload: { openPaymentModal: true, subscriptionPlan: data },
      });
    },
    getAllSubscriptionPlans(data) {
      dispatch({
        type: "authentication/getAllSubscriptionPlans",
        payload: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
