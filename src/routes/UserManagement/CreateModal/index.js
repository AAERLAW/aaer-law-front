import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateModal } from "./CreateModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, users } = state;
  const { createUsersModal } = users;
  const isLoading = loading.effects["court/createUser"];
  return {
    createUsersModal,
    isLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createUser(data) {
      dispatch({ type: "users/createUser", payload: data });
    },
    closeModal() {
      dispatch({ type: "users/save", payload: { createUsersModal: false } });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateModal));
