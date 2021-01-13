import { useState, useEffect } from 'react';
import Link from 'next/link';

const UserAdminPanel = () => {
    const [allUsers, setAllUsers] = useState([]);

    console.log(allUsers)

    useEffect(async () => {
        await fetch(`https://${process.env.AUTH0_DOMAIN}/api/v2/users`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + process.env.AUTH0_BEARER_TOKEN
            }
        }).then(res => res.json())
        .then(res => setAllUsers(res))
    },[])

    const handleDelete = async (e) => {
        let id = e.target.value;
        await fetch(`https://${process.env.AUTH0_DOMAIN}/api/v2/users/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + process.env.AUTH0_BEARER_TOKEN
            }
        })
        const newArr = allUsers.filter((user) => user.user_id != id);
        setAllUsers(newArr);
    }

    return (
        
        <div className="container mx-auto flex flex-col ">
            <Link href="/admin/users/newuser">
            <a
                className="mx-8 my-4 rounded bg-yellow-300 text-gray-900 py-1 px-3 hover:bg-gray-900 hover:text-yellow-300 border border-4 border-yellow-300 w-32"
            >
                Create a User
            </a>
            </Link>
            
            <table className="mx-8 shadow-lg bg-gray-600 rounded">
                <thead>
                    <tr>
                        <th className="bg-yellow-300 border border-4 border-gray-900 text-center px-4 py-2">#</th>
                        <th className="bg-yellow-300 border border-4 border-gray-900 text-center px-4 py-2">Username</th>
                        <th className="bg-yellow-300 border border-4 border-gray-900 text-center px-4 py-2">Email Address</th>
                        <th className="bg-yellow-300 border border-4 border-gray-900 text-center px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { allUsers.map((user) => 
                        <tr key={user.user_id}>
                            <td className="border px-2 py-1 border border-4 border-gray-900 text-center">{ user.user_id }</td>
                            <td className="border px-2 py-1 border border-4 border-gray-900 text-center">{ user.nickname }</td>
                            <td className="border px-2 py-1 border border-4 border-gray-900 text-center">{ user.name }</td>
                            <td className="border px-2 py-1 border border-4 border-gray-900 text-center">
                                <div className="flex justify-evenly">
                                    <button className="rounded px-2 bg-blue-400 border border-blue-400">Edit</button>
                                    <button className="rounded px-2 bg-red-400 border border-red-400" value={user.user_id} onClick={handleDelete}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
                
                <thead>
                    <tr>
                        <th className="bg-yellow-300 border border-4 border-gray-900 text-center px-4 py-2">#</th>
                        <th className="bg-yellow-300 border border-4 border-gray-900 text-center px-4 py-2">Username</th>
                        <th className="bg-yellow-300 border border-4 border-gray-900 text-center px-4 py-2">Email address</th>
                        <th className="bg-yellow-300 border border-4 border-gray-900 text-center px-4 py-2">Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    )

}

export default UserAdminPanel;