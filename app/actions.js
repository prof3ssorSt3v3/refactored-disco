import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function login() {
  let response = NextResponse.redirect();
  response.cookies.set('session', Math.random().toString(16).substring(2, 8), {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60,
  });
  return response;
}
export function logout() {
  let response = NextResponse.next();
  response.cookies.set('session', '', {
    path: '/',
    httpOnly: true,
    maxAge: 0,
  });
  return response;
}
