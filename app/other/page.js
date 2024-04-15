import NavBar from '@/app/components/navbar';
import { cookies } from 'next/headers';

export default function Home() {
  const session = cookies().get('session')?.value;

  return (
    <main className="flex flex-col items-stretch justify-start p-24">
      <header className="bg-sky-700">
        <h1 className="text-white py-2 px-4 text-2xl">Sample Login Logout</h1>
      </header>
      <NavBar session={session} />
      <section className="py-2 px-4">
        <h2 className="text-lg">Other page</h2>
      </section>
    </main>
  );
}
