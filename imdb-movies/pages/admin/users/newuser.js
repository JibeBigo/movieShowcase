import { useState } from 'react';
import { useRouter } from 'next/router';

const NewUser = () => {
    const [form, setForm] = useState({ username: '', email: '', password: ''});
    const router = useRouter();

    const onChange = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(form.username, form.email, form.password, 'test')
        await fetch(`https://${process.env.AUTH0_DOMAIN}/api/v2/users`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + process.env.AUTH0_BEARER_TOKEN
            },
            body: JSON.stringify ({
                connection: "Username-Password-Authentication",
                nickname: form.username,
                email: form.email,
                password: form.password
            })
        }).then(res => res.json())
        
        router.push('/admin/users')
    }


    return (
        <div className="container mx-auto mt-10 p-4 rounded bg-gray-900 border border-yellow-300 w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-yellow-300 mb-4">Create New User</h1>
                <div>
                    <form onSubmit={onSubmit}>
                        <label className="text-yellow-300">Username</label><br/>
                        <input
                            className="rounded my-1 bg-gray-100 py-1 px-3 font-medium placeholder-gray-700 focus:outline-none"
                            placeholder='Username'
                            name='username'
                            type='text'
                            // value={state.username}
                            onChange={onChange}
                        /><br/>

                        <label className="text-yellow-300">Email</label><br/>
                        <input
                            className="rounded my-1 bg-gray-100 py-1 px-3 font-medium placeholder-gray-700 focus:outline-none"
                            placeholder='Email Address'
                            name='email'
                            type='email'
                            // value={state.email}
                            onChange={onChange}
                        /><br/>

                        <label className="text-yellow-300">
                            Password
                        </label><br/>
                        <input
                            className="rounded my-1 py-1 px-3 font-medium placeholder-gray-700 focus:outline-none"
                            name='password'
                            type='password'
                            // value={state.password}
                            onChange={onChange}
                        /><br/>

                        <button type='submit' className='rounded bg-yellow-300 text-gray-900 py-1 px-4 mt-2'>
                            Create User
                        </button>
                </form>
            </div>
        </div>
    )
}

export default NewUser;