"use client";
import { useParams } from "next/navigation";
export default function Student() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Student Details</h1>
      {/* Display the student's name with the first letter capitalized */}
      <h2>
        Name:
        {
          // Access the 'student' parameter from 'params'
          params.student.charAt(0).toUpperCase() + // Capitalize the first letter of the student's name
            params.student.slice(1) // Append the rest of the student's name starting from the second character
        }
      </h2>
    </div>
  );
}
