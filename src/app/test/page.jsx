'use client';

import { useState, useEffect } from 'react';

const TestPage = () => {

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await apiData.json();
        console.log(jsonData);
      }
        catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  
  let arr = [1, 2, 3, 4, 5];
  let squares = arr.map(num => num * num);
  console.log('Squares:', squares);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center pt-10">Test Page</h1>
    </div>
  );
}

export default TestPage;