import React from 'react'

const Pagenation = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
  return (
    <nav className="flex justify-center items-center ">
    <ul className="flex items-center justify-center gap-2">
        <li>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2  py-1 text-sm font-medium rounded ${
                    currentPage === 1
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
            >
                Previous
            </button>
        </li>
        {pageNumbers.map(number => (
            <li key={number}>
                <button
                    onClick={() => onPageChange(number)}
                    className={`px-2 py-1 text-sm font-medium rounded ${
                        currentPage === number
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-blue-600 border border-blue-500 hover:bg-blue-100'
                    }`}
                >
                    {number}
                </button>
            </li>
        ))}
        <li>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 text-sm font-medium rounded ${
                    currentPage === totalPages
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
            >
                Next
            </button>
        </li>
    </ul>
</nav>
  )
}

export default Pagenation




  
