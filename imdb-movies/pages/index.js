import { useEffect } from 'react';
import auth0 from '../utils/auth0';


export default function Home({ user }) {
  const postUserMongo = (newUser) => {
    if (newUser.sub.startsWith('google')) {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: newUser.given_name,
          email: `${newUser.nickname}@gmail.com`,
          is_admin: false
        })
      })
    } else {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: newUser.nickname,
          email: newUser.name,
          is_admin: false
        })
      })
    }
  }

  useEffect(() => {
    if (user != null) {
      postUserMongo(user);
    }
  }, []);

  return (
    <div>   
      <div>
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
