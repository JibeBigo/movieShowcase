import 'tailwindcss/tailwind.css';

const Navbar = ({ user }) => {

    return(
    <nav>
        <div className="flex justify-between items-center bg-gray-900 w-full h-16 px-4">
            <div className="text-2xl font-bold text-yellow-300 md:text-3xl font-squada">
                <a href="#">IMDB Movies</a>
            </div>
            <div className="flex">
                {user.props.user ? (
                    <a
                        href="/api/auth/logout"
                        className="rounded bg-yellow-300 text-gray-900 py-2 px-4 hover:bg-gray-900 hover:text-yellow-300 border border-4 border-yellow-300"
                    >
                        Logout
                    </a>
                ) : (
                    <a
                        href="/api/auth/login"
                        className="rounded bg-yellow-300 text-gray-900 py-2 px-4 hover:bg-gray-900 hover:text-yellow-300 border-2 border-yellow-300"
                    >
                        Sign in / Sign up
                    </a>
                )}
            </div>
        </div>
    </nav>
    )
}

export default Navbar;