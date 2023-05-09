import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from './Store.js';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(store);
    }, [])

    return (<div>
        <h1>Products</h1>
        {products.map(el => {
            return (
                <div key={el.id}>
                    <Link to={`/product/${el.id}`}>{el.title}</Link>
                </div>
            )
        })}
    </div>);
}

export default Products;