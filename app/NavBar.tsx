import Link from "next/link";

const NavBar = () => {
    return (  
        <div className="flex my-5 bg-slate-200 space-x-3">
            <Link href={"/"} className="mr-5">Next.js</Link>
            <Link href={"/users"}>Users</Link>
            <Link href={"/api/auth/signin"}>Login</Link>
        </div>
    );
}
 
export default NavBar;