import React from 'react'

const Header = () => {
    return (
        <div className="col-start-1 col-end-9 bg-gray-500 text-white flex justify-between md:hidden">
        <a href="/" className="block p-4 text-white font-bold">
          Ricardo Zuñiga DEVELOPER
        </a>
        <button className="p-4 focus:outline-none focus:bg-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    )
}

export default Header
