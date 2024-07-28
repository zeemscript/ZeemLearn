const Navbar = () => {
  const isLoggedIn = false;
  return (
    <nav className="flex justify-between items-center px-3 sm:px-10 py-4">
      <div className="text-ellipsis">Chatapp</div>
      <ul className="flex">
        {isLoggedIn ? (
          <li className="bg-gray-700 hover:bg-gray-500 text-sm sm:text-lg border-none rounded-md px-4 py-2">
            <button>Logout</button>
          </li>
        ) : (
          <>
            <div className="flex gap-4">
              <li className="bg-gray-700 hover:bg-gray-500 text-sm sm:text-lg border-none rounded-md px-4 py-2">
                <button>Login</button>
              </li>
              <li className="bg-gray-700 hover:bg-gray-500 text-sm sm:text-lg border-none rounded-md px-4 py-2">
                <button>Register</button>
              </li>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
