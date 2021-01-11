import { useEffect, useContext } from 'react';
import auth0 from '../utils/auth0';


export default function Home({ user }) {
  return (
    <div>   
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
  </div>
  );
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  
  return {
      props: {
        user: session?.user || null,
      },
  };
}
