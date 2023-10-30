import { create } from 'zustand';

const useResultsStore = create((set) => ({
    results: null,
    setResults: (results) => set(() => ({ results: results })),
}));

const useLoadingStore = create((set) => ({
    loading: false,
    setLoading: (loading) => set(() => ({ loading: loading })),
}));

const useQueryStore = create((set) => ({
    query: '',
    setQuery: (query) => set(() => ({ query: query })),
}));

export default { useResultsStore, useLoadingStore, useQueryStore };