"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  }
  return (
    <div className={styles.page}>
      <div>
        <h1> Fetch data with API in Server Component </h1>
        <Link href="/productlist">Go to Product Page</Link>
      </div>
    </div>
  );
}

