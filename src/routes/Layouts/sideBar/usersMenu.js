const usersMenu = [
  {
    title: " ",
    list: [
      { icon: "icon-grid", label: "Dashboard", pathname: "/dashboard" },
      {
        icon: "icon-clipboard",
        label: "Law Reports",
        pathname: "/law-reports",
      },
      {
        icon: "icon-layout",
        label: "Laws Of The Federation",
        pathname: "/federation-laws",
      },
      {
        icon: "icon-codepen",
        label: "Regulations of MDAs",
        pathname: "/regulation",
      },
      {
        icon: "icon-file-text",
        label: "Rules of Court",
        pathname: "/court-rules",
      },
      {
        icon: "icon-briefcase",
        label: "Court Forms",
        pathname: "/court-forms",
      },
//       {
//         icon: "icon-copy",
//         label: "Precedents",
//         pathname: "/court-forms/items?court_form_id=8&name=Precedents",
//       },
      {
        icon: "icon-file-minus",
        label: "Reader",
        pathname: "/reader",
      },
    ],
  },
];

export default usersMenu;
