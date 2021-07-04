import { connect } from "dva";
import { HeaderLayout } from "./headerlayout";
import { routerRedux } from "dva/router";
import { artistMenu, userMenu } from "./menu";

export const mapStateToProps = (state, ownProps) => {
  const { app } = state;
  const { profile, pageTitle, collaspe, menuMode } = app;
  let pathname = window.location.pathname;
  let search = window.location.search;
  let menuList = [];
  if (profile) {
    profile.userRole === "RART" && (menuList = artistMenu);
    profile.userRole === "RUSER" && (menuList = userMenu);
  }

  return {
    profile,
    collaspe,
    pathname,
    search,
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
    logOut() {
      dispatch({ type: "app/logOut" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLayout);
