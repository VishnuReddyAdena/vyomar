
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HowToSubmitATheoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 cosmic-glow-moderate rounded-2xl bg-[var(--color-surface)]">
        <header className="text-center mb-12"><br /><br /><br /><br />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-clash font-bold text-text-primary mb-4 text-balance">How to Submit a Theory on Vyomarr</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            To contribute a theory to Vyomarr's "What If..." section, follow the structured process below. All submissions are reviewed before publication.
          </p>
        </header>

        <main className="space-y-12">

          <section className="flex flex-col md:flex-row gap-6 p-6 border-cosmic rounded-xl cosmic-glow-subtle">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-accent)] text-white font-bold text-xl cosmic-glow">
              1
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-clash font-semibold text-text-primary mb-2">Choose a Compelling 'What If' Question</h2>
              <p className="text-text-secondary mb-4">Your theory should be centered around a thought-provoking idea that explores scientific, philosophical, or space-related concepts.</p>
              <ul className="list-disc list-inside space-y-1 text-text-secondary">
                <li>What if time flowed in reverse?</li>
                <li>What if Earth had two moons?</li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-6 p-6 border-cosmic rounded-xl cosmic-glow-subtle">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-accent)] text-white font-bold text-xl cosmic-glow">
              2
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-clash font-semibold text-text-primary mb-2">Write Your Theory Clearly and Creatively</h2>
              <p className="text-text-secondary">Structure your theory in 1 to 2 paragraphs. Focus on clarity and originality. You may include supporting logic, imagination, or scientific speculation. Avoid vague, incoherent, or unrelated writing.</p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-6 p-6 border-cosmic rounded-xl cosmic-glow-subtle">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-accent)] text-white font-bold text-xl cosmic-glow">
              3-4
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-clash font-semibold text-text-primary mb-2">Navigate to the Submission Page</h2>
              <p className="text-text-secondary mb-4">From the main navigation menu, open the 'What If...' section on Vyomarr. Use the dedicated "Submit Your Theory" button on the page to begin your submission.</p>
              <button className="w-full sm:w-auto px-6 py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg cosmic-glow transition-cosmic hover:bg-opacity-80">
                Submit Your Theory
              </button>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-6 p-6 border-cosmic rounded-xl cosmic-glow-subtle">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-accent)] text-white font-bold text-xl cosmic-glow">
              5
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-clash font-semibold text-text-primary mb-2">Complete the Submission Form</h2>
              <p className="text-text-secondary mb-4">Fill in the following fields and submit the form, ensuring your theory is readable and concise.</p>
              <ul className="list-disc list-inside space-y-1 text-text-secondary">
                <li>Name (optional; anonymous submissions are accepted)</li>
                <li>Theory text (paste or write directly)</li>
                <li>Optional file upload (e.g., image or diagram)</li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-6 p-6 border-cosmic rounded-xl cosmic-glow-subtle">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-accent)] text-white font-bold text-xl cosmic-glow">
              6
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-clash font-semibold text-text-primary mb-2">Await Manual Review</h2>
              <p className="text-text-secondary">All theories are manually reviewed for relevance, originality, quality, and compliance with content guidelines. Approved theories will be displayed publicly in the 'What If...' gallery.</p>
            </div>
          </section>

          <section className="p-6 border-cosmic rounded-xl cosmic-glow-subtle bg-secondary">
            <h2 className="text-2xl font-clash font-semibold text-text-primary mb-4">Tips for Getting Approved and Featured</h2>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--color-accent)]">&#x2713;</span>
                <p>Stay within 500-1000 words.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--color-accent)]">&#x2713;</span>
                <p>Use your own words; no copy-paste content.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--color-accent)]">&#x2713;</span>
                <p>Focus on surprising or challenging ideas.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--color-accent)]">&#x2713;</span>
                <p>Avoid repetition, casual language, or clickbait formats.</p>
              </li>
            </ul>
            <p className="text-text-secondary mt-4">
              If your theory follows these steps and meets our standards, it may be highlighted on the homepage or featured in community spotlights.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default HowToSubmitATheoryPage;
