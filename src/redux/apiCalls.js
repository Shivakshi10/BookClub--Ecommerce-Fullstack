import { publicRequest,userRequest } from "../requestMethods";
import { loginStart, loginSuccess, logininFailure } from "./userRedux"
import {getProductStart,getProductSuccess,
    getProductFailure,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,

} from "./productRedux"

export const login = async( dispatch,user) =>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(logininFailure())
    }
}

export const getProducts = async( dispatch) =>{
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data));
    }catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProducts = async( id,dispatch) =>{
    dispatch(deleteProductStart());
    try{
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    }catch(err){
        dispatch(deleteProductFailure());
    }
};

export const updateProducts = async( id,product,dispatch) =>{
    dispatch(updateProductStart());
    try{
       // const res = await userRequest.delete(`/products/${id}`);
        dispatch(updateProductSuccess({id:id,product:product}));
    }catch(err){
        dispatch(updateProductFailure());
    }
};

export const addProducts = async( product,dispatch) =>{
    dispatch(addProductStart());
    try{
        const res = await userRequest.post(`/products`,product);
        dispatch(addProductSuccess(res.data));
    }catch(err){
        dispatch(addProductFailure());
    }
};