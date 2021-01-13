import Profile from '../../../components/users/Profile';
// import { useRouter } from 'next/router';
import auth0 from '../../../utils/auth0';

export default function userProfile({ user }) {

    // const router = useRouter();

    return (
        <div className="mx-44 mt-5">
            {/* <Profile id={router.query.id}></Profile> */}
            <Profile user={user}></Profile>
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