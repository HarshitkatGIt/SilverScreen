import { useRef, useCallback } from 'react';

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

export default MovieRow;
