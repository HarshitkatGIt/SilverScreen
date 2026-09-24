import { navLinks } from '../App';

function Sidebar({ isOpen, onToggle }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="sidebar-link"
            onClick={onToggle}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
