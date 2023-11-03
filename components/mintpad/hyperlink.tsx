
import Link from 'next/link';
import { ReactNode } from 'react';

interface DynamicLinkProps {
    href: string;
    children: ReactNode;
  }

export default function DynamicLink({ href, children }: DynamicLinkProps) {

  return (
    <Link href={href}>
      <div className="text-primary-600 hover:text-primary-700 hover:underline active:bg-primary-700 transition ease-in-out duration-150">
        {children}
      </div>
    </Link>
  );
}

