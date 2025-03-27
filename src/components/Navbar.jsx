import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem("user");
    logout();
    alert("Account deleted successfully!");
    navigate("/");
  };

  return (
    <nav className="bg-purple-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="relative">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center">
          <span className="mr-2">{user?.email}</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            👤
          </div>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded p-2 w-40">
            <p className="text-sm">{user?.email}</p>
            <button onClick={handleLogout} className="block w-full text-left mt-2 text-red-500">Logout</button>
            <button onClick={handleDeleteAccount} className="block w-full text-left mt-2 text-red-700">Delete Account</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
