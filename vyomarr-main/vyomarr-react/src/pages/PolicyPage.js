
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="text-center mb-12 md:mb-20 p-8 bg-surface rounded-2xl shadow-moderate">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-clash font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-success to-warning mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Last Updated: August 14, 2025
          </p>
        </header>

        <main>
          <div className="space-y-12">

            <div className="bg-surface rounded-2xl p-8 text-center shadow-cosmic">
              <h2 className="text-3xl font-clash font-semibold text-accent mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-lg text-text-secondary max-w-4xl mx-auto">
                Vyomarr ("we", "us", or "our") is dedicated to protecting your privacy. This policy explains how we collect, use, and safeguard your data when you use our services to connect with the global space enthusiast community.
              </p>
            </div>

            <div className="bg-surface rounded-2xl shadow-cosmic overflow-hidden">
              <div className="flex items-center gap-6 p-6 bg-secondary border-b border-border-subtle flex-wrap justify-center sm:justify-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success flex items-center justify-center text-xl font-bold text-text-primary shadow-cosmic">1</div>
                <h3 className="text-2xl font-clash font-semibold text-text-primary text-center sm:text-left">
                  Our Core Privacy Principles
                </h3>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-text-secondary text-lg mb-6">Our data protection framework is built upon six core principles that guide every decision we make regarding your personal information.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-secondary p-6 rounded-lg border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Transparency</h4>
                    <p className="text-text-secondary">We process data lawfully and are always clear about what we collect and why.</p>
                  </div>
                  <div className="bg-secondary p-6 rounded-lg border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Purpose Limitation</h4>
                    <p className="text-text-secondary">We collect data for specific, explicit purposes and don't repurpose it.</p>
                  </div>
                  <div className="bg-secondary p-6 rounded-lg border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Data Minimization</h4>
                    <p className="text-text-secondary">We only collect data that is relevant and necessary for our services.</p>
                  </div>
                  <div className="bg-secondary p-6 rounded-lg border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Accuracy</h4>
                    <p className="text-text-secondary">We take reasonable steps to ensure your data is accurate and up to date.</p>
                  </div>
                  <div className="bg-secondary p-6 rounded-lg border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Storage Limitation</h4>
                    <p className="text-text-secondary">We don't keep your personal data for longer than necessary.</p>
                  </div>
                  <div className="bg-secondary p-6 rounded-lg border border-border-subtle">
                    <h4 className="font-semibold text-text-primary mb-2">Security</h4>
                    <p className="text-text-secondary">We use appropriate measures to protect your data from unauthorized access or loss.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl shadow-cosmic overflow-hidden">
              <div className="flex items-center gap-6 p-6 bg-secondary border-b border-border-subtle flex-wrap justify-center sm:justify-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success flex items-center justify-center text-xl font-bold text-text-primary shadow-cosmic">2</div>
                <h3 className="text-2xl font-clash font-semibold text-text-primary text-center sm:text-left">
                  Information We Collect
                </h3>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div className="p-6 bg-secondary rounded-lg border-l-4 border-accent">
                  <h4 className="text-xl font-clash font-semibold text-accent mb-2">Personal Information</h4>
                  <p className="text-text-secondary">This is data you voluntarily provide that identifies you, such as your name and email address when you create an account, subscribe to a newsletter, or contact support.</p>
                </div>
                <div className="p-6 bg-secondary rounded-lg border-l-4 border-accent">
                  <h4 className="text-xl font-clash font-semibold text-accent mb-2">Usage Data and Analytics</h4>
                  <p className="text-text-secondary">We automatically collect technical information when you use our services, including your IP address, browser type, device information, and Browse patterns on our site.</p>
                </div>
                <div className="p-6 bg-secondary rounded-lg border-l-4 border-accent">
                  <h4 className="text-xl font-clash font-semibold text-accent mb-2">Cookies and Tracking Technologies</h4>
                  <p className="text-text-secondary">We use cookies (small text files stored on your device) to remember your preferences, maintain your login session, and help us understand how you interact with our services.</p>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl shadow-cosmic overflow-hidden">
              <div className="flex items-center gap-6 p-6 bg-secondary border-b border-border-subtle flex-wrap justify-center sm:justify-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success flex items-center justify-center text-xl font-bold text-text-primary shadow-cosmic">3</div>
                <h3 className="text-2xl font-clash font-semibold text-text-primary text-center sm:text-left">
                  How We Use Your Information
                </h3>
              </div>
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-secondary rounded-lg">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Service Provision</h4>
                  <p className="text-text-secondary">To create and maintain your account, process requests, and deliver the core features of our platform.</p>
                </div>
                <div className="p-6 bg-secondary rounded-lg">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Personalization</h4>
                  <p className="text-text-secondary">To analyze your interactions and customize your experience with relevant content and recommendations.</p>
                </div>
                <div className="p-6 bg-secondary rounded-lg">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Communication</h4>
                  <p className="text-text-secondary">To send you newsletters, updates, and other community-related information you've opted into.</p>
                </div>
                <div className="p-6 bg-secondary rounded-lg">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Security & Compliance</h4>
                  <p className="text-text-secondary">To protect our platform, prevent fraud, and comply with applicable laws and regulations.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface rounded-2xl p-8 shadow-cosmic">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-success flex items-center justify-center font-bold">4</div>
                  <h3 className="font-clash text-xl font-semibold">Data Sharing & Disclosure</h3>
                </div>
                <p className="text-text-primary font-semibold mb-2">We do not sell your personal information.</p>
                <p className="text-text-secondary">We only share data with trusted service providers (like cloud hosting) bound by strict confidentiality agreements, or when required by law.</p>
              </div>
              <div className="bg-surface rounded-2xl p-8 shadow-cosmic">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-success flex items-center justify-center font-bold">5</div>
                  <h3 className="font-clash text-xl font-semibold">Data Security & Retention</h3>
                </div>
                <p className="text-text-secondary">We implement a comprehensive security framework, including encryption and access controls, to safeguard your data. We retain data only for as long as necessary to fulfill its original purpose or comply with legal obligations.</p>
              </div>
            </div>

            <div className="bg-surface rounded-2xl shadow-cosmic overflow-hidden">
              <div className="flex items-center gap-6 p-6 bg-secondary border-b border-border-subtle flex-wrap justify-center sm:justify-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-success flex items-center justify-center text-xl font-bold text-text-primary shadow-cosmic">6</div>
                <h3 className="text-2xl font-clash font-semibold text-text-primary text-center sm:text-left">
                  Your Data Rights
                </h3>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-text-secondary text-lg mb-6">You have significant control over your personal data. You have the right to access, correct, delete, or restrict the processing of your information. You can exercise these rights through your account settings or by contacting us directly. You also have the right to withdraw consent at any time and lodge a complaint with a data protection authority.</p>
              </div>
            </div>

            <div className="text-center mt-8 p-8 bg-surface rounded-2xl shadow-moderate">
              <h3 className="text-3xl font-clash font-bold text-accent mb-4">Contact Us</h3>
              <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
                If you have any questions or concerns about this Privacy Policy or your data rights, please reach out to our team.
              </p>
              <a href="mailto:support@vyomarr.com" className="inline-block bg-accent text-text-primary font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-200">
                support@vyomarr.com
              </a>
            </div>

          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PolicyPage;
