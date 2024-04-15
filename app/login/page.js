import { redirect } from 'next/server';

export default function Page() {
  redirect('/');
  return <div>Login page</div>;
}
