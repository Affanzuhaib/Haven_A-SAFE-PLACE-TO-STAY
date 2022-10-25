import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarcontainer">
          <span className="logo">HAVEN </span>
          <div className="navItems">
            <span>My Favourites</span>
            <button className="navButton">Login</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar