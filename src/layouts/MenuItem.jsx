import { Link } from "react-router-dom";

export default function MenuItem({ to, name, active }) {
  return (
    <Link to={to}>
      <div className={`hover:text-teal-200 mr-8 inline-block ${active ? "underline " : ""}`}>
        {/* <div className={`px-4 py-3 rounded-md text-lg font-medium text-gray-300 ${active ? "" : "hover:bg-gray-700 hover:text-white"}`}> */}
        {name}
      </div>
    </Link>
  );
}
