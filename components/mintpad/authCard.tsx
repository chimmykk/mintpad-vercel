import { ReactNode } from "react";
import Logo from "./logo";

export default function Layout({ children }: {children:ReactNode}) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-10 px-6 sm:pt-0">
      <div className="flex items-center">
        <Logo />
      </div>

      <div className="w-full sm:max-w-md mt-10 p-6 sm:p-20 bg-mintpad-800 border-mintpad-900 overflow-hidden rounded-md">
        {children}
      </div>
    </div>
  );
}
