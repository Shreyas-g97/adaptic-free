'use client'

import './globals.css'
import React from 'react';
import { adapticServer } from '@/utils/helpers';
import Navbar from './components/Navbar';
import { useRouter } from 'next/navigation';
import useStore from './results'

export default function Home() {
  const [query, setQuery] = React.useState<string>('');
  const setResults = useStore.useResultsStore(state => state.setResults);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(adapticServer + 'llama/search', { // Replace with the correct Flask server URL
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
      handleSearch();
    }
  };

  return (
    <>
    <Navbar />
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className='w-full text-center bg-blue-100 p-7'>
        <h1 className='text-3xl text-blue-800'>Welcome to Adaptic AI Trial Research</h1>
      </div>
      <div className="container mx-auto p-8 mt-64 mb-auto">
        <h1 className="text-3xl font-semibold mb-4 text-center">Ask a research question</h1>
        <input
          type="text"
          className="border border-2 border-blue-500 rounded-lg p-4 w-full"
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
