import { useState, useRef, useCallback } from 'react';
import poster from './assets/poster.jpg';
import './App.css';

function MovieRow({ title, movies }) {
  const scrollRef = useRef(null);
  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 500, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-scroll-wrapper">
        <div className="section-scroll" ref={scrollRef}>
          <div className="movie-grid">
            {movies.map((movie) => (
              <div key={movie.title} className="movie-card">
                <div className="movie-card-img" style={{ background: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)', fontSize: '48px' }}>
                  🎬
                </div>
                <div className="movie-card-title">{movie.title}</div>
                <div className="movie-card-meta">
                  <span className="movie-card-type">{movie.type}</span>
                  <span className="movie-card-year">{movie.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow-btn-left" onClick={() => scroll(-1)} aria-label="Scroll left">&#8592;</button>
        <button className="arrow-btn-right" onClick={() => scroll(1)} aria-label="Scroll right">&#8594;</button>
      </div>
    </div>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const movies = [
    { title: 'Movie One', type: 'Movie', year: '2024' },
    { title: 'Show One', type: 'Show', year: '2023' },
    { title: 'Movie Two', type: 'Movie', year: '2022' },
    { title: 'Show Two', type: 'Show', year: '2021' },
    { title: 'Action Hero', type: 'Movie', year: '2024' },
    { title: 'Comedy Nights', type: 'Show', year: '2023' },
    { title: 'Thriller X', type: 'Movie', year: '2022' },
    { title: 'Drama Queen', type: 'Show', year: '2021' },
    { title: 'Sci-Fi World', type: 'Movie', year: '2025' },
    { title: 'Mystery Lane', type: 'Show', year: '2020' },
    { title: 'Romance Bloom', type: 'Movie', year: '2023' },
    { title: 'Horror Night', type: 'Show', year: '2022' },
  ];

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Movies', href: '#' },
    { label: 'TV Shows', href: '#' },
    { label: 'Anime', href: '#' },
    { label: 'Porn', href: '#' },
    { label: 'Hentai', href: '#' },
  ];

  return (
    <div className={`app ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="sidebar-link"
              onClick={toggleSidebar}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
      <button className="hamburger" onClick={toggleSidebar} aria-label="Toggle menu">
        <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
      </button>
      <nav className="navbar">
        <div className="navbar-search">
          <input type="text" placeholder="Search movies..." />
        </div>
        <button className="navbar-about">About</button>
      </nav>
      <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

      <main className="main-content">
        <div className="hero">
          <img src={poster} alt="Movie poster" className="hero-img" />
        </div>
        <h1>Hillo</h1>

        <MovieRow title="Most Popular" movies={movies.slice(0, 10)} />
        <MovieRow title="Top Rated" movies={movies.slice(0, 8)} />
        <MovieRow title="On Netflix" movies={movies.slice(2, 10)} />
        <MovieRow title="I am Horny" movies={movies.slice(4, 12)} />
        <MovieRow title="Masterpieces" movies={movies} />
      </main>
    </div>
  );
}

export default App;

