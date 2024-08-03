import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <Link href="/users">users page</Link>
      <ProductCard/>
    </>
  );
}
