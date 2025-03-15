import { create } from 'zustand';
import axios from 'axios';

const useBearStore = create((set) => ({
    bears: 0,
    books: [],
    book: {},
    increase: () => set((state) => ({ bears: state.bears + 1 })),
    decrease: () => set((state) => ({ bears: state.bears - 1 })),
    getBooks: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            set({ books: response.data });
        } catch (error) {
            console.error(error);
        }
    },
    getBookDetails: async (id) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            set({ book: response.data });
        } catch (error) {
            console.error(error);
        }
    },
    reset: () => set({ bears: 0 })
}));

export default useBearStore;