import getUsers from '../../../services/getUsers'
import Link from 'next/link';
export default async function Page(){
    const getUsersList = getUsers();
    const users = await getUsersList;
    // console.log(users);
    return (
        <div>
            <h1>Users List</h1>
            {
                users.map((user,id) => (
                    <h2 key={id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </h2>
                ))
            }
        </div>
    )
}