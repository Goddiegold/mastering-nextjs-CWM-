import Link from "next/link";
import UsersTable from "./UsersTable";
import { Suspense } from "react";

interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {

    return (
        <>
            <h1>Users Page</h1>
            <Link href={"/users/new"} className="btn btn-primary">New User</Link>
            {/* <Suspense fallback={<p>Loading...</p>}> */}
                <UsersTable sortOrder={sortOrder} />
            {/* </Suspense> */}
        </>
    );
}

export default UsersPage;