"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push("/login/" + page);
  };
  return (
    <div>
      <h1 className="heading">Login Page</h1>
      <Link href="/">Go to Home Page</Link>

      <br />
      <br />

      {/* <button onClick={() => router.push("/login/collegelogin")}>College Login</button> */}
      <button onClick={() => navigate("teacherlogin")}>
        Go to Teacher Login Page
      </button>

      <br />
      <br />

      <button onClick={() => navigate("studentlogin")}>
        Go to Student Login Page
      </button>
    </div>
  );
};

export default Login;
