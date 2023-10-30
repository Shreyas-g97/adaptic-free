'use client'

import './globals.css'
import React from 'react';
import { adapticServer } from '@/utils/helpers';
import Navbar from './components/Navbar';
import { useRouter } from 'next/navigation';
import useStore from './results'
import Loading from './components/Loading';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Home() {
  // const [query, setQuery] = React.useState<string>('');
  const query = useStore.useQueryStore(state => state.query);
  const setQuery = useStore.useQueryStore(state => state.setQuery);
  const setResults = useStore.useResultsStore(state => state.setResults);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(adapticServer + 'chain/search', { // Replace with the correct Flask server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      setResults(data);
      setError(null);
      console.log(data);
      router.push('/results');

    } catch (err) {
      setError('An error occurred while fetching data.');
      console.error(err);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Query entered:', query);
      setLoading(true);
      handleSearch();
    }
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
  return (
    <>
    <Navbar sidebar={false}/>
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className='w-full text-center bg-blue-100 p-7'>
        <h1 className='text-3xl text-blue-800'>Welcome to Adaptic AI Trial Research</h1>
      </div>
      <div className="container mx-auto p-8 mt-64 mb-auto">
        <h1 className="text-3xl font-semibold mb-4 text-center">Ask a research question</h1>
        <input
          type="text"
          className="border border-2 border-blue-300 rounded-lg p-4 w-full"
          placeholder="Enter your research question"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    </main>
    </>
  );
}
}
