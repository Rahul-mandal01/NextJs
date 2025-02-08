import { API_BASE_URL } from "@/config/constants";

export default function Home() {
  console.log(process.env.DB_PASSWORD);
  console.log(process.env.SERVER_PASSWORD);
  console.log(process.env.CUSTOM_MODE);
  return (
    <main>
      {process.env.NODE_ENV == "development" ? (
        <h1>You are on Development Mode</h1>
      ) : (
        <h1>You are on Production Mode</h1>
      )}
      <h1>Environmet variable in Next.js</h1>

      <h1>{API_BASE_URL}</h1>
    </main>
  );
}
