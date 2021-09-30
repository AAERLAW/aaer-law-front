import { connect } from "dva";
import { Dashboard } from "./Dashboard";
import { routerRedux } from "dva/router";

const reportEffectURL = "judgement/getAllJudgements";
const regulationItemsEffectURL = "mda/getAllRegulationItems";
const formsEffectURL = "court/getAllForms";

const mapStateToProps = (state, ownProps) => {
  const { loading, authentication, judgement, mda, court } = state;
  const { judgementList, judgementTotal } = judgement;
  const { regulationItemsList, regulationItemsTotal } = mda;
  const { formList, formTotal } = court;
  const { profile } = authentication;

  const loadingReports = loading.effects[reportEffectURL];
  const loadingRegulationItems = loading.effects[regulationItemsEffectURL];
  const loadingForms = loading.effects[formsEffectURL];

  return {
    profile,
    judgementList,
    judgementTotal,
    regulationItemsList,
    regulationItemsTotal,
    formList,
    formTotal,
    loadingReports,
    loadingRegulationItems,
    loadingForms,
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
