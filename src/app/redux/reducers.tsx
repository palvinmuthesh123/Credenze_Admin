// src/reducers.ts

import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_BY_ID, FETCH_PRODUCT_BY_ID_SUCCESS, FETCH_PRODUCT_BY_ID_FAILURE,
  FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE,
  FETCH_LAYOUTS, FETCH_LAYOUTS_SUCCESS, FETCH_LAYOUTS_FAILURE,
  FETCH_BREADCRUMBS, FETCH_BREADCRUMBS_SUCCESS, FETCH_BREADCRUMBS_FAILURE
} from './constants';

interface State {
  loading: boolean;
  data: any;
  error: any;
}

const initialState: State = {
  loading: false,
  data: null,
  error: null,
};

const productsReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const productByIdReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case FETCH_PRODUCT_BY_ID:
      return { ...state, loading: true };
    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_PRODUCT_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const categoriesReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, loading: true };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const layoutsReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case FETCH_LAYOUTS:
      return { ...state, loading: true };
    case FETCH_LAYOUTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_LAYOUTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const breadcrumbsReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case FETCH_BREADCRUMBS:
      return { ...state, loading: true };
    case FETCH_BREADCRUMBS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_BREADCRUMBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  products: productsReducer,
  productById: productByIdReducer,
  categories: categoriesReducer,
  layouts: layoutsReducer,
  breadcrumbs: breadcrumbsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;