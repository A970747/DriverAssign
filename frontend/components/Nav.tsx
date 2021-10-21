import Link from 'next/link';

export default function Nav() {
  const anchorStyle = 'flex items-center hover:bg-gray-100 hover:underline uppercase text-base cursor-pointer px-4 py-4 transition-colors duration-7000 ease-out';

  return (
    <nav className="flex text-3xl my-0 mx-0">
      <Link href="/planning">
        <a className={anchorStyle}>Planning</a>
      </Link>
      <Link href="/">
        <a className={anchorStyle}>All Orders</a>
      </Link>
      <Link href="/drivers">
        <a className={anchorStyle}>All Drivers</a>
      </Link>
    </nav>
  );
}
