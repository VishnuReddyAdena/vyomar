
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SpaceMysteriesPage = () => {
  useEffect(() => {
    let activeCategories = new Set();
    let activeDifficulties = new Set();

    function toggleFilter(button) {
      const filterType = button.dataset.filterType;
      const filterValue = button.dataset.filterValue;

      if (filterType === 'category') {
        if (activeCategories.has(filterValue)) {
          activeCategories.delete(filterValue);
          button.classList.remove('active');
        } else {
          activeCategories.add(filterValue);
          button.classList.add('active');
        }
      } else if (filterType === 'difficulty') {
        // This section is commented out because difficulty buttons were removed from the HTML
        // but the logic is kept for potential future use.
        // if (activeDifficulties.has(filterValue)) {
        //     activeDifficulties.delete(filterValue);
        //     button.classList.remove('active');
        // } else {
        //     activeDifficulties.add(filterValue);
        //     button.classList.add('active');
        // }
      }
      filterMysteries();
    }

    function filterMysteries() {
      const mysteryCards = document.querySelectorAll('article');

      mysteryCards.forEach(card => {
        const cardCategory = card.dataset.category;
        const cardDifficulty = card.dataset.difficulty;

        const categoryMatch = activeCategories.size === 0 || activeCategories.has(cardCategory);
        const difficultyMatch = activeDifficulties.size === 0 || activeDifficulties.has(cardDifficulty);

        if (categoryMatch && difficultyMatch) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    function clearAllFilters() {
      activeCategories.clear();
      activeDifficulties.clear();

      const filterButtons = document.querySelectorAll('.filter-button');
      filterButtons.forEach(button => {
        button.classList.remove('active');
      });
      filterMysteries(); // Show all cards
    }

    document.addEventListener('DOMContentLoaded', filterMysteries);

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => {
      if (button.textContent.includes('Clear All')) {
        button.addEventListener('click', clearAllFilters);
      } else {
        button.addEventListener('click', () => toggleFilter(button));
      }
    });

  }, []);

  return (
    <>
      <Navbar />
      <section className="relative py-16 bg-gradient-to-br from-primary via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-text-secondary rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-text-secondary/80 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-accent/40 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-4 text-balance"> <br /><br /><br />
            Explore <span className="text-accent">Cosmic Mysteries</span>
          </h1>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto text-balance">
            Dive deep into the unexplained phenomena of our universe. From black holes to dark matter, discover the mysteries that challenge our understanding of space.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="w-full">
                <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-3">Categories</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="filter-button" data-filter-type="category" data-filter-value="black-holes">
                    <i className="fas fa-meteor"></i> Black Holes
                  </button>
                  <button className="filter-button" data-filter-type="category" data-filter-value="dark-matter">
                    <i className="fas fa-cloud-moon"></i> Dark Matter
                  </button>
                  <button className="filter-button" data-filter-type="category" data-filter-value="exoplanets">
                    <i className="fas fa-globe-europe"></i> Exoplanets
                  </button>
                  <button className="filter-button" data-filter-type="category" data-filter-value="cosmic-phenomena">
                    <i className="fas fa-atom"></i> Cosmic Phenomena
                  </button>
                  <button className="filter-button" data-filter-type="category" data-filter-value="neutron-stars">
                    <i className="fas fa-star-half-alt"></i> Neutron Stars
                  </button>
                </div>
              </div>
            </div>
            <button className="filter-button">
              <i className="fas fa-times-circle"></i> Clear All
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-10 text-text-primary">
          Featured <span className="text-accent">Cosmic Enigmas</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="mystery-cards-container">
          <article className="bg-surface rounded-cosmic border-cosmic hover:border-accent transition-cosmic-slow cosmic-glow-subtle group" data-category="black-holes" data-difficulty="advanced">
            <div className="relative overflow-hidden rounded-t-cosmic">
              <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Black hole mystery" className="w-full h-48 object-cover group-hover:scale-105 transition-cosmic-slow" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }} />
              <div className="absolute top-3 left-3">
                <span className="bg-accent/90 text-white px-2 py-1 rounded-cosmic-sm text-xs font-medium">Paradox</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-montserrat font-semibold text-lg mb-2 group-hover:text-accent transition-cosmic">
                The Event Horizon Enigma
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                What happens to information at the event horizon? A deep dive into the paradox that challenges our understanding of quantum mechanics and general relativity.
              </p>
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>2.4k views</span>
                  </span>
                </div>
                <a href="#" className="text-accent hover:text-accent/80 transition-cosmic">Read More</a>
              </div>
            </div>
          </article>

          <article className="bg-surface rounded-cosmic border-cosmic hover:border-accent transition-cosmic-slow cosmic-glow-subtle group" data-category="dark-matter" data-difficulty="intermediate">
            <div className="relative overflow-hidden rounded-t-cosmic">
              <img src="https://images.unsplash.com/photo-1543886369-07c89f532a24?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Dark matter concept" className="w-full h-48 object-cover group-hover:scale-105 transition-cosmic-slow" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }} />
              <div className="absolute top-3 left-3">
                <span className="bg-warning/90 text-white px-2 py-1 rounded-cosmic-sm text-xs font-medium">Theory</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-montserrat font-semibold text-lg mb-2 group-hover:text-accent transition-cosmic">
                The Nature of Dark Matter
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                A community discussion on the leading theories for what composes the invisible gravitational scaffolding of the universe.
              </p>
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    <span>23 discussions</span>
                  </span>
                </div>
                <a href="#" className="text-accent hover:text-accent/80 transition-cosmic">Join Discussion</a>
              </div>
            </div>
          </article>

          <article className="bg-surface rounded-cosmic border-cosmic hover:border-accent transition-cosmic-slow cosmic-glow-subtle group" data-category="exoplanets" data-difficulty="beginner">
            <div className="relative overflow-hidden rounded-t-cosmic">
              <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Exoplanet discovery" className="w-full h-48 object-cover group-hover:scale-105 transition-cosmic-slow" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }} />
              <div className="absolute top-3 left-3">
                <span className="bg-success/90 text-white px-2 py-1 rounded-cosmic-sm text-xs font-medium">Discovery</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-montserrat font-semibold text-lg mb-2 group-hover:text-accent transition-cosmic">
                Rogue Planets: Wanderers of Space
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                Discover the recent findings about free-floating planets, unattached to any star, and the secrets they might hold.
              </p>
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>2 days ago</span>
                  </span>
                </div>
                <a href="#" className="text-accent hover:text-accent/80 transition-cosmic">Read More</a>
              </div>
            </div>
          </article>

          <article className="bg-surface rounded-cosmic border-cosmic hover:border-accent transition-cosmic-slow cosmic-glow-subtle group" data-category="cosmic-phenomena" data-difficulty="advanced">
            <div className="relative overflow-hidden rounded-t-cosmic">
              <img src="https://images.unsplash.com/photo-1518173491416-027960682121?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Cosmic phenomena" className="w-full h-48 object-cover group-hover:scale-105 transition-cosmic-slow" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }} />
              <div className="absolute top-3 left-3">
                <span className="bg-error/90 text-white px-2 py-1 rounded-cosmic-sm text-xs font-medium">Unexplained</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-montserrat font-semibold text-lg mb-2 group-hover:text-accent transition-cosmic">
                The Great Attractor's Gravitational Pull
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                Investigate the mysterious gravitational anomaly pulling our entire supercluster of galaxies towards it. What lies at its center?
              </p>
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>1.2k views</span>
                  </span>
                </div>
                <a href="#" className="text-accent hover:text-accent/80 transition-cosmic">Read More</a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SpaceMysteriesPage;
