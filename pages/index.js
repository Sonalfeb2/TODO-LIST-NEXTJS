import Head from "next/head";
import Link from "next/link";
export default function Home() {
  

  return (
    <div>
      <Head>
        <title>TODO LIST</title>
      </Head>
      <h1>Welcome to add todo by <Link href="/today">Click here...</Link></h1>
    </div>
  );
}


