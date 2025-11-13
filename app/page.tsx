import Link from "next/link";
import './main-page.css';

//Landing page, contains a welcome message and login/signup box
export default function Home() {
  return (
    <div className="main-page backdrop">
      <h1 className="text-outline-2">Welcome to the blog site for everything and anything!</h1>

      <div className="option-box">
        <div className="option">
          <h2>Not a Member? Well You should be!</h2>
          <Link href={"/register"} className="primary-button">Sign up here</Link>
        </div>
        <div className="option">
          <h2>Already a Member? Thanks for coming back!</h2>
          <Link href={"/login"} className="secondary-button">Log in here</Link>
        </div>
      </div>
    </div>
  );
}
