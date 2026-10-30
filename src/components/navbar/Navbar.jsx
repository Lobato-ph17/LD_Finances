import './Navbar.css' 

function Navbar() {
  return (
    <nav className="navbar">
        <span className="navbar-logo">...</span>
        <ul className="navbar-links">
            <li><a href="/">Início</a></li>
            <li><a href="/">Transações</a></li>
            <li><a href="/">Adicionar</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
