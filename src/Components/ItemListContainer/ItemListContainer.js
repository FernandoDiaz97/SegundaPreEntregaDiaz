import { useState, useEffect } from "react";
import {getProducts, getProductByCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const Itemlistcontainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const { categoryId} = useParams()

    useEffect(() => {
        
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if(categoryId){
            const queryfilter = query(queryCollection,where('category', '==', categoryId))
            getDocs(queryfilter)
        .then(res => setProducts(res.docs.map(products => ({id: products.id, ...products.data()}))))
        }else(
            getDocs(queryCollection)
            .then(res => setProducts(res.docs.map(products => ({id: products.id, ...products.data()}))))
        )
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        /* const asyncFunc = categoryId ? getProductByCategory : getProducts
        asyncFunc(categoryId)
            .then(Response => {
            setProducts(Response)
            })
            .catch(error => {
                console.error(error)
            })*/
    },[categoryId])

    return(
        <div className="grid">

            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )

}

export default Itemlistcontainer;