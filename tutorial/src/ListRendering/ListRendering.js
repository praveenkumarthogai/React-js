import React from 'react'

export default function ListRendering() {


    const productList = [
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
    ]

//index can also be used as key if no unique property (condition - static & will not be altered)
    return (
        <div>
            {
                productList.map((x) => {
                    console.log(x);
                    return (
                        <div key={x.productName}>
                            <div>{x.productName}</div>
                            <div>{x.model}</div>
                            <div>{x.price}</div>
                        </div>)
                })
            }
        </div>
    )
}
