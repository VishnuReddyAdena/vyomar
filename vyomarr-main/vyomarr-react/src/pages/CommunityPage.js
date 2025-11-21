
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CommunityPage = () => {
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

    document.addEventListener('DOMContentLoaded', function() {
      handleScrollAnimations();
    });

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16"><br /><br />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-clash font-bold bg-gradient-to-r "><br /><br />
          Join the Vyomarr Community
        </h1>
      </div>

      <main className="relative">
        <section id="channels" className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
              <div className="bg-surface/50 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 cosmic-glow fade-in">
                <div className="flex items-center space-x-4 mb-4">
                  <i className="fab fa-youtube text-5xl text-red-500"></i>
                  <h2 className="text-3xl font-clash font-semibold text-text-primary">YouTube</h2>
                </div>
                <p className="text-text-secondary mb-4">
                  For Deep Visual Exploration. If you prefer learning through visuals, animations, and immersive storytelling, Vyomarr's YouTube channel is designed for you.
                </p>
                <h3 className="text-xl font-clash font-semibold text-accent mb-2">What you'll find:</h3>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>Short-form and long-form "What If..." video explorations</li>
                  <li>Scientific paradoxes and space theories, visually explained</li>
                  <li>Thought-provoking content that simplifies complex topics</li>
                </ul>
                <a href="https://www.youtube.com/@vyomarr" className="mt-6 block text-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  subscribe on YouTube
                </a>
              </div>

              <div className="bg-surface/50 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 cosmic-glow fade-in">
                <div className="flex items-center space-x-4 mb-4">
                  <i className="fab fa-instagram text-5xl text-pink-500"></i>
                  <h2 className="text-3xl font-clash font-semibold text-text-primary">Instagram</h2>
                </div>
                <p className="text-text-secondary mb-4">
                  For Quick Insights and Daily Inspiration. If you're looking for fast, creative, and visually engaging content, Vyomarr's Instagram page delivers snapshots of cosmic curiosity straight to your feed.
                </p>
                <h3 className="text-xl font-clash font-semibold text-accent mb-2">What you'll find:</h3>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>Short theories, facts, and visuals in carousel or reel format</li>
                  <li>Interactive polls, story Q&As, and behind-the-scenes glimpses</li>
                  <li>Community prompts and artistic cosmic interpretations</li>
                </ul>
                <a href="https://www.instagram.com/vyomarr/?igsh=eWdhbDlpc21maGx4#" className="mt-6 block text-center bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Follow on Instagram
                </a>
              </div>

              <div className="bg-surface/50 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 cosmic-glow fade-in">
                <div className="flex items-center space-x-4 mb-4">
                  <i className="fab fa-discord text-5xl text-indigo-400"></i>
                  <h2 className="text-3xl font-clash font-semibold text-text-primary">Discord</h2>
                </div>
                <p className="text-text-secondary mb-4">
                  For Real-Time Collaboration and Community Discussion. If you're interested in engaging directly with the community, Vyomarr's Discord server is the most interactive space.
                </p>
                <h3 className="text-xl font-clash font-semibold text-accent mb-2">What you'll find:</h3>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>Live theory discussions, brainstorm rooms, and moderated debates</li>
                  <li>Feedback spaces for submitted theories</li>
                  <li>Exclusive community events, puzzle challenges, and idea labs</li>
                </ul>
                <a href="#" className="mt-6 block text-center bg-indigo-400 hover:bg-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Join Discord
                </a>
              </div>

              <div className="bg-surface/50 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8 cosmic-glow fade-in">
                <div className="flex items-center space-x-4 mb-4">
                  <i className="fab fa-linkedin text-5xl text-blue-500"></i>
                  <h2 className="text-3xl font-clash font-semibold text-text-primary">LinkedIn</h2>
                </div>
                <p className="text-text-secondary mb-4">
                  For Following the Vision and Founder's Insights. Vyomarr is led by Mohan Reddy Sai Govindu. His LinkedIn profile serves as a place for those who want to understand the bigger picture.
                </p>
                <h3 className="text-xl font-clash font-semibold text-accent mb-2">What you'll find:</h3>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>Thoughtful posts on space innovation, creativity, and system design</li>
                  <li>Behind-the-scenes updates on Vyomarr's progress and roadmap</li>
                  <li>Occasional posts about internships, collaborations, or speaking engagements</li>
                </ul>
                <a href="https://www.linkedin.com/in/govindumohan/" className="mt-6 block text-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 fade-in">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash font-bold text-accent mb-8">
              Which Community Should You Join?
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto text-text-primary border border-text-secondary/20 rounded-xl cosmic-glow-hover">
                <thead>
                  <tr className="bg-surface">
                    <th className="px-6 py-3 border-b border-text-secondary/20 text-left text-sm font-semibold text-accent uppercase tracking-wider">Your Engagement Style</th>
                    <th className="px-6 py-3 border-b border-text-secondary/20 text-left text-sm font-semibold text-accent uppercase tracking-wider">Platform to Join</th>
                  </tr>
                </thead>
                <tbody className="bg-surface/50 divide-y divide-text-secondary/20">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">You learn by watching</td>
                    <td className="px-6 py-4 whitespace-nowrap">YouTube</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">You enjoy daily micro-content</td>
                    <td className="px-6 py-4 whitespace-nowrap">Instagram</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">You like live discussions</td>
                    <td className="px-6 py-4 whitespace-nowrap">Discord</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">You follow mission & leadership</td>
                    <td className="px-6 py-4 whitespace-nowrap">LinkedIn (Founder's Personal Profile)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg text-text-secondary mt-8">
              Each Vyomarr platform exists with a specific purpose. You are welcome to follow one, several, or all based on your level of interest and preferred format of engagement.
            </p>
            <p className="text-lg text-text-primary mt-4">
              If you're ready to begin, start with the one that resonates with how you explore ideas—and join the growing network of people who believe in the power of science and imagination.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CommunityPage;
