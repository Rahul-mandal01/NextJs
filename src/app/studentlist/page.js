import Link from "next/link";
export default function StudentList() {
  const students = ["rahul", "john", "peter", "sam", "alice"];

  return (
    <div>
      <h1>Student List</h1>
      {/* <ul>
        <li>
          <Link href="/studentlist/rahul">Rahul</Link>
        </li>

        <li>
          <Link href="/studentlist/john">John</Link>
        </li>

        <li>
          <Link href="/studentlist/peter">Peter</Link>
        </li>

        <li>
          <Link href="/studentlist/sam">Sam</Link>
        </li>

        <li>
          <Link href="/studentlist/alice">Alice</Link>
        </li>
      </ul> */}

      {/* ALTERNATIVE WAY */}

      <ul>
        {students.map((student) => (
          <li key={student}>
            <Link href={`/studentlist/${student}`}>
              {/* This expression is used to display the student's name with the first letter capitalized. 
                student.charAt(0).toUpperCase() takes the first character of the student string and converts it to uppercase.
                student.slice(1) takes the rest of the student string starting from the second character.
                The + operator concatenates these two parts, resulting in the student's name with the first letter capitalized. */}


                        {student.charAt(0).toUpperCase() + student.slice(1)}

                        
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
