let BASE_URL = `http://api.nsirs.ng`;
let SERVER = `:8180/api`;

// PAYSTACK DETAILS
let PAYSTACK_KEY = `payment_key`;
let PAYSTACK_M = `payment_monthly`;
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
