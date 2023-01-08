import React from 'react'
import { useState } from 'react'
export default function UseStateWithArray() {

    const initialproductList = [
        {
            productName: 'Redmi',
            model: 'xxl',
            price: 15000
        },
        {
            productName: 'xioami',
            model: 'xxl',
            price: 15000
        },
        {
            productName: 'oppo',
            model: 'xxl',
            price: 15000
        }
    ];

    const [productsList, setProducts] = useState(initialproductList);


    const addProduct = () => {
        const newData = [...productsList];
        newData.push({ productName: 'Apple', model: 'small', price: '40000' });
        setProducts(newData);
    }

    const updateProduct = (index) => {
        const newData = [...productsList];
        const updateObject = productsList[index];
        updateObject.price = 7000000000000;
        newData[index] = updateObject;
        setProducts(newData);
    }

    const deleteProduct = () => {

    }


    return (
        <>
            <div>
                {
                    productsList.map((x, i) => {
                        return <><div>{x.productName}/{x.price}/index - {i}  <button onClick={() => { updateProduct(i) }}>Update Product</button></div></>
                    })
                }
            </div>
            <button onClick={addProduct}>Add Product</button>

            <button onClick={deleteProduct}>Delete Product</button>
        </>
    )
}
