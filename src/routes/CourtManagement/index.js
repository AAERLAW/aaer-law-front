import { connect } from "dva";
import { CourtManagement } from "./CourtManagement";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, court } = state;
  const { courts, courtsTotal, createCourtModal } = court;
  const isLoading = loading.effects["court/getAllCourts"];
  return {
    isLoading,
    courts,
    courtsTotal,
    createCourtModal,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "court/getAllCourts";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllCourts(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCourtModal() {
      dispatch({ type: "court/save", payload: { createCourtModal: true } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourtManagement);
