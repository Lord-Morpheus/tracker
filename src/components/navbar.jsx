import { Link } from "react-router-dom";
import Logo from "../assets/icon.svg";
export default function Navbar() {
  return (
    <div className="bg-gray-500 text-white">
      <div className="flex">
        <img src={Logo} alt="Logo" />   
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <p>streak</p>
      </div>
    </div>
  );
}
