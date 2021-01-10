import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useContext } from 'react';
import auth0 from '../utils/auth0';
import dbConnect from '../utils/dbConnect';


export default function Home({ user }) {
  return (
    <div className="max-w-xl m-auto p-2">
      <Head>
        <title>IMDB Movie App</title>
      </Head>

      <main>
        <nav>
          <div className="flex items-center justify-between py-4  ">
              <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-gray-800 md:text-3xl">
                      <a href="#">IMDB Movies</a>
                  </div>
              </div>
              <div className="flex">
                  {user ? (
                      <a
                          href="/api/auth/logout"
                          className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
                      >
                          Logout
                      </a>
                  ) : (
                      <a
                          href="/api/auth/login"
                          className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
                      >
                          Login
                      </a>
                  )}
              </div>
          </div>
        </nav>
        
        <div>
          <h1>Hello from HomePage</h1>
          {user ? (
            <div>
              { user.nickname }
            </div>
          ) : (
            <div></div>
          )}
        </div>

      </main>
  </div>
  )
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  
  return {
      props: {
        user: session?.user || null,
      },
  };
}
