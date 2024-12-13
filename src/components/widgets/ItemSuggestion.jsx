import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemSuggestion = () => {
    const [products, setProducts] = useState([]);

    // Fetch product data from API
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://66602e275425580055b2a55d.mockapi.io/product');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img
                        src={product.pdt_img}
                        alt={product.pdt_name}
                        className="w-full h-56 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.pdt_name}</h3>
                    <p className="text-lg text-gray-600 mb-3">Price: ${product.price}</p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-full transition-colors duration-300 hover:bg-blue-700 focus:outline-none">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemSuggestion;
