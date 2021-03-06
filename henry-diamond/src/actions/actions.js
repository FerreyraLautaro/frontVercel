import React from "react";
import {
    FILTER,
    URL,
    GET_PRODUCT,
    ALL_ITEMS,
    ALL_CAREGORY,
    ALL_SUBCATEGORY
} from "./typeActions";
// import {getProduct} from '../../../../PF-G1-BACKEND/src/controllers/productControllers'
import axios from "axios";


// const axios = require('axios')


export function getAllitemsByName(name){
    // console.log('estoy en la action'
    return async (dispatch) =>{
        let allProducts = await axios.get(`${URL}product?name=${name}`)
        console.log(allProducts)
        return dispatch({
            type: GET_PRODUCT,
            payload: allProducts.data
            
        })
    }
}

export function getAllItems(){
    return async (dispatch) =>{
        let allItems = await axios.get(`${URL}product`)
        return dispatch({
            type: ALL_ITEMS,
            payload: allItems.data
            
        })
    }
}

export const FilterBy = ({category,subcategory,limite,desde}) => {
    if(limite){
        return async (dispatch) => {
            let filterProducts = await axios.get (`${URL}product/category?category=${category}&subcategory=${subcategory}&limite=${limite}&desde=${desde}`)
            console.log(filterProducts)
            return dispatch ({
                type: FILTER,
                payload: filterProducts.data
            })        
    }}else{
        return async (dispatch) => {
            let filterProducts = await axios.get (`${URL}product/category?category=${category}&subcategory=${subcategory}&desde=${desde}`)
            console.log(filterProducts)
            return dispatch ({
                type: FILTER,
                payload: filterProducts.data
            }) 
    }
        
    }
}



export const Category = ()=>{
    return dispatch => {
        axios
        .get (`${URL}category`)
        .then((res) => {
           
        dispatch ({
            type: ALL_CAREGORY,
            payload: res.data
        })        
        })
    }

}
export const SubCategory = ()=>{
    return dispatch => {
        axios
        .get (`${URL}subcategory`)
        .then((res) => {
         
        dispatch ({
            type: ALL_SUBCATEGORY,
            payload: res.data
        })        
        })
    }

}
