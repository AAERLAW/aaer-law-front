let BASE_URL = `https://www.aaerlawapp.com`;
let SERVER = `:8180/api`;

// PAYSTACK DETAILS DEMO
// let PAYSTACK_KEY = `pk_test_e54eee45276d2070cae3c28ba2e9ec0c255c347a`;
// let PAYSTACK_BASIC = `PLN_x5ph554tlmfcal0`;
// let PAYSTACK_BASIC_ONEOFF = `PLN_1wo3wx9oqh1pva9`;
// let PAYSTACK_PROF = `PLN_gpjhs6xccsujtti`;
// let PAYSTACK_PROF_ONEOFF = `PLN_3u0wfrsnvelhfes`;

// PAYSTACK DETAILS LIVE
let PAYSTACK_KEY = `pk_live_c356a8c846ccb3fbd05f71b2240e874c2531a9d6`;
let PAYSTACK_BASIC = `--`;
let PAYSTACK_BASIC_ONEOFF = `PLN_z3o30mdshhiahdq`;
let PAYSTACK_PROF = `--`;
let PAYSTACK_PROF_ONEOFF = `PLN_1nscvuqx394to86`;

module.exports = {
  endpoint: `${BASE_URL}${SERVER}`,
  BASE_URL,
  SERVER,
  PAYSTACK_KEY,
  PAYSTACK_BASIC,
  PAYSTACK_BASIC_ONEOFF,
  PAYSTACK_PROF,
  PAYSTACK_PROF_ONEOFF,
};
