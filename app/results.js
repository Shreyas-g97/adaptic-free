import { create } from 'zustand';

const useResultsStore = create((set) => ({
    results: null,
    setResults: (results) => set(() => ({ results: results })),
}));

const useLoadingStore = create((set) => ({
    loading: false,
    setLoading: (loading) => set(() => ({ loading: loading })),
}));

export default { useResultsStore, useLoadingStore };