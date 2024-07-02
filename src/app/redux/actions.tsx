// src/actions.ts

import { Dispatch } from 'redux';
import axios from 'axios';
import {
  FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_BY_ID, FETCH_PRODUCT_BY_ID_SUCCESS, FETCH_PRODUCT_BY_ID_FAILURE,
  FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE,
  FETCH_LAYOUTS, FETCH_LAYOUTS_SUCCESS, FETCH_LAYOUTS_FAILURE,
  FETCH_BREADCRUMBS, FETCH_BREADCRUMBS_SUCCESS, FETCH_BREADCRUMBS_FAILURE
} from './constants';

// Define action types
interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
}

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: any;
}

interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: any;
}

interface FetchProductByIdAction {
  type: typeof FETCH_PRODUCT_BY_ID;
  payload: string;
}

interface FetchProductByIdSuccessAction {
  type: typeof FETCH_PRODUCT_BY_ID_SUCCESS;
  payload: any;
}

interface FetchProductByIdFailureAction {
  type: typeof FETCH_PRODUCT_BY_ID_FAILURE;
  payload: any;
}

interface FetchCategoriesAction {
  type: typeof FETCH_CATEGORIES;
}

interface FetchCategoriesSuccessAction {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: any;
}

interface FetchCategoriesFailureAction {
  type: typeof FETCH_CATEGORIES_FAILURE;
  payload: any;
}

interface FetchLayoutsAction {
  type: typeof FETCH_LAYOUTS;
}

interface FetchLayoutsSuccessAction {
  type: typeof FETCH_LAYOUTS_SUCCESS;
  payload: any;
}

interface FetchLayoutsFailureAction {
  type: typeof FETCH_LAYOUTS_FAILURE;
  payload: any;
}

interface FetchBreadcrumbsAction {
  type: typeof FETCH_BREADCRUMBS;
  payload: string;
}

interface FetchBreadcrumbsSuccessAction {
  type: typeof FETCH_BREADCRUMBS_SUCCESS;
  payload: any;
}

interface FetchBreadcrumbsFailureAction {
  type: typeof FETCH_BREADCRUMBS_FAILURE;
  payload: any;
}

// Union type for actions
type ProductActionTypes =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | FetchProductByIdAction
  | FetchProductByIdSuccessAction
  | FetchProductByIdFailureAction
  | FetchCategoriesAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesFailureAction
  | FetchLayoutsAction
  | FetchLayoutsSuccessAction
  | FetchLayoutsFailureAction
  | FetchBreadcrumbsAction
  | FetchBreadcrumbsSuccessAction
  | FetchBreadcrumbsFailureAction;

// Action Creators for Products
export const fetchProducts = () => async (dispatch: Dispatch<ProductActionTypes>) => {
  dispatch({ type: FETCH_PRODUCTS });

  try {
    const response = await axios.get('/api/products/search-products/');
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
  }
};

// Action Creators for Product by ID
export const fetchProductById = (productId: string) => async (dispatch: Dispatch<ProductActionTypes>) => {
  dispatch({ type: FETCH_PRODUCT_BY_ID, payload: productId });

  try {
    const response = await axios.get(`/api/products/get-by-id/${productId}`);
    dispatch({ type: FETCH_PRODUCT_BY_ID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_BY_ID_FAILURE, payload: error });
  }
};

// Action Creators for Categories
export const fetchCategories = () => async (dispatch: Dispatch<ProductActionTypes>) => {
  dispatch({ type: FETCH_CATEGORIES });

  try {
    const response = await axios.get('/api/categories/get-category-hierarchy');
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error });
  }
};

// Action Creators for Layouts
export const fetchLayouts = () => async (dispatch: Dispatch<ProductActionTypes>) => {
  dispatch({ type: FETCH_LAYOUTS });

  try {
    const response = await axios.get('/api/layouts');
    dispatch({ type: FETCH_LAYOUTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_LAYOUTS_FAILURE, payload: error });
  }
};

// Action Creators for Breadcrumbs
export const fetchBreadcrumbs = (categoryId: string) => async (dispatch: Dispatch<ProductActionTypes>) => {
  dispatch({ type: FETCH_BREADCRUMBS, payload: categoryId });

  try {
    const response = await axios.get(`/api/breadcrumbs/get-bread-crumbs/${categoryId}`);
    dispatch({ type: FETCH_BREADCRUMBS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_BREADCRUMBS_FAILURE, payload: error });
  }
};