import { redirect } from 'next/server';

export default function Page() {
  redirect('/');
  return <div>Logout page</div>;
}
