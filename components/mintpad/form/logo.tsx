import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/collections">
      <div className="">
        <Image width={1000} height={1000} alt='pic' src="/images/logo-white.svg" className="h-[35px] darkmode-on" />
      </div >
    </Link>
  );
}
