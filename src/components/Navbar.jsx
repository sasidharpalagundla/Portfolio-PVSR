import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          {'<'}
          <span>PVSR</span>
          {' />'}
        </a>

        <ul className={`navbar-links${mobileOpen ? ' open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              id="theme-toggle"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{ display: 'none' }}
            id="theme-toggle-mobile-hidden"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
