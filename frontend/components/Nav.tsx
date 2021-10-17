import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex justify-self-end text-3xl my-0 mx-0">
      <Link href="/planning">
        <a className="flex items-center hover:bg-gray-100 hover:underline uppercase text-base cursor-pointer px-4 py-4 transition-colors duration-7000 ease-out">Planning</a>
      </Link>
      <Link href="/">
        <a className="flex items-center hover:bg-gray-100 hover:underline uppercase text-base cursor-pointer px-4 py-4 transition-colors duration-7000 ease-out">All Orders</a>
      </Link>
      <Link href="/drivers">
        <a className="flex items-center hover:bg-gray-100 hover:underline uppercase text-base cursor-pointer px-4 py-4 transition-colors duration-7000 ease-out">All Drivers</a>
      </Link>
    </nav>
  );
}
