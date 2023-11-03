
import Link from 'next/link';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const ShowPassword = ({ children }: { children: (props: { type: string }) => React.ReactNode }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const toggleShowPassword = (state: boolean) => {
      setShowPassword(state);
    };
  
    return (
      <span className="inline-block w-full relative">
        <Link
          href="#"
          className="absolute top-[8px] right-3"
          onClick={(e) => {
            e.preventDefault();
            toggleShowPassword(!showPassword);
          }}
          tabIndex={-1}
        >
         {showPassword ? 
         <Eye size={20}/>
         : 
         <EyeOff size={20}/>
          }
        </Link>
        {children({ type: showPassword ? 'text' : 'password' })}
      </span>
    );
  };
  
  export default ShowPassword;
  