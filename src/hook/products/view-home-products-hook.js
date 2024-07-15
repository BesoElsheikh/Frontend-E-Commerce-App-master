import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../redux/actions/productsAction';

const ViewHomeProductsHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getAllProducts(4)) 


     }, [dispatch])
 
    const allProducts = useSelector((state) => state.allproducts.allProducts)
console.log(allProducts?.data)
    let items = [];
    try { 
        if (allProducts?.data)
            items = allProducts?.data;
        else
            items = []
    } catch (e) { }

    return [items]

}

export default ViewHomeProductsHook