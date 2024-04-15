import Link from 'next/link';

export default function NavBar({ session }) {
  console.log('navbar', session);
  return (
    <nav className="py-4 px-6 bg-sky-500 text-white flex flex-row justify-start align-middle gap-8">
      <Link href="/" className="p-2 underline">
        Home
      </Link>
      {!session && (
        <Link href="/login" className="p-2 underline">
          Login
        </Link>
      )}
      {session && (
        <Link href="/other" className="p-2 underline">
          Other
        </Link>
      )}
      {session && (
        <Link href="/logout" className="p-2 underline">
          Logout
        </Link>
      )}
    </nav>
  );
}
