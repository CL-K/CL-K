import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        {/*
        <div className="nav-right">
          <Link href="#">Sign up</Link>
          <Link href="#">Log in</Link>
        </div>
        */}
      </nav>
    </div>
  );
}