'use client'

import React from 'react';
import useBearStore from '../../store';

const BooksPage = () => {
    const getBooks = useBearStore((state) => state.getBooks);
    const bears = useBearStore((state) => state.bears);
    const increase = useBearStore((state) => state.increase);
    const decrease = useBearStore((state) => state.decrease);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                <h1 className="text-2xl font-bold mb-4">Our Books {bears}</h1>
                <p className="text-gray-700 mb-4">
                    Discover our wide range of books that cater to all readers.
                </p>
                <p className="text-gray-700">
                    Whether you are looking for fiction, non-fiction, or educational books, we have something for everyone.
                </p>
                <div className="flex justify-center items-center my-3">
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={increase}>Increase</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2' onClick={decrease}>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default BooksPage;