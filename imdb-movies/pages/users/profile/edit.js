import auth0 from '../../../utils/auth0';
import ProfileEdit from '../../../components/users/ProfileEdit';

const EditProfile = ({ user }) => {
    return (
        <div>
            <ProfileEdit user={user}></ProfileEdit>
        </div>
    )
}

export default EditProfile;

export async function getServerSideProps(context) {
    const session = await auth0.getSession(context.req);
    
    return {
        props: {
            user: session?.user || null,
        },
    };
}