
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/collections">
      <div className="">
        <img src="/images/logo-white.svg" className="h-[35px] darkmode-on" />
      </div >
    </Link>
  );
}
