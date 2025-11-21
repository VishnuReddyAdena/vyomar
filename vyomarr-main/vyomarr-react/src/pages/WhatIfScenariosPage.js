
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WhatIfScenariosPage = () => {
  useEffect(() => {
    function showMessage(message, type = 'success') {
      const messageBox = document.getElementById('message-box');
      if (messageBox) {
        messageBox.textContent = message;
        messageBox.className = `alert-box show z-50 ${type === 'success' ? 'bg-success' : 'bg-error'} drop-shadow-md`;

        setTimeout(() => {
          messageBox.classList.remove('show');
        }, 5000);
      }
    }

    const submissionModal = document.getElementById('submission-modal');
    const submitTheoryBtn = document.getElementById('submit-theory-btn');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    const theoryForm = document.getElementById('theory-submission-form');

    if (submitTheoryBtn) {
      submitTheoryBtn.addEventListener('click', () => {
        if (submissionModal) submissionModal.classList.remove('hidden');
      });
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        if (submissionModal) submissionModal.classList.add('hidden');
        if (theoryForm) theoryForm.reset();
      });
    }

    if (modalCancelBtn) {
      modalCancelBtn.addEventListener('click', () => {
        if (submissionModal) submissionModal.classList.add('hidden');
        if (theoryForm) theoryForm.reset();
      });
    }

    if (theoryForm) {
      theoryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(theoryForm);
        const data = {};
        for (let [key, value] of formData.entries()) {
          data[key] = value;
        }

        if (!data['theory-title'] || !data['theory-description'] || !data['category']) {
          showMessage('Please fill out all required fields.', 'error');
          return;
        }

        console.log('Submitted Theory:', data);
        showMessage('Thank you! Your theory has been submitted for review.', 'success');

        if (submissionModal) submissionModal.classList.add('hidden');
        theoryForm.reset();
      });
    }

    const sortButtons = document.querySelectorAll('[data-sort]');
    sortButtons.forEach(button => {
      button.addEventListener('click', function() {
        sortButtons.forEach(btn => {
          btn.classList.remove('bg-accent', 'text-white');
          btn.classList.add('bg-background', 'hover:bg-accent/10', 'border', 'border-secondary', 'text-text-secondary', 'hover:border-accent', 'hover:text-accent');
        });
        this.classList.remove('bg-background', 'hover:bg-accent/10', 'border', 'border-secondary', 'text-text-secondary', 'hover:border-accent', 'hover:text-accent');
        this.classList.add('bg-accent', 'text-white');
      });
    });

    const categoryButtons = document.querySelectorAll('[data-category]');
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        categoryButtons.forEach(btn => {
          btn.classList.remove('bg-accent', 'text-white');
          btn.classList.add('bg-background', 'hover:bg-accent/10', 'border', 'border-secondary', 'text-text-secondary', 'hover:border-accent', 'hover:text-accent');
        });
        this.classList.remove('bg-background', 'hover:bg-accent/10', 'border', 'border-secondary', 'text-text-secondary', 'hover:border-accent', 'hover:text-accent');
        this.classList.add('bg-accent', 'text-white');
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div id="message-box" className="alert-box"></div>

      <section className="relative py-16 bg-gradient-to-br from-primary via-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-text-secondary rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-text-secondary/80 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-accent/40 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 text-balance">
              What If <span className="text-accent">Scenarios</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto text-balance">
              Explore speculative space theories and submit your own hypothetical scenarios for community discussion.
            </p>
            <button id="submit-theory-btn" className="bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent/80 transition-cosmic cosmic-glow">
              Submit Your Theory
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <main>
          <div className="md:hidden mb-6">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              <button className="bg-accent text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap">Recent</button>
              <button className="bg-surface border border-secondary text-text-secondary px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap hover:border-accent transition-cosmic">Popular</button>
              <button className="bg-surface border border-secondary text-text-secondary px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap hover:border-accent transition-cosmic">Controversial</button>
              <button className="bg-surface border border-secondary text-text-secondary px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap hover:border-accent transition-cosmic">Unanswered</button>
              <button className="bg-surface border border-secondary text-text-secondary px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap hover:border-accent transition-cosmic">Time Travel</button>
              <button className="bg-surface border border-secondary text-text-secondary px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap hover:border-accent transition-cosmic">Alien Contact</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            <article className="bg-surface rounded-xl border border-secondary hover:border-accent transition-cosmic cosmic-glow-subtle group">
              <div className="relative overflow-hidden rounded-t-xl">
                <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Time travel scenario" className="w-full h-48 object-cover group-hover:scale-105 transition-cosmic" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/1A1B23/94A3B8?text=Image+Not+Found'; }} />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent/90 text-white px-2 py-1 rounded-md text-xs font-medium">Time Travel</span>
                </div>
                <div className="absolute top-3 right-3">
                  <button className="bg-background/80 backdrop-blur-sm text-text-secondary hover:text-accent p-2 rounded-md transition-cosmic">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-lg mb-3 group-hover:text-accent transition-cosmic line-clamp-2">
                  What if we could send messages to our past selves?
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  Imagine a technology that allows us to transmit information backwards through time. How would this change human civilization and what paradoxes might we encounter?
                </p>

                <div className="flex items-center space-x-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Dr. Sarah Chen" className="w-8 h-8 rounded-full object-cover" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/80x80/1A1B23/94A3B8?text=SC'; }} />
                  <div>
                    <p className="text-sm font-medium">Dr. Sarah Chen</p>
                    <p className="text-xs text-text-secondary">2 days ago</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>247</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <span>89 replies</span>
                    </span>
                  </div>
                  <span className="text-accent">★★★★☆</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 bg-success/10 text-success px-3 py-1 rounded-md text-xs font-medium hover:bg-success/20 transition-cosmic">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>156</span>
                    </button>
                    <button className="flex items-center space-x-1 bg-error/10 text-error px-3 py-1 rounded-md text-xs font-medium hover:bg-error/20 transition-cosmic">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>23</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-text-secondary hover:text-accent transition-cosmic">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                    <a href="article_reading_page.html" className="text-accent hover:text-accent/80 transition-cosmic text-sm font-medium">
                      Discuss
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div id="submission-modal" className="modal-overlay hidden"><br /><br />
            <div className="modal-content cosmic-glow-prominent">
              <button id="modal-close-btn" className="close-btn">&times;</button><br /><br /><br />
              <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-accent mb-6 text-center">Submit Your Theory</h2>
              <form id="theory-submission-form" className="space-y-6">
                <div>
                  <label htmlFor="theory-title" className="block text-text-secondary font-medium mb-2">Theory Title <span className="text-error">*</span></label>
                  <input type="text" id="theory-title" name="theory-title" required className="w-full px-4 py-3 bg-surface border border-secondary rounded-lg text-text-primary focus:outline-none focus:ring-1 focus:ring-accent transition-colors" />
                </div>
                <div>
                  <label htmlFor="category" className="block text-text-secondary font-medium mb-2">Category <span className="text-error">*</span></label>
                  <select id="category" name="category" required className="w-full px-4 py-3 bg-surface border border-secondary rounded-lg text-text-primary focus:outline-none focus:ring-1 focus:ring-accent transition-colors">
                    <option value="">Select a category</option>
                    <option value="Time Travel">Time Travel</option>
                    <option value="Alien Contact">Alien Contact</option>
                    <option value="Multiverse">Multiverse</option>
                    <option value="Space Colonization">Space Colonization</option>
                    <option value="Physics Breaking">Physics Breaking</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="theory-description" className="block text-text-secondary font-medium mb-2">Theory Description <span className="text-error">*</span></label>
                  <textarea id="theory-description" name="theory-description" rows="8" required className="w-full px-4 py-3 bg-surface border border-secondary rounded-lg text-text-primary focus:outline-none focus:ring-1 focus:ring-accent transition-colors"></textarea>
                </div>
                <div>
                  <label htmlFor="supporting-evidence" className="block text-text-secondary font-medium mb-2">Supporting Evidence</label>
                  <textarea id="supporting-evidence" name="supporting-evidence" rows="4" className="w-full px-4 py-3 bg-surface border border-secondary rounded-lg text-text-primary focus:outline-none focus:ring-1 focus:ring-accent transition-colors"></textarea>
                </div>
                <div>
                  <label htmlFor="theory-image" className="block text-text-secondary font-medium mb-2">Add Image</label>
                  <input type="file" id="theory-image" name="theory-image" accept="image/*" className="w-full text-text-secondary" />
                  <div className="text-xs text-text-secondary mt-1">Click to upload or drag and drop. PNG, JPG, GIF up to 10MB.</div>
                </div>
                <div>
                  <label htmlFor="your-name" className="block text-text-secondary font-medium mb-2">Your Name </label>
                  <input type="text" id="your-name" name="your-name" className="w-full px-4 py-3 bg-surface border border-secondary rounded-lg text-text-primary focus:outline-none focus:ring-1 focus:ring-accent transition-colors" />
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                  <button type="button" id="modal-cancel-btn" className="bg-secondary text-text-secondary px-6 py-3 rounded-full font-semibold hover:bg-secondary/80 transition-cosmic">
                    Cancel
                  </button>
                  <button type="submit" className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/80 transition-cosmic cosmic-glow">
                    Submit Theory
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default WhatIfScenariosPage;
