
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-text-secondary rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-text-secondary/80 rounded-full animate-pulse delay-1500"></div>
            <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-accent/40 rounded-full animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Explore the <span className="text-accent">Infinite</span> Mysteries of Space
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto text-balance font-lato">
              Dive into cosmic puzzles, unravel space mysteries, and connect with fellow explorers in the ultimate space discovery platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="space_mysteries_page.html" className="bg-accent text-white px-8 py-4 rounded-cosmic font-semibold hover:bg-accent/80 transition-cosmic cosmic-glow">
                Discover Mysteries
              </a>
              <a href="what_if_scenarios_page.html" className="border border-cosmic-accent text-accent px-8 py-4 rounded-cosmic font-semibold hover:bg-accent/10 transition-cosmic">
                Explore What If
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-16 featured-discoveries-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-lato font-bold mb-4 text-white">Featured Discoveries</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-lato">
              Explore our most captivating mysteries, challenging puzzles, and thought-provoking theories from the community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            <article className="bg-surface rounded-cosmic border-cosmic hover:border-accent transition-cosmic-slow cosmic-glow-subtle group">
              <div className="relative overflow-hidden rounded-t-cosmic">
                <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Black hole mystery" className="w-full h-48 object-cover group-hover:scale-105 transition-cosmic-slow" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }} />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent/90 text-white px-2 py-1 rounded-cosmic-sm text-xs font-medium">Mystery</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-lato font-semibold text-lg mb-2 group-hover:text-accent transition-cosmic">
                  The Event Horizon Paradox
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  What happens when information falls into a black hole? Explore the fascinating paradox that challenges our understanding of physics.
                </p>
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span>2.4k</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>186</span>
                    </span>
                  </div>
                  <a href="article_reading_page.html" className="text-accent hover:text-accent/80 transition-cosmic">Read More</a>
                </div>
              </div>
            </article>

            <article className="bg-surface rounded-cosmic border-cosmic hover:border-accent transition-cosmic-slow cosmic-glow-subtle group">
              <div className="relative overflow-hidden rounded-t-cosmic">
                <img src="https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Space puzzle challenge" className="w-full h-48 object-cover group-hover:scale-105 transition-cosmic-slow" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }} />
                <div className="absolute top-3 left-3">
                  <span className="bg-success/90 text-white px-2 py-1 rounded-cosmic-sm text-xs font-medium">Puzzle</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-lato font-semibold text-lg mb-2 group-hover:text-accent transition-cosmic">
                  Orbital Mechanics Challenge
                </h3>
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>847 solved</span>
                    </span>
                  </div>
                  <span className="text-warning font-medium">★★★☆☆</span>
                </div>
              </div>
            </article>

            <article className="bg-surface rounded-cosmic border-cosmic hover:border-accent transition-cosmic-slow cosmic-glow-subtle group">
              <div className="relative overflow-hidden rounded-t-cosmic">
                <img src="https://images.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg" alt="Nebula theory" className="w-full h-48 object-cover group-hover:scale-105 transition-cosmic-slow" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }} />
                <div className="absolute top-3 left-3">
                  <span className="bg-warning/90 text-white px-2 py-1 rounded-cosmic-sm text-xs font-medium">Theory</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-lato font-semibold text-lg mb-2 group-hover:text-accent transition-cosmic">
                  Multiverse Navigation Theory
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  A community theory exploring how advanced civilizations might navigate between parallel universes.
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
                  <span className="text-accent">By: Dr. Sarah Chen</span>
                </div>
              </div>
            </article>

            <article className="bg-surface rounded-cosmic border-cosmic hover:border-accent transition-cosmic-slow cosmic-glow-subtle group">
              <div className="relative overflow-hidden rounded-t-cosmic">
                <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Exoplanet discovery" className="w-full h-48 object-cover group-hover:scale-105 transition-cosmic-slow" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }} />
                <div className="absolute top-3 left-3">
                  <span className="bg-error/90 text-white px-2 py-1 rounded-cosmic-sm text-xs font-medium">Discovery</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-lato font-semibold text-lg mb-2 group-hover:text-accent transition-cosmic">
                  Kepler-442b: Earth's Twin?
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  Recent analysis suggests this exoplanet might harbor conditions suitable for life as we know it.
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
                  <a href="article_reading_page.html" className="text-accent hover:text-accent/80 transition-cosmic">Read More</a>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center">
            <button className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-cosmic font-semibold hover:bg-white/20 transition-cosmic">
              <a href="space_mysteries_page.html">Load More Content</a>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 community-highlights-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-lato font-bold mb-4 text-white">Community Highlights</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-lato">
              Discover trending discussions and recent submissions from our community of space explorers.
            </p>
          </div>

          <div className="community-card backdrop-blur-sm rounded-cosmic border border-white/20 p-6">
            <h3 className="font-lato font-semibold text-xl mb-6 flex items-center text-white">
              <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Recent Submissions
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-medium text-sm mb-1 text-white">Quantum Entanglement Communication Theory</h4>
                <p className="text-white/70 text-xs mb-2">Submitted by Dr. Elena Vasquez</p>
                <p className="text-white/70 text-xs">A theoretical framework for instantaneous communication across galactic distances using quantum entanglement principles.</p>
                <div className="mt-2 flex items-center space-x-2 text-xs">
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-cosmic-sm">Theory</span>
                  <span className="text-white/70">3 hours ago</span>
                </div>
              </div>
              <div className="border-l-2 border-success pl-4">
                <h4 className="font-medium text-sm mb-1 text-white">Interactive Pulsar Navigation Puzzle</h4>
                <p className="text-white/70 text-xs mb-2">Submitted by CodeCosmos Team</p>
                <p className="text-white/70 text-xs">Navigate a spacecraft using pulsar signals in this challenging interactive puzzle based on real astronomical data.</p>
                <div className="mt-2 flex items-center space-x-2 text-xs">
                  <span className="bg-success/20 text-success px-2 py-1 rounded-cosmic-sm">Puzzle</span>
                  <span className="text-white/70">6 hours ago</span>
                </div>
              </div>
              <div className="border-l-2 border-warning pl-4">
                <h4 className="font-medium text-sm mb-1 text-white">The Great Filter: Are We Alone?</h4>
                <p className="text-white/70 text-xs mb-2">Submitted by Cosmic Philosopher</p>
                <p className="text-white/70 text-xs">An exploration of the Great Filter hypothesis and its implications for the future of human civilization.</p>
                <div className="mt-2 flex items-center space-x-2 text-xs">
                  <span className="bg-warning/20 text-warning px-2 py-1 rounded-cosmic-sm">Mystery</span>
                  <span className="text-white/70">12 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 quick-access-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-lato font-bold mb-4 text-white">Quick Access</h2>
            <p className="text-white/90 text-lg font-lato">Jump into your favorite space exploration activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="space_mysteries_page.html" className="group quick-access-card backdrop-blur-sm rounded-cosmic border border-white/20 hover:border-white/40 transition-cosmic-slow cosmic-glow-subtle p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-cosmic mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-cosmic">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-lato font-semibold mb-2 text-white group-hover:text-accent transition-cosmic">Explore Mysteries</h3>
              <p className="text-white/80 text-sm">Dive into unsolved cosmic puzzles</p>
            </a>

            <a href="what_if_scenarios_page.html" className="group quick-access-card backdrop-blur-sm rounded-cosmic border border-white/20 hover:border-white/40 transition-cosmic-slow cosmic-glow-subtle p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-cosmic mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-cosmic">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-lato font-semibold mb-2 text-white group-hover:text-accent transition-cosmic">What If Scenarios</h3>
              <p className="text-white/80 text-sm">Explore hypothetical space situations</p>
            </a>

            <a href="login_register_page.html" className="group quick-access-card backdrop-blur-sm rounded-cosmic border border-white/20 hover:border-white/40 transition-cosmic-slow cosmic-glow-subtle p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-cosmic mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-cosmic">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-lato font-semibold mb-2 text-white group-hover:text-accent transition-cosmic">Join Community</h3>
              <p className="text-white/80 text-sm">Connect with fellow explorers</p>
            </a>

            <a href="contact_page.html" className="group quick-access-card backdrop-blur-sm rounded-cosmic border border-white/20 hover:border-white/40 transition-cosmic-slow cosmic-glow-subtle p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-cosmic mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-cosmic">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-lato font-semibold mb-2 text-white group-hover:text-accent transition-cosmic">Get in Touch</h3>
              <p className="text-white/80 text-sm">Contact our team</p>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
