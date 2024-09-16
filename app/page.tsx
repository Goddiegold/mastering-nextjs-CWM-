import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import backgroundImage from "@/public/images/backgorund.jpg";
import { Metadata } from "next";

// export default async function Home() {
//   const session = await getServerSession(authOptions)
//   return (
//     <>
//       <h1>Welcome {session && <span>{session.user?.name}</span>}</h1>
//       <Link href="/users">users page</Link>
//       <ProductCard />
//     </>
//   );
// }
export default async function Home() {
  return (
    <main className="relative h-screen">
      {/* <Image
        src={backgroundImage}
        alt="background iamge"
        fill
        style={{ objectFit: "cover" }}
        className="object-cover"
        sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <h1 className="font-inter">hello world</h1>
    </main>
  );
}

//for staic content
// export const metadata:Metadata = {
//   title:"..."
// }

//for dynamic content
export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("/api/products")

  return {
    title: "[product.title]",
    description: "[product.details]"
  }
}
