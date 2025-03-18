// app/actions.js
"use server";

import axios from "axios";

export async function getBooksData (page = 1) {
    try {
      const bookData = await axios.get(`https://softgenie.org/api/books?page=${page}`);
      return bookData.data;
    } catch (error) {
      console.error("Error fetching books:", error);
      return null;
    }
  }