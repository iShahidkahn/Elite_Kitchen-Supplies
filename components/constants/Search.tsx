'use client'
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const SearchBar: React.FC = () => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        // Clicked outside the search bar, so collapse it
        setExpanded(false);
      }
    };

    // Add a click event listener to the entire document
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setExpanded(!isExpanded);
  };

  const handleEnterClick = () => {
    setLoading(true);

    // Simulate loading for 1 second
    setTimeout(() => {
      setLoading(false);
      setExpanded(false);
    }, 1000);
  };

  return (
    <div className="relative" ref={searchBarRef}>
      <div
        className={`flex items-center cursor-pointer p-2 transition-transform ease-in-out duration-300 ${
          isExpanded ? 'transform rotate-90' : ''
        }`}
        onClick={toggleSearch}
      >
        {isLoading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin h-6 w-6 text-black-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        ) : (
         <Image src="/icons/search.svg" width={20} height={0} alt='image'/>
        )}
       
      </div>
      <div
        className={`absolute right-0  z-50	 mt-2 w-64 bg-white border rounded-lg shadow-lg flex transition-all ease-in-out duration-300 ${
          isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 focus:outline-none"
        />
        <button
          onClick={handleEnterClick}
          className={`${
            isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'
          } text-white px-4 hover:bg-blue-600 focus:outline-none`}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Enter'}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
