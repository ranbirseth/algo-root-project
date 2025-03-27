import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const mockData = [
    { name: "Eleanor", email: "eleanor@example.com" },
    { name: "Samuel", email: "samuel@example.com" },
    { name: "Victoria", email: "victoria@example.com" },
    { name: "Benjamin", email: "benjamin@example.com" },
    { name: "Sophia", email: "sophia@example.com" },
    { name: "Jackson", email: "jackson@example.com" },
    { name: "Isabella", email: "isabella@example.com" },
    { name: "William", email: "william@example.com" },
    { name: "Mia", email: "mia@example.com" },
    { name: "Alexander", email: "alexander@example.com" },
];

const Details = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2;

  const sortedData = [...mockData]
    .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const displayedData = sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-60">
        <Navbar />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">User Details</h2>

          <input
            type="text"
            placeholder="Search by name..."
            className="border p-2 rounded w-full mb-4"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="bg-purple-500 text-white p-2 rounded mb-4">
            Sort {sortOrder === "asc" ? "🔼" : "🔽"}
          </button>

          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((user) => (
                <tr key={user.id} className="border">
                  <td className="border p-2">{user.id}</td>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-between">
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="bg-gray-500 text-white p-2 rounded">
              Prev
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="bg-gray-500 text-white p-2 rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
