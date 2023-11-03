

import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import { cn } from '@/lib/utils';

interface InputProps {
  id: string;
  type: string; // Add the 'type' prop
  modelValue: string;
  onUpdateModelValue: (value: string) => void;
  required?: boolean; // Add optional 'required' prop
  autoFocus?: boolean;
  autoComplete?: string; // Add optional 'autoComplete' prop
  // Add other props with appropriate types
}

function Input({
  id,
  type,
  modelValue,
  onUpdateModelValue,
  required,
  autoFocus,
  autoComplete,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (inputRef.current && autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdateModelValue(e.target.value);
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <input
      className={cn(
        'inline-block w-full mb-4 rounded-md px-3 py-2 font-graphikRegular text-sm text-white  bg-primary-100 border border-mintpad-900 placeholder:text-gray-400 outline-none  focus:border-mintpad-700 dark:bg-mintpad-500 disabled:text-mintpad-300 disabled:border-primary-100 disabled:bg-mintpad-500',
        { '!border-red-600': showError }
      )}
      type={type}
      value={modelValue}
      onChange={handleInput}
      ref={inputRef}
      onFocus={handleFocus}
      {...props}
    />
  );
}

export default Input;
