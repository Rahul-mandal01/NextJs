"use client"
import Link from 'next/link';
import {useRouter} from "next/navigation";
export default function AboutNotFound(){
    const router = useRouter();
    return(
        <div>
            <h1>This about page is not available</h1>

            <br/>
            <br/>

            <Link href="/">Go on Home Page</Link>
            <br/>
            <br/>

            <button onClick={() =>router.push("/")}>Go on Home Page</button>
        </div>
    );
}