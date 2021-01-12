import { useEffect } from 'react';
import auth0 from '../utils/auth0';


export default function Home({ user }) {

  const postUserMongo = (newUser) => {
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
    }).then(res => res.json())
    .then(res => console.log(res))
  }

  useEffect(() => {
    if (user != null) {
      postUserMongo(user);
    }
  }, []);

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
