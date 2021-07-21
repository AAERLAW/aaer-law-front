import { connect } from "dva";
import { HeaderLayout } from "./headerlayout";
import { routerRedux } from "dva/router";
import { artistMenu, userMenu } from "./menu";

export const mapStateToProps = (state, ownProps) => {
  const { app, authentication } = state;
  const { pageTitle, collaspe, menuMode } = app;
  const { profile } = authentication;
  let menuList = [];
  if (profile) {
    profile.userRole === "RART" && (menuList = artistMenu);
    profile.userRole === "RUSER" && (menuList = userMenu);
  }

  return {
    profile,
    collaspe,
    pageTitle,
    menuList,
    menuMode,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname, search) {
      dispatch(routerRedux.push({ pathname: `${pathname}`, search: search }));
    },
    setCollaspe(value) {
      dispatch({ type: "app/save", payload: { collaspe: value } });
    },
    logOut(data) {
      dispatch({ type: "authentication/logOut", payload: data ? data : {} });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLayout);
