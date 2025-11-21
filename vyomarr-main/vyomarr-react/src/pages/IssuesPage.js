
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const IssuesPage = () => {
  useEffect(() => {
    function showMessage(message, type = 'success') {
      const messageBox = document.getElementById('message-box');
      if (messageBox) {
        messageBox.textContent = message;
        messageBox.className = `alert-box show z-50 bg-${type} drop-shadow-md`;

        setTimeout(() => {
          messageBox.classList.remove('show');
        }, 5000); // Hide after 5 seconds
      }
    }

    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
      feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = {};

        for (let [key, value] of formData.entries()) {
          if (key === 'feedbackAreas') {
            if (!data[key]) data[key] = [];
            data[key].push(value);
          } else {
            data[key] = value;
          }
        }

        const feedbackAreas = document.querySelectorAll('input[name="feedbackAreas"]:checked');
        data.feedbackAreas = Array.from(feedbackAreas).map(cb => cb.value);

        const issueTitle = document.getElementById('issueTitle');
        const issueDescription = document.getElementById('issueDescription');
        if (data.issueType && (!issueTitle.value || !issueDescription.value)) {
          showMessage('Please fill in the required issue fields: Issue Title and Detailed Description', 'error');
          return;
        }

        console.log('Feedback/Issue submitted:', data);

        if (data.issueType) {
          showMessage('Thank you for reporting this issue! We will investigate and get back to you as soon as possible.', 'success');
        } else {
          showMessage('Thank you for your feedback! We appreciate your input and will use it to improve our services.', 'success');
        }

        // Optionally reset the form after a successful submission
        // this.reset();
      });
    }

    return () => {
      if (feedbackForm) {
        feedbackForm.removeEventListener('submit', () => {});
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <div id="message-box" className="alert-box"></div>

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10 md:mb-16"><br />
          <br /><br /><br />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-clash font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-success mb-4">
            Feedback Form
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary font-semibold mb-2">
            Help Us Improve Your Experience
          </p>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Your feedback helps us enhance our services and better serve the space enthusiast community.
          </p>
        </header>

        <form className="feedback-form bg-surface rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm border border-gray-800" id="feedbackForm">
          <div className="form-section mb-8">
            <h2 className="text-2xl font-clash font-semibold text-accent mb-4 pb-2 border-b-2 border-accent/30">
              Contact Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-text-secondary font-medium mb-2" htmlFor="name">Full Name <span className="text-error">*</span></label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200" required />
              </div>
              <div className="form-group">
                <label className="block text-text-secondary font-medium mb-2" htmlFor="email">Email Address <span className="text-error">*</span></label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200" required />
              </div>
            </div>
            <div className="form-group mt-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="userType">I am a:</label>
              <select id="userType" name="userType" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 cursor-pointer">
                <option value="">Select your role</option>
                <option value="student">Student</option>
                <option value="researcher">Researcher</option>
                <option value="professional">Space Industry Professional</option>
                <option value="enthusiast">Space Enthusiast</option>
                <option value="educator">Educator</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-section mb-8">
            <h2 className="text-2xl font-clash font-semibold text-accent mb-4 pb-2 border-b-2 border-accent/30">
              Overall Experience
            </h2>
            <div className="form-group">
              <label className="block text-text-secondary font-medium mb-4">How would you rate your overall experience with Vyomarr?</label>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="overallRating" value="1" className="hidden" />
                  <div className="flex flex-col items-center">
                    <div className="rating-number flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold bg-gray-800 text-text-primary mb-1">1</div>
                    <span className="text-xs text-text-secondary">Poor</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="overallRating" value="2" className="hidden" />
                  <div className="flex flex-col items-center">
                    <div className="rating-number flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold bg-gray-800 text-text-primary mb-1">2</div>
                    <span className="text-xs text-text-secondary">Fair</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="overallRating" value="3" className="hidden" />
                  <div className="flex flex-col items-center">
                    <div className="rating-number flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold bg-gray-800 text-text-primary mb-1">3</div>
                    <span className="text-xs text-text-secondary">Good</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="overallRating" value="4" className="hidden" />
                  <div className="flex flex-col items-center">
                    <div className="rating-number flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold bg-gray-800 text-text-primary mb-1">4</div>
                    <span className="text-xs text-text-secondary">Very Good</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="overallRating" value="5" className="hidden" />
                  <div className="flex flex-col items-center">
                    <div className="rating-number flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold bg-gray-800 text-text-primary mb-1">5</div>
                    <span className="text-xs text-text-secondary">Excellent</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="form-section mb-8">
            <h2 className="text-2xl font-clash font-semibold text-accent mb-4 pb-2 border-b-2 border-accent/30">
              What areas would you like to provide feedback on?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex items-center p-3 bg-surface rounded-lg border border-gray-600 hover:bg-gray-800 transition-all duration-200">
                <input type="checkbox" name="feedbackAreas" value="website" className="w-4 h-4 text-accent bg-transparent border-text-secondary/50 rounded focus:ring-accent accent-accent" />
                <span className="ml-3 text-text-primary">Website Design & Navigation</span>
              </label>
              <label className="flex items-center p-3 bg-surface rounded-lg border border-gray-600 hover:bg-gray-800 transition-all duration-200">
                <input type="checkbox" name="feedbackAreas" value="content" className="w-4 h-4 text-accent bg-transparent border-text-secondary/50 rounded focus:ring-accent accent-accent" />
                <span className="ml-3 text-text-primary">Content Quality</span>
              </label>
              <label className="flex items-center p-3 bg-surface rounded-lg border border-gray-600 hover:bg-gray-800 transition-all duration-200">
                <input type="checkbox" name="community" value="community" className="w-4 h-4 text-accent bg-transparent border-text-secondary/50 rounded focus:ring-accent accent-accent" />
                <span className="ml-3 text-text-primary">Community Features</span>
              </label>
              <label className="flex items-center p-3 bg-surface rounded-lg border border-gray-600 hover:bg-gray-800 transition-all duration-200">
                <input type="checkbox" name="support" value="support" className="w-4 h-4 text-accent bg-transparent border-text-secondary/50 rounded focus:ring-accent accent-accent" />
                <span className="ml-3 text-text-primary">Customer Support</span>
              </label>
              <label className="flex items-center p-3 bg-surface rounded-lg border border-gray-600 hover:bg-gray-800 transition-all duration-200">
                <input type="checkbox" name="privacy" value="privacy" className="w-4 h-4 text-accent bg-transparent border-text-secondary/50 rounded focus:ring-accent accent-accent" />
                <span className="ml-3 text-text-primary">Privacy & Security</span>
              </label>
              <label className="flex items-center p-3 bg-surface rounded-lg border border-gray-600 hover:bg-gray-800 transition-all duration-200">
                <input type="checkbox" name="performance" value="performance" className="w-4 h-4 text-accent bg-transparent border-text-secondary/50 rounded focus:ring-accent accent-accent" />
                <span className="ml-3 text-text-primary">Site Performance</span>
              </label>
            </div>
          </div>

          <div className="form-section mb-8">
            <h2 className="text-2xl font-clash font-semibold text-accent mb-4 pb-2 border-b-2 border-accent/30">
              Issues & Bug Reports
            </h2>
            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="issueType">Type of Issue</label>
              <select id="issueType" name="issueType" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 cursor-pointer">
                <option value="">Select issue type</option>
                <option value="bug">Bug/Error</option>
                <option value="performance">Performance Issue</option>
                <option value="accessibility">Accessibility Problem</option>
                <option value="security">Security Concern</option>
                <option value="content">Content Issue</option>
                <option value="account">Account Problem</option>
                <option value="payment">Payment/Billing Issue</option>
                <option value="mobile">Mobile App Issue</option>
                <option value="other">Other Technical Issue</option>
              </select>
            </div>

            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-4">Issue Severity</label>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="issueSeverity" value="low" className="hidden" />
                  <div className="rating-content flex flex-col items-center">
                    <div className="rating-number severity-1 flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold mb-1">1</div>
                    <span className="rating-label text-xs text-success">Low</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="issueSeverity" value="medium" className="hidden" />
                  <div className="rating-content flex flex-col items-center">
                    <div className="rating-number severity-2 flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold mb-1">2</div>
                    <span className="rating-label text-xs text-warning">Medium</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="issueSeverity" value="high" className="hidden" />
                  <div className="rating-content flex flex-col items-center">
                    <div className="rating-number severity-3 flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold mb-1">3</div>
                    <span className="rating-label text-xs text-error">High</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="issueSeverity" value="critical" className="hidden" />
                  <div className="rating-content flex flex-col items-center">
                    <div className="rating-number severity-4 flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold mb-1">4</div>
                    <span className="rating-label text-xs text-error">Critical</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="issueTitle">Issue Title <span className="text-error">*</span></label>
              <input type="text" id="issueTitle" name="issueTitle" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200" placeholder="Brief description of the issue" maxLength="100" />
              <div className="text-xs text-text-secondary mt-1 italic">Keep it concise and descriptive (max 100 characters)</div>
            </div>

            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="issueDescription">Detailed Description <span className="text-error">*</span></label>
              <textarea id="issueDescription" name="issueDescription" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 min-h-[150px]" placeholder="Please provide a detailed description of the issue, including what you were trying to do when it occurred..."></textarea>
              <div className="text-xs text-text-secondary mt-1 italic">Include as much detail as possible to help us understand and reproduce the issue</div>
            </div>

            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="stepsToReproduce">Steps to Reproduce</label>
              <textarea id="stepsToReproduce" name="stepsToReproduce" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 min-h-[120px]" placeholder="1. Go to...\n2. Click on...\n3. Enter...\n4. The issue occurs..."></textarea>
              <div className="text-xs text-text-secondary mt-1 italic">List the exact steps someone would need to follow to reproduce this issue</div>
            </div>

            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="expectedBehavior">Expected Behavior</label>
              <textarea id="expectedBehavior" name="expectedBehavior" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 min-h-[80px]" placeholder="What did you expect to happen?"></textarea>
            </div>

            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="actualBehavior">Actual Behavior</label>
              <textarea id="actualBehavior" name="actualBehavior" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 min-h-[80px]" placeholder="What actually happened instead?"></textarea>
            </div>

            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2">Device & Browser Information</label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-1" htmlFor="deviceType">Device Type</label>
                  <select id="deviceType" name="deviceType" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 cursor-pointer">
                    <option value="">Select device</option>
                    <option value="desktop">Desktop</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                    <option value="mobile">Mobile Phone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-1" htmlFor="operatingSystem">Operating System</label>
                  <select id="operatingSystem" name="operatingSystem" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 cursor-pointer">
                    <option value="">Select OS</option>
                    <option value="windows">Windows</option>
                    <option value="macos">macOS</option>
                    <option value="linux">Linux</option>
                    <option value="android">Android</option>
                    <option value="ios">iOS</option>
                  </select>
                </div>
                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-1" htmlFor="browser">Browser</label>
                  <select id="browser" name="browser" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 cursor-pointer">
                    <option value="">Select browser</option>
                    <option value="chrome">Chrome</option>
                    <option value="firefox">Firefox</option>
                    <option value="safari">Safari</option>
                    <option value="edge">Edge</option>
                    <option value="opera">Opera</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-1" htmlFor="browserVersion">Browser Version</label>
                  <input type="text" id="browserVersion" name="browserVersion" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200" placeholder="e.g., 128.0.6613.120" />
                </div>
              </div>
            </div>

            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="errorMessages">Error Messages or Console Logs</label>
              <textarea id="errorMessages" name="errorMessages" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-error focus:ring-1 focus:ring-error transition-all duration-200 min-h-[100px] font-mono text-sm" placeholder="If you see any error messages or if you know how to check browser console, please paste the error messages here..."></textarea>
              <div className="text-xs text-text-secondary mt-1 italic">Copy and paste any error messages exactly as they appear</div>
            </div>

            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="additionalInfo">Additional Information</label>
              <textarea id="additionalInfo" name="additionalInfo" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 min-h-[80px]" placeholder="Any other information that might be helpful (screenshots description, frequency of the issue, etc.)..."></textarea>
            </div>

            <label className="flex items-center p-3 bg-surface rounded-lg border border-gray-600 hover:bg-gray-800 transition-all duration-200">
              <input type="checkbox" name="contactForIssue" value="yes" className="w-4 h-4 text-accent bg-transparent border-text-secondary/50 rounded focus:ring-accent accent-accent" />
              <span className="ml-3 text-text-primary">I'm available to be contacted for more information about this issue</span>
            </label>
          </div>

          <div className="form-section mb-8">
            <h2 className="text-2xl font-clash font-semibold text-accent mb-4 pb-2 border-b-2 border-accent/30">
              Detailed Feedback
            </h2>
            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="likes">What do you like most about Vyomarr?</label>
              <textarea id="likes" name="likes" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 min-h-[120px]" placeholder="Tell us what you enjoy about our platform..."></textarea>
            </div>
            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="improvements">What could we improve?</label>
              <textarea id="improvements" name="improvements" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 min-h-[120px]" placeholder="Share your suggestions for improvement..."></textarea>
            </div>
            <div className="form-group mb-6">
              <label className="block text-text-secondary font-medium mb-2" htmlFor="features">What new features would you like to see?</label>
              <textarea id="features" name="features" className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 min-h-[120px]" placeholder="Describe any features you'd like us to add..."></textarea>
            </div>
          </div>

          <div className="form-section mb-8">
            <h2 className="text-2xl font-clash font-semibold text-accent mb-4 pb-2 border-b-2 border-accent/30">
              Recommendation
            </h2>
            <div className="form-group">
              <label className="block text-text-secondary font-medium mb-4">How likely are you to recommend Vyomarr to others?</label>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="recommendation" value="1" className="hidden" />
                  <div className="flex flex-col items-center rating-content">
                    <div className="rating-number flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold bg-gray-800 text-text-primary mb-1">1</div>
                    <span className="text-xs text-text-secondary">Not Likely</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="recommendation" value="2" className="hidden" />
                  <div className="flex flex-col items-center rating-content">
                    <div className="rating-number flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold bg-gray-800 text-text-primary mb-1">2</div>
                    <span className="text-xs text-text-secondary">Unlikely</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="recommendation" value="3" className="hidden" />
                  <div className="flex flex-col items-center rating-content">
                    <div className="rating-number flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold bg-gray-800 text-text-primary mb-1">3</div>
                    <span className="text-xs text-text-secondary">Neutral</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="recommendation" value="4" className="hidden" />
                  <div className="flex flex-col items-center rating-content">
                    <div className="rating-number flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold bg-gray-800 text-text-primary mb-1">4</div>
                    <span className="text-xs text-text-secondary">Likely</span>
                  </div>
                </label>
                <label className="flex-1 flex flex-col items-center p-3 rounded-lg border-2 border-transparent hover:border-accent/50 cursor-pointer transition-all duration-200 min-w-[70px] bg-surface">
                  <input type="radio" name="recommendation" value="5" className="hidden" />
                  <div className="flex flex-col items-center rating-content">
                    <div className="rating-number flex items-center justify-center w-8 h-8 rounded-full text-lg font-bold bg-gray-800 text-text-primary mb-1">5</div>
                    <span className="text-xs text-text-secondary">Very Likely</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="submit-section text-center pt-8 border-t border-text-secondary/20 mt-8">
            <button type="submit" className="inline-block bg-accent hover:bg-accent/80 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 cosmic-glow cosmic-glow-hover">
              Submit Feedback
            </button>
            <div className="text-sm text-text-secondary mt-4 italic">Thank you for helping us improve Vyomarr!</div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default IssuesPage;
