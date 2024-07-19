// import react from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Connect
          </a>
          <a
            href="/plans"
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Plans
          </a>
          <a
            href="/chat"
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Chat
          </a>
        </div>
        <div>
          <a
            href="/signin"
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
