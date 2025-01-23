"use client"
export default function Page() {
  return (
    <div>
      <script
        src="/location.js"
        onLoad={() => {
          console.log("Script loaded");
        }}
      />
      <h1>Get user GeoLocation</h1>
    </div>
  );
}
