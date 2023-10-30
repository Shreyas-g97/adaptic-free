'use client'

import { adapticServer } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import useStore from "../results";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
    const router = useRouter();
    const query = useStore.useQueryStore(state => state.query);
    const setQuery = useStore.useQueryStore(state => state.setQuery);
    const setResults = useStore.useResultsStore(state => state.setResults);
    const [error, setError] = React.useState<string | null>(null);

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
          setResults(null);
          handleSearch();
        }
      };

    return (
        <div className="container mx-auto p-8 mb-auto">
        <input
          type="text"
          className="border border-2 border-blue-300 rounded-lg p-4 w-full"
          placeholder="Enter your research question"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    );
};

export default SearchBar;
