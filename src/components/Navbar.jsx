function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-search">
        <input type="text" placeholder="Search movies..." />
      </div>
      <button className="navbar-about">About</button>
    </nav>
  );
}

export default Navbar;
