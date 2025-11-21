
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
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
        </div><br /><br /><br /><br />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Where Curiosity Meets the Cosmos</h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto text-balance">
            Join us on a journey to explore the infinite unknown, where every question sparks a new adventure and every discovery illuminates the path to understanding.
          </p>
          <a href="login_register_page.html" className="inline-block bg-accent hover:bg-accent/80 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 cosmic-glow cosmic-glow-hover">
            Begin Your Journey
          </a>
        </div>
      </section>

      <main className="relative">
        <section id="story" className="py-16 lg:py-24 fade-in">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash font-bold text-accent mb-6">
                Our Cosmic Genesis
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                Born from the collision of ancient wisdom and cutting-edge discovery, Vyomarr emerged as a sanctuary for those who dare to ask the questions that matter most.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-surface/50 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 cosmic-glow">
                  <h3 className="text-2xl font-clash font-semibold text-accent mb-4">The Spark of Wonder</h3>
                  <p className="text-text-primary leading-relaxed">
                    Vyomarr was conceived in those quiet moments when the mind wanders to the edge of the observable universe and asks: "What lies beyond?" We recognized that in our hyper-connected world, genuine curiosity was becoming a rare element — more precious than any cosmic material.
                  </p>
                </div>

                <div className="bg-surface/50 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 cosmic-glow">
                  <h3 className="text-2xl font-clash font-semibold text-success mb-4">A Universe of Minds</h3>
                  <p className="text-text-primary leading-relaxed">
                    We envisioned a digital cosmos where astronomers and dreamers, physicists and poets, engineers and philosophers could converge — not just to share knowledge, but to create new constellations of understanding that illuminate the darkness of the unknown.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-surface/50 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 cosmic-glow">
                  <h3 className="text-2xl font-clash font-semibold text-warning mb-4">The Cosmic Journey Begins</h3>
                  <p className="text-text-primary leading-relaxed">
                    From our humble beginnings, Vyomarr has grown into a thriving community of explorers, each contributing their unique light to the vast tapestry of human knowledge. Together, we embark on a journey not just to answer questions, but to ask better ones — those that lead us deeper into the heart of wonder.
                  </p>
                </div>
                <div className="bg-surface/50 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 cosmic-glow">
                  <h3 className="text-2xl font-clash font-semibold text-error mb-4">Join the Cosmic Odyssey</h3>
                  <p className="text-text-primary leading-relaxed">
                    As we continue to expand our horizons, we invite you to join us. Whether you're a seasoned scientist or a curious soul, there's a place for you in our cosmic odyssey. Together, let's explore the infinite unknown, one wonder at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 fade-in">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash font-bold text-warning mb-6">
                Our Cosmic Mission
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-surface/80 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 text-center cosmic-glow hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-6"></div>
                <h3 className="text-xl font-clash font-semibold text-accent mb-4">Illuminate the Unknown</h3>
                <p className="text-text-secondary leading-relaxed">
                  To transform every "I don't know" into "Let's find out together," fostering a community where questions are more valuable than answers, and curiosity is the compass that guides our journey.
                </p>
              </div>

              <div className="bg-surface/80 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 text-center cosmic-glow hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-6"></div>
                <h3 className="text-xl font-clash font-semibold text-success mb-4">Bridge Cosmic Gaps</h3>
                <p className="text-text-secondary leading-relaxed">
                  To create pathways between complex scientific concepts and everyday wonder, making the universe accessible to every curious mind, regardless of their background or expertise level.
                </p>
              </div>

              <div className="bg-surface/80 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 text-center cosmic-glow hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="text-5xl mb-6"></div>
                <h3 className="text-xl font-clash font-semibold text-warning mb-4">Nurture Future Explorers</h3>
                <p className="text-text-secondary leading-relaxed">
                  To inspire the next generation of cosmic explorers, ensuring that humanity's greatest adventure — the quest for understanding — continues long after the last star has burned out.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 fade-in">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash font-bold text-success mb-6">
                💫 Our Guiding Stars
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                These cosmic principles illuminate every decision we make and every interaction we foster within our universal community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-clash font-semibold text-accent mb-2">Curiosity Over Certainty</h3>
                    <p className="text-text-secondary leading-relaxed">
                      We believe that the most profound discoveries emerge not from those who claim to have all the answers, but from those brave enough to ask better questions and sit comfortably with mystery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-clash font-semibold text-success mb-2">Inclusive Exploration</h3>
                    <p className="text-text-secondary leading-relaxed">
                      The universe belongs to everyone. We foster a space where diverse perspectives, backgrounds, and ways of thinking converge to create richer, more complete understanding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-clash font-semibold text-warning mb-2">Wonder as Wisdom</h3>
                    <p className="text-text-secondary leading-relaxed">
                      We treat wonder not as childish naivety, but as sophisticated wisdom — the recognition that reality is far stranger and more beautiful than our minds can fully comprehend.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-clash font-semibold text-error mb-2">Evidence-Based Dreams</h3>
                    <p className="text-text-secondary leading-relaxed">
                      We ground our wildest imaginings in rigorous thinking, understanding that the most extraordinary truths often emerge from the careful application of reason to seemingly impossible ideas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
