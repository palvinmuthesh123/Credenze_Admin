export const API_BASE_URL = 'http://ec2-13-234-114-59.ap-south-1.compute.amazonaws.com:1026/api';

export const SEARCH_PRODUCTS = `${API_BASE_URL}/products/search-products/`;
export const SEARCH_PRODUCTS_BY_NAME = `${API_BASE_URL}/products/search-by-name/{productName}`;
export const SEARCH_PRODUCTS_BY_CATEGORY = `${API_BASE_URL}/products/search-by-category/{categoryId}`;
export const GET_PRODUCT_SUGGESTIONS = `${API_BASE_URL}/products/get-suggestions/{searchString}`;
export const GET_PRODUCT_BY_ID = `${API_BASE_URL}/products/get-by-id/{productId}`;

export const GET_LAYOUTS = `${API_BASE_URL}/layouts`;

export const GET_CATEGORY_HIERARCHY = `${API_BASE_URL}/categories/get-category-hierarchy`;

export const GET_BREADCRUMBS = `${API_BASE_URL}/breadcrumbs/get-bread-crumbs/{categoryId}`;
