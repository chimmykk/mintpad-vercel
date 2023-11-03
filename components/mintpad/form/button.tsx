

import React from 'react';

interface ButtonProps {
  loading: boolean | string;
  children: React.ReactNode;
  className?: string; // Make className optional
}

export default function Button({ loading, children, className }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading === true || loading === 'true'} // Set disabled based on boolean or 'true' string
      className={`inline-block font-medium relative px-3 xl:px-10 py-2.5 text-xs border border-transparent bg-primary-600 rounded-md text-white text-center hover:bg-primary-700 active:bg-primary-700 focus:outline-none focus:border-primary-700 disabled:opacity-25 transition ease-in-out duration-150 ${className}`}
    >
      {loading && (
        <p className="absolute left-3 text-lg fa-solid fa-spinner animate-spin">haha</p>
      )}
      {children}
    </button>
  );
}
