import Link from 'next/link';
import './about.css';
export default function Layout({ children }) {
  return (
    <div>
      <un className="about-menu">
        <li>
          <h4>About Navbar</h4>
        </li>
        <li>
          <Link href="/about">About Main</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">About College</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">About Student</Link>
        </li>
      </un>
      {children}
    </div>
  );
}
