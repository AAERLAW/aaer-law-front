import { connect } from "dva";
import { Dashboard } from "./Dashboard";
import { routerRedux } from "dva/router";

const reportEffectURL = "judgement/getAllJudgements";
const regulationItemsEffectURL = "mda/getAllRegulations";
const formsEffectURL = "court/getAllForms";

const mapStateToProps = (state, ownProps) => {
  const { loading, authentication, judgement, mda, court } = state;
  const { judgementList, judgementTotal } = judgement;
  const { regulationList, regulationTotal } = mda;
  const { formList, formTotal } = court;
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  const loadingReports = loading.effects[reportEffectURL];
  const loadingRegulationItems = loading.effects[regulationItemsEffectURL];
  const loadingForms = loading.effects[formsEffectURL];

  return {
    profile,
    judgementList,
    judgementTotal,
    regulationList,
    regulationTotal,
    formList,
    formTotal,
    loadingReports,
    loadingRegulationItems,
    loadingForms,
    isAdmin,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getDashboardStats(data) {
      dispatch({ type: reportEffectURL, payload: data });
      dispatch({ type: regulationItemsEffectURL, payload: data });
      dispatch({ type: formsEffectURL, payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
