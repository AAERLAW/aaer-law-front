import { connect } from "dva";
import { SideBar } from "./sideBar";
import { routerRedux } from "dva/router";

import artistMenu from "./artistMenu";
import usersMenu from "./usersMenu";

const mapStateToProps = (state, ownProps) => {
  const { app } = state;
  const { profile, openMediaMenu, menuMode } = app;
  const { collaspe } = ownProps;

  let dataList = usersMenu;

  return {
    profile,
    openMediaMenu,
    collaspe,
    dataList,
    pathname: state.routing.location.pathname,
    menuMode,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { toggleSidebar } = ownProps;
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    toggleSidebar,
    toggleMediaMenu(data, mode) {
      dispatch({
        type: "app/save",
        payload: { openMediaMenu: data, menuMode: mode },
      });
    },
    setPageTitle(pageTitle) {
      dispatch({
        type: "app/save",
        payload: { pageTitle },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
