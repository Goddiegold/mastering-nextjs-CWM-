import Link from "next/link";
import { sort } from "fast-sort";

interface User {
    id: number,
    name: string,
    email: string
}

interface Props {
    sortOrder: string
}


const UsersTable = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 10 }
    })

    const users: User[] = await res.json()

   const sortedUsers =  sort(users).asc(sortOrder === "email" ? user => user.email : user => user.name)
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        {/* <th>Name</th> */}
                        {/* <th>Email</th> */}
                        <th>
                            <Link href={"/users?sortOrder=name"}>Name</Link>
                        </th>
                        <th>
                            <Link href={"/users?sortOrder=email"}>Email</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((item, idx) => (<tr key={idx}>
                        <td>{item.name}</td>
                        <td>{item.email} </td>
                    </tr>))}
                </tbody>
            </table>
        </>
    );
}

export default UsersTable;