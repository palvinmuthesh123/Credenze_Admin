export const API_BASE_URL = 'http://ec2-13-234-114-59.ap-south-1.compute.amazonaws.com:1026/api';
export const API_BASE_URL1 = 'http://ec2-13-234-114-59.ap-south-1.compute.amazonaws.com:1027/api';

export const COMPARE_PRODUCTS = `${API_BASE_URL}/products/compare-products/`;
export const SEARCH_PRODUCTS = `${API_BASE_URL}/products/search-products/`;
export const SEARCH_PRODUCTS_BY_NAME = `${API_BASE_URL}/products/search-by-name/`;
export const SEARCH_PRODUCTS_BY_CATEGORY = `${API_BASE_URL}/products/search-by-category/`;
export const GET_PRODUCT_SUGGESTIONS = `${API_BASE_URL}/products/get-suggestions/`;
export const GET_PRODUCT_BY_ID = `${API_BASE_URL}/products/get-by-id/`;
export const GET_PRODUCT_BY_PINCODE = `${API_BASE_URL}/product-logistics?productId=`;

export const GET_LAYOUTS = `${API_BASE_URL}/layouts`;
export const GET_CATEGORY_HIERARCHY = `${API_BASE_URL}/categories/get-category-hierarchy`;
export const GET_BREADCRUMBS = `${API_BASE_URL}/breadcrumbs/get-bread-crumbs/`;

export const GET_OTP = `${API_BASE_URL1}/login/send-otp`
export const VERIFY_OTP = `${API_BASE_URL1}/login/sign-in`
export const SIGN_UP = `${API_BASE_URL1}/login/sign-up`
export const SIGN_IN_WITH_GOOGLE_AUTH = `${API_BASE_URL1}/login/sign-in/by-google-auth`;
export const RESEND_OTP = `${API_BASE_URL1}/login/resend-otp/`;

export const GET_PRODUCT_REVIEWS_BY_PRODUCT = `${API_BASE_URL1}/product-reviews/get-reviews-by-product/`;
export const PRODUCT_REVIEW = `${API_BASE_URL1}/product-reviews`;

export const ORDER = `${API_BASE_URL1}/orders`;
export const GET_ORDERS_BY_CUSTOMER = `${API_BASE_URL1}/orders/customer/`;

export const CUSTOMERS = `${API_BASE_URL1}/customers`;
export const GET_CURRENT_CUSTOMER = `${API_BASE_URL1}/customers/me`;

export const CART = `${API_BASE_URL1}/carts`;
export const GET_CART_BY_SESSION = `${API_BASE_URL1}/carts/session/`;
export const GET_CART_BY_CUSTOMER = `${API_BASE_URL1}/carts/customer/`;

export const ADDRESS = `${API_BASE_URL1}/address`;

export const CREATE_PAYMENT_WEBHOOK = `${API_BASE_URL1}/payments/webhook`;
export const CREATE_NEW_PAYMENT_WEBHOOK = `${API_BASE_URL1}/payments/webhook-new`;
export const CREATE_PAYMENT_ORDER = `${API_BASE_URL1}/payments/createOrder`;