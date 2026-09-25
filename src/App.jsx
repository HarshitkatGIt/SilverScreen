import { useState } from 'react';
import poster from './assets/poster.jpg';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';
import './App.css';

export const movies = [
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

export const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Movies', href: '#' },
  { label: 'TV Shows', href: '#' },
  { label: 'Anime', href: '#' },
  { label: 'Porn', href: '#' },
  { label: 'Hentai', href: '#' },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <div className={`app ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        <button className="hamburger" onClick={toggleSidebar} aria-label="Toggle menu">
          <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${sidebarOpen ? 'open' : ''}`}></span>
        </button>
        <Navbar />
        <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

        <main className="main-content">
          <div className="hero">
            <img src={poster} alt="Movie poster" className="hero-img" />
          </div>

          <MovieRow title="Most Popular" movies={movies.slice(0, 10)} />
          <MovieRow title="Top Rated" movies={movies.slice(0, 8)} />
          <MovieRow title="On Netflix" movies={movies.slice(2, 10)} />
          <MovieRow title="I am Horny" movies={movies.slice(4, 12)} />
          <MovieRow title="Masterpieces" movies={movies} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
