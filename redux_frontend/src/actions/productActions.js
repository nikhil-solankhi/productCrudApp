import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const GET_PRODUCT = 'GET_PRODUCT';

const API_URL = 'http://localhost:8080/products';

export const getProducts = () => async dispatch => {
    const response = await axios.get(API_URL);
    dispatch({ type: GET_PRODUCTS, payload: response.data });
};

export const addProduct = product => async dispatch => {
    const response = await axios.post(API_URL, product);
    dispatch({ type: ADD_PRODUCT, payload: response.data });
};

export const deleteProduct = id => async dispatch => {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: DELETE_PRODUCT, payload: id });
};

export const updateProduct = product => async dispatch => {
    const response = await axios.put(API_URL, product);
    dispatch({ type: UPDATE_PRODUCT, payload: response.data });
};

export const getProduct = id => async dispatch => {
    const response = await axios.get(`${API_URL}/${id}`);
    dispatch({ type: GET_PRODUCT, payload: response.data });
};
