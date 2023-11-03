
import { ReactNode } from 'react';

interface ButtonProps {
  loading: boolean | string;
  children: ReactNode;
}

export default function Button({ loading, children }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-block font-medium relative px-3 xl:px-10 py-2.5 text-xs bg-primary-600 border border-transparent rounded-md text-white text-center hover:bg-primary-700 active:bg-primary-700 focus:outline-none focus:border-primary-700 disabled:opacity-25 transition ease-in-out duration-150"
    >
      {loading && (
        <i className="absolute left-3 text-lg fa-solid fa-spinner animate-spin" />
      )}
      {children}
    </button>
  );
}
