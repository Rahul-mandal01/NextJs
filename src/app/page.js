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
        <h1>Basic Routing | Make New Page</h1>

        {/* LINKING */}
        <Link href="/login">Go to Login Page</Link>
        <br />
        <br />
        <Link href="/about">Go to About Page</Link>
        <br />
        <br />

        {/* PROGRAMMATIC NAVIGATION */}
        {/* <button onClick={() => router.push("/login")}>Go to Login Page</button>
        <br />
        <br />
        <button onClick={() => router.push("/about")}>Go to About Page</button> */}

        {/* Alternative */}

        <button onClick={() => navigate("/login")}>Go to Login Page</button>
        <br />
        <br />
        <button onClick={() => navigate("/about")}>Go to About Page</button>

      </div>
    </div>
  );
}
