
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DataPage = () => {
  useEffect(() => {
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    const backToTopBtn = document.getElementById('backToTopBtn');
    const handleScroll = () => {
      if (backToTopBtn) {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    function createStars() {
      const starsContainer = document.getElementById('starsContainer');
      if (!starsContainer) return;
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = Math.random() * 3 + 2 + 's';
        starsContainer.appendChild(star);
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      createStars();
    });

    // Expose scrollToSection to global scope for onclick attributes
    window.scrollToSection = scrollToSection;

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (backToTopBtn) {
        backToTopBtn.removeEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <header className="p-8 bg-surface rounded-2xl cosmic-glow mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row items-center md:justify-between flex-wrap gap-4 text-center md:text-left">
            <div className="flex items-center space-x-4">
              <br /><br /><br /><br /><h1 className="text-3xl md:text-4xl lg:text-5xl font-clash font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-success to-warning">
                Privacy & Data Policy
              </h1>
              <p className="text-sm md:text-base text-text-secondary mt-1">Last updated: July 9, 2025</p>
            </div>
          </div>
        </header>

        <div className="main-content bg-surface rounded-2xl overflow-hidden cosmic-glow">
          <div className="table-of-contents p-6 md:p-8 border-b border-text-secondary/20">
            <h2 className="text-2xl font-clash font-bold text-accent mb-6 flex items-center space-x-4">
              <span>Navigation Console</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('general-principles')}>
                <span className="block text-accent font-semibold">1. General Principles</span>
                <div className="text-sm text-text-secondary mt-1">Our core data protection principles</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('information-collect')}>
                <span className="block text-accent font-semibold">2. Information We Collect</span>
                <div className="text-sm text-text-secondary mt-1">Types of data we gather</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('how-we-use')}>
                <span className="block text-accent font-semibold">3. How We Use Information</span>
                <div className="text-sm text-text-secondary mt-1">Purposes for data processing</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('legal-basis')}>
                <span className="block text-accent font-semibold">4. Legal Basis</span>
                <div className="text-sm text-text-secondary mt-1">Lawful grounds for processing</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('data-sharing')}>
                <span className="block text-accent font-semibold">5. Data Sharing</span>
                <div className="text-sm text-text-secondary mt-1">When and how we share data</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('data-security')}>
                <span className="block text-accent font-semibold">6. Data Security</span>
                <div className="text-sm text-text-secondary mt-1">Protecting your information</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('data-retention')}>
                <span className="block text-accent font-semibold">7. Data Retention</span>
                <div className="text-sm text-text-secondary mt-1">How long we keep your data</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('your-rights')}>
                <span className="block text-accent font-semibold">8. Your Rights</span>
                <div className="text-sm text-text-secondary mt-1">Your privacy rights and controls</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('cookies')}>
                <span className="block text-accent font-semibold">9. Cookies & Tracking</span>
                <div className="text-sm text-text-secondary mt-1">Website tracking technologies</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('third-party')}>
                <span className="block text-accent font-semibold">10. Third-Party Links</span>
                <div className="text-sm text-text-secondary mt-1">External website policies</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('children')}>
                <span className="block text-accent font-semibold">11. Children's Privacy</span>
                <div className="text-sm text-text-secondary mt-1">Protection for minors</div>
              </div>
              <div className="toc-item p-4 rounded-lg bg-secondary border border-text-secondary/20 hover:border-accent/50" onClick={() => window.scrollToSection('changes')}>
                <span className="block text-accent font-semibold">12. Policy Changes</span>
                <div className="text-sm text-text-secondary mt-1">Updates and modifications</div>
              </div>
            </div>
          </div>

          <div className="content-section p-6 md:p-8">
            <div className="intro-text italic text-text-secondary text-center p-6 bg-secondary rounded-lg border border-text-secondary/20 mb-10">
              <strong>Vyomarr</strong> ("we", "us", or "our") is committed to protecting your privacy and ensuring the security
              of your personal information. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your data when you visit our website and use our services.
            </div>

            <div className="section mb-12" id="general-principles">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="1">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">1</span>
                <span>General Principles</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">We adhere to the following fundamental data protection principles that guide every aspect of our data handling practices:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">🔍 Lawfulness, Fairness, and Transparency</h4>
                  <p className="text-text-secondary">We process personal data lawfully, fairly, and transparently, ensuring you understand how and why we use your information.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">🎯 Purpose Limitation</h4>
                  <p className="text-text-secondary">Data is collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those purposes.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">📊 Data Minimization</h4>
                  <p className="text-text-secondary">We only collect data that is adequate, relevant, and limited to what is necessary for the purposes for which it is processed.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">✅ Accuracy</h4>
                  <p className="text-text-secondary">We take reasonable steps to ensure that personal data is accurate and, where necessary, kept up to date.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">⏰ Storage Limitation</h4>
                  <p className="text-text-secondary">Data is kept in a form which permits identification of data subjects for no longer than necessary.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">🔒 Integrity and Confidentiality</h4>
                  <p className="text-text-secondary">We process data securely, protecting against unauthorized or unlawful processing, accidental loss, destruction, or damage using appropriate technical and organizational measures.</p>
                </div>
              </div>
            </div>

            <div className="section mb-12" id="information-collect">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="2">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">2</span>
                <span>Information We Collect</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">We may collect the following types of information to provide and improve our services:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">👤</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Personal Information</h4>
                  <p className="text-text-secondary">Name, email address, contact details, and other identifiers you provide when registering or using our services.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">📊</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Usage Data</h4>
                  <p className="text-text-secondary">IP address, browser type, device information, pages visited, and usage patterns to understand how you interact with our platform.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">🍪</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Cookies & Tracking Technologies</h4>
                  <p className="text-text-secondary">Information collected via cookies and similar technologies to enhance your experience and analyze site usage patterns.</p>
                </div>
              </div>
            </div>

            <div className="section mb-12" id="how-we-use">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="3">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">3</span>
                <span>How We Use Your Information</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">Your information may be used for the following purposes, all aimed at providing you with the best possible service experience:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">🚀 Providing and Maintaining Services</h4>
                  <p className="text-text-secondary">Ensuring our platform functions properly and delivering the core services you expect from us.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">📈 Improving and Personalizing</h4>
                  <p className="text-text-secondary">Enhancing, personalizing, and expanding our website based on user feedback and behavior patterns.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">💬 Communication</h4>
                  <p className="text-text-secondary">Communicating with you, including customer support, service updates, and important notifications.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2"> Legal Compliance</h4>
                  <p className="text-text-secondary">Complying with applicable legal obligations and regulatory requirements.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2"> Security and Integrity</h4>
                  <p className="text-text-secondary">Ensuring the security and integrity of our services and protecting against fraud and abuse.</p>
                </div>
              </div>
            </div>

            <div className="section mb-12" id="legal-basis">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">4</span>
                <span>Legal Basis for Processing</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">We process your personal data on the following <span className="bg-accent/40 text-text-primary px-2 py-1 rounded-md font-semibold">legal bases</span> in accordance with applicable privacy laws:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">✋</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Your Consent</h4>
                  <p className="text-text-secondary">When you explicitly agree to our processing of your personal data for specific purposes.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">📋</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Contract Performance</h4>
                  <p className="text-text-secondary">Processing necessary to perform our contractual obligations to you or to take steps at your request.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">⚖️</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Legal Obligations</h4>
                  <p className="text-text-secondary">When we must process your data to comply with legal or regulatory requirements.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">🛡️</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Legitimate Interests</h4>
                  <p className="text-text-secondary">Processing necessary for our legitimate interests, provided these do not override your rights and interests.</p>
                </div>
              </div>
            </div>

            <div className="section mb-12" id="data-sharing">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="5">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">5</span>
                <span>Data Sharing</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">We may share your information with third parties in the following circumstances:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">🤝</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Service Providers</h4>
                  <p className="text-text-secondary">Third-party vendors who assist us in providing our services, such as hosting, analytics, and customer support.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">🔗</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Business Transfers</h4>
                  <p className="text-text-secondary">In the event of a merger, acquisition, or sale of all or a portion of our assets, your data may be transferred as part of that transaction.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">⚖️</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Legal Requirements</h4>
                  <p className="text-text-secondary">When required by law or to protect our rights, privacy, safety, or property, or that of others.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">🔒</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">With Your Consent</h4>
                  <p className="text-text-secondary">We may share your information with third parties if you have given us explicit consent to do so.</p>
                </div>
              </div>
            </div>

            <div className="section mb-12" id="data-security">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">6</span>
                <span>Data Security</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">We implement a variety of security measures to protect your personal information, including:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2"> Encryption</h4>
                  <p className="text-text-secondary">Using encryption to protect sensitive data during transmission and storage.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Access Controls</h4>
                  <p className="text-text-secondary">Restricting access to personal data to authorized personnel only.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">🕵️Regular Audits</h4>
                  <p className="text-text-secondary">Conducting regular security audits and assessments to identify and mitigate risks.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2"> Staff Training</h4>
                  <p className="text-text-secondary">Training our staff on data protection best practices and security protocols.</p>
                </div>
              </div>
            </div>

            <div className="section mb-12" id="data-retention">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="7">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">7</span>
                <span>Data Retention</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2"> Service Provision</h4>
                  <p className="text-text-secondary">As long as you maintain an account with us or continue to use our services.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Legal Obligations</h4>
                  <p className="text-text-secondary">To comply with legal obligations, resolve disputes, and enforce our agreements.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative overflow-hidden group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2"> Data Deletion</h4>
                  <p className="text-text-secondary">When your data is no longer needed, we will securely delete or anonymize it.</p>
                </div>
              </div>
            </div>

            <div className="section mb-12" id="your-rights">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="8">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">8</span>
                <span>Your Rights</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">You have the following rights regarding your personal data:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="right-item p-6 bg-secondary rounded-xl border border-text-secondary/20 relative hover:border-accent/50 transition-all duration-300 transform hover:translate-x-1">
                  <h4 className="text-lg font-semibold text-text-primary flex items-start gap-2">
                    <span className="text-success text-xl"></span> Right to Access
                  </h4>
                  <p className="text-text-secondary mt-2 pl-8">You can request access to the personal data we hold about you.</p>
                </div>
                <div className="right-item p-6 bg-secondary rounded-xl border border-text-secondary/20 relative hover:border-accent/50 transition-all duration-300 transform hover:translate-x-1">
                  <h4 className="text-lg font-semibold text-text-primary flex items-start gap-2">
                    <span className="text-success text-xl"></span> Right to Rectification
                  </h4>
                  <p className="text-text-secondary mt-2 pl-8">You can request correction of any inaccurate or incomplete personal data.</p>
                </div>
                <div className="right-item p-6 bg-secondary rounded-xl border border-text-secondary/20 relative hover:border-accent/50 transition-all duration-300 transform hover:translate-x-1">
                  <h4 className="text-lg font-semibold text-text-primary flex items-start gap-2">
                    <span className="text-success text-xl"></span> Right to Erasure
                  </h4>
                  <p className="text-text-secondary mt-2 pl-8">You can request deletion of your personal data under certain conditions.</p>
                </div>
                <div className="right-item p-6 bg-secondary rounded-xl border border-text-secondary/20 relative hover:border-accent/50 transition-all duration-300 transform hover:translate-x-1">
                  <h4 className="text-lg font-semibold text-text-primary flex items-start gap-2">
                    <span className="text-success text-xl"></span> Right to Restrict Processing
                  </h4>
                  <p className="text-text-secondary mt-2 pl-8">You can request that we restrict the processing of your personal data in certain situations.</p>
                </div>
                <div className="right-item p-6 bg-secondary rounded-xl border border-text-secondary/20 relative hover:border-accent/50 transition-all duration-300 transform hover:translate-x-1">
                  <h4 className="text-lg font-semibold text-text-primary flex items-start gap-2">
                    <span className="text-success text-xl"></span> Right to Data Portability
                  </h4>
                  <p className="text-text-secondary mt-2 pl-8">You can request to receive your personal data in a structured, commonly used, and machine-readable format.</p>
                </div>
                <div className="right-item p-6 bg-secondary rounded-xl border border-text-secondary/20 relative hover:border-accent/50 transition-all duration-300 transform hover:translate-x-1">
                  <h4 className="text-lg font-semibold text-text-primary flex items-start gap-2">
                    <span className="text-success text-xl"></span> Right to Object
                  </h4>
                  <p className="text-text-secondary mt-2 pl-8">You can object to the processing of your personal data in certain situations.</p>
                </div>
                <div className="right-item p-6 bg-secondary rounded-xl border border-text-secondary/20 relative hover:border-accent/50 transition-all duration-300 transform hover:translate-x-1">
                  <h4 className="text-lg font-semibold text-text-primary flex items-start gap-2">
                    <span className="text-success text-xl"></span> Right to Withdraw Consent
                  </h4>
                  <p className="text-text-secondary mt-2 pl-8">You can withdraw your consent to our processing of your personal data at any time.</p>
                </div>
                <div className="right-item p-6 bg-secondary rounded-xl border border-text-secondary/20 relative hover:border-accent/50 transition-all duration-300 transform hover:translate-x-1">
                  <h4 className="text-lg font-semibold text-text-primary flex items-start gap-2">
                    <span className="text-success text-xl"></span> Right to Lodge a Complaint
                  </h4>
                  <p className="text-text-secondary mt-2 pl-8">You have the right to lodge a complaint with a supervisory authority if you believe your rights have been violated.</p>
                </div>
              </div>
            </div>

            <div className="section mb-12" id="cookies">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="9">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">9</span>
                <span>Cookies & Tracking Technologies</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">🍪</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">What Are Cookies?</h4>
                  <p className="text-text-secondary">Cookies are small text files stored on your device that help us remember your preferences and improve your experience.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">🔍</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Types of Cookies We Use</h4>
                  <p className="text-text-secondary">We use essential cookies, performance cookies, and functionality cookies to provide a seamless experience.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">⚙️</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Managing Cookies</h4>
                  <p className="text-text-secondary">You can manage cookie preferences through your browser settings. However, disabling cookies may affect your experience on our site.</p>
                </div>
              </div>
            </div>

            <div className="section mb-12" id="third-party">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="10">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">10</span>
                <span>Third-Party Links</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites, and we encourage you to review their privacy policies.</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">🔗</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">External Websites</h4>
                  <p className="text-text-secondary">We may link to third-party websites for additional resources or services. These sites have their own privacy policies.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-warning rounded-full text-white text-2xl mb-4 cosmic-glow">⚠️</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">No Responsibility</h4>
                  <p className="text-text-secondary">We are not responsible for the content or privacy practices of these external sites.</p>
                </div>
                <div className="p-6 bg-secondary rounded-xl border border-text-secondary/20 relative group hover:border-accent/50 transition-all duration-300 transform hover:translate-y-[-5px]">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full text-white text-2xl mb-4 cosmic-glow">🔍</div>
                  <h4 className="text-xl font-clash font-semibold text-text-primary mb-2">Review Policies</h4>
                  <p className="text-text-secondary">We recommend reviewing the privacy policies of any third-party sites you visit.</p>
                </div>
              </div>
            </div>

            <div className="section mb-12" id="children">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="11">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">11</span>
                <span>Children's Privacy</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">Our services are not directed to children under the age of 13. We do not knowingly collect personal data from children. If we become aware of such data, we will take steps to delete it.</p>
            </div>

            <div className="section mb-12" id="changes">
              <h2 className="text-2xl font-clash font-bold text-text-primary mb-6 pb-2 border-b-2 border-accent flex items-center space-x-4" data-number="12">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success text-white font-bold text-xl cosmic-glow">12</span>
                <span>Policy Changes</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date at the top.</p>
            </div>

          </div>
        </div>
      </div>
      <br /><br /><br />
      <Footer />

      <button id="backToTopBtn" className="back-to-top flex items-center justify-center">
        &uarr;
      </button>
    </>
  );
};

export default DataPage;
