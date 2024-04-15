import { login, logout } from '@/app/actions';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  // console.log('without config this runs on all pages');

  if (request.nextUrl.pathname == '/') {
    //home
    return NextResponse.next();
  }
  if (request.nextUrl.pathname == '/other') {
    //other
    if (request.cookies.get('session')?.value) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(request.nextUrl.origin + '/');
    }
  }
  if (request.nextUrl.pathname == '/login') {
    //login
    // return login();
    let response = NextResponse.redirect(request.nextUrl.origin + '/?=' + Date.now());
    response.cookies.set('session', Math.random().toString(16).substring(2, 8), {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60,
    });
    return response;
  }
  if (request.nextUrl.pathname == '/logout') {
    //logout
    // return logout();
    let response = NextResponse.redirect(request.nextUrl.origin + '/?=' + Date.now());
    response.cookies.set('session', '', {
      path: '/',
      httpOnly: true,
      maxAge: 0,
    });
    return response;
  }
}
