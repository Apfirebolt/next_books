import { create } from 'zustand';
import axios from 'axios';

const useBearStore = create((set) => ({
    bears: 0,
    book: {},
    increase: () => set((state) => ({ bears: state.bears + 1 })),
    decrease: () => set((state) => ({ bears: state.bears - 1 })),
    getBookDetails: async (id) => {
        try {
            const response = await axios.get(`https://softgenie.org/api/books/${id}`);
            set({ book: response.data });
        } catch (error) {
            console.error(error);
        }
    },
    reset: () => set({ bears: 0 })
}));

export default useBearStore;