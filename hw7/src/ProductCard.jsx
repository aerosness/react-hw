import React, { useState } from 'react';

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="./assets/react.svg"
        alt="Product"
      />
      
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">Продукт</h2>
        <p className="text-gray-600 mt-2">Описание продукта. Это описание продукта, который можно добавить в корзину.</p>
        <div className="flex items-center mt-4">
          <span className="text-xl font-bold text-gray-700">Цена: $49.99</span>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-16 px-2 py-1 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
            >
              Добавить в корзину
            </button>
          </div>
        </form>

        {formSubmitted && (
          <div className="mt-4 text-green-600">
            <p>Товар добавлен в корзину! Количество: {quantity}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
