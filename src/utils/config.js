let BASE_URL = `https://www.aaerlawapp.com`;
let SERVER = `:8180/api`;

// PAYSTACK DETAILS
let PAYSTACK_KEY = `pk_test_da0f827f5acb7784f1d563c830faa494c6aef8d9`;
let PAYSTACK_M = `PLN_y7q8mhnca1vfve9`;
let PAYSTACK_M_ONEOFF = `payment_month_oneoff`;
let PAYSTACK_Y = `payment_yearly`;
let PAYSTACK_Y_ONEOFF = `payment_year_oneoff`;

module.exports = {
  endpoint: `${BASE_URL}${SERVER}`,
  BASE_URL,
  SERVER,
  PAYSTACK_KEY,
  PAYSTACK_M,
  PAYSTACK_M_ONEOFF,
  PAYSTACK_Y,
  PAYSTACK_Y_ONEOFF,
};
