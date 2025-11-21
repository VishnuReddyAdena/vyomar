
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PuzzlePage = () => {
  useEffect(() => {
    function handleScrollAnimations() {
      const elements = document.querySelectorAll('.fade-in');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(element => {
        observer.observe(element);
      });
    }

    handleScrollAnimations();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <>
      <Navbar />
      <br /><br /><br /><br />
      <section className="container mx-auto px-4 mt-8 fade-in">
        <div className="bg-error/15 border-2 border-error rounded-xl p-8 text-center max-w-3xl mx-auto cosmic-glow pulse-border">
          <div className="icon"><i className="fas fa-tools text-error text-5xl mb-4 bounce-icon"></i></div>
          <h2 className="text-3xl sm:text-4xl font-clash font-bold text-error mb-4">
            Page Under Construction!
          </h2>
          <p className="text-lg text-text-primary/70 mb-4">
            Our cosmic engineers are hard at work building new and exciting puzzles and games for you.
            Stay tuned for an interstellar experience!
          </p>
          <p className="text-sm text-text-secondary">
            New content is launching soon. Thank you for your patience!
          </p>
        </div>
      </section><br /><br /><br />
      <Footer />
    </>
  );
};

export default PuzzlePage;
