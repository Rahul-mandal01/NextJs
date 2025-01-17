"use client";
import Link from "next/link";
import styles from "./page.module.css";



export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <h1> Fetch data with API in Client Component </h1>
        <Link href="/productlist">Go to Product Page</Link>
      </div>
    </div>
  );
}

