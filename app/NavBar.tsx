"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
    const { status, data: session } = useSession()
    const isAuthenticated = status === "authenticated";
    const isLoading = status === "loading";
    return (
        <div className="flex my-5 bg-slate-200 space-x-3">
            <Link href={"/"} className="mr-5">Next.js</Link>
            <Link href={"/users"}>Users</Link>
            {!isLoading && (
                // <>  
                !isAuthenticated ?
                    <Link href={"/api/auth/signin"}>Login</Link> :
                    <div className="flex flex-row items-center">
                        <h1>Hello {session.user?.name} 👋</h1>
                        <Link href={"/api/auth/signout"}>Sign Out</Link>
                    </div>
                // </>
            )}
        </div>
    );
}

export default NavBar;