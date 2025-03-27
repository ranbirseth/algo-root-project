import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-gray-800 text-white p-4 fixed">
        <div className="flex items-center gap-2 mb-4">
            <img className="h-10" src="https://buddhanexus.net/src/assets/img/tree.png" alt="" />
            <h1>Algo Root </h1>
        </div>
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2">
          <Link to="/details" className="block p-2 bg-purple-800 rounded">Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
