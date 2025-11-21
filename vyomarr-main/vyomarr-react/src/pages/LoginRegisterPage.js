
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginRegisterPage = () => {
  useEffect(() => {
    // Placeholder for JavaScript migration: 
    // The original HTML page contains extensive JavaScript for:
    // - Mobile menu toggle
    // - Tab switching (Login/Register)
    // - Password visibility toggle
    // - Form validation and submission (including simulated API calls)
    // - Firebase authentication (email/password, Google, Facebook)
    // This logic needs to be re-implemented using React's state management (useState) 
    // and event handlers. Firebase integration would require installing Firebase SDK 
    // in the React project and using it within useEffect or custom hooks.

    // Example of how tab switching might be handled in React:
    // const handleTabClick = (tabName) => {
    //   setActiveTab(tabName);
    // };

    // For now, we'll just include the styling for the tabs to ensure visual consistency.
    const style = document.createElement('style');
    style.textContent = `
      .tab-btn.active {
          background-color: var(--color-accent);
          color: white;
      }
      .tab-content {
          display: none;
      }
      .tab-content.active {
          display: block;
      }
    `;
    document.head.appendChild(style);

    // The original script also had event listeners for forms and buttons.
    // These would need to be attached to React components using onClick, onSubmit, etc.
    // and manage state accordingly.

    // Cleanup function (important for useEffect)
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex">
        <div className="hidden lg:flex lg:w-5/12 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://science.nasa.gov/wp-content/uploads/2023/09/ssc2019-15b-med.jpg" height="100%" width="100%" alt="Space background" className="object-cover w-full h-full" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/60 to-background/90"></div>
          </div>

          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-text-secondary rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-text-secondary/80 rounded-full animate-pulse delay-1500"></div>
            <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-accent/40 rounded-full animate-pulse delay-2000"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center p-12 text-white">
            <div className="max-w-md">
              <h1 className="text-4xl font-clash font-bold mb-6">
                Don't Just <span className="text-accent">Watch The Stars.</span>Chart Them
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Vyomarr is your launchpad. Access exclusive theories, submit your own findings, and journey deeper into the cosmos than ever before.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-cosmic flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Access exclusive space mysteries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-cosmic flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Submit your own theories</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-cosmic flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Connect with space enthusiasts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col justify-center p-6 lg:p-12">
          <div className="lg:hidden mb-8 text-center">
            <div className="relative h-32 mb-6 rounded-cosmic overflow-hidden">
              <img src="https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Space exploration" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }} />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60"></div>
            </div>
            <h1 className="text-2xl font-clash font-bold mb-2">Join Vyomarr</h1>
            <p className="text-text-secondary">Explore the infinite mysteries of space</p>
          </div>

          <div className="max-w-md mx-auto w-full">
            <div className="flex bg-surface rounded-cosmic p-1 mb-8">
              <button className="flex-1 py-3 px-4 text-sm font-medium rounded-cosmic-sm transition-cosmic tab-btn active" data-tab="login">
                Login
              </button>
              <button className="flex-1 py-3 px-4 text-sm font-medium rounded-cosmic-sm transition-cosmic tab-btn" data-tab="register">
                Register
              </button>
            </div>

            <div className="tab-content active" id="login-tab">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-clash font-bold mb-2">Welcome Back, Explorer</h2>
                <p className="text-text-secondary">Continue your space exploration journey</p>
              </div>

              <form className="space-y-6" id="login-form">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium mb-2">Email or Username</label>
                  <div className="relative">
                    <input type="email" id="login-email" name="email" placeholder="explorer@vyomarr.com" className="w-full bg-surface border border-cosmic rounded-cosmic px-4 py-3 focus:outline-none focus:border-accent transition-cosmic" required />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg className="w-5 h-5 text-text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div className="error-message hidden text-error text-sm mt-1"></div>
                </div>

                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <input type="password" id="login-password" name="password" placeholder="cosmic123" className="w-full bg-surface border border-cosmic rounded-cosmic px-4 py-3 pr-12 focus:outline-none focus:border-accent transition-cosmic" required />
                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center toggle-password">
                      <svg className="w-5 h-5 text-text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    </button>
                  </div>
                  <div className="error-message hidden text-error text-sm mt-1"></div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-cosmic text-accent focus:ring-accent focus:ring-offset-0" />
                    <span className="ml-2 text-sm text-text-secondary">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-accent hover:text-accent/80 transition-cosmic">Forgot password?</a>
                </div>

                <button type="submit" className="w-full bg-accent text-white py-3 rounded-cosmic font-semibold hover:bg-accent/80 transition-cosmic cosmic-glow">
                  <span className="login-btn-text">Sign In</span>
                  <div className="login-spinner hidden">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing In...
                  </div>
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-cosmic"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-text-secondary">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button id="google-signin-btn" type="button" className="flex justify-center items-center px-4 py-3 border border-cosmic rounded-cosmic hover:bg-surface transition-cosmic">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium">Google</span>
                  </button>
                  <button id="facebook-signin-btn" type="button" className="flex justify-center items-center px-4 py-3 border border-cosmic rounded-cosmic hover:bg-surface transition-cosmic">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium">Facebook</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="tab-content hidden" id="register-tab">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-clash font-bold mb-2">Create Account</h2>
                <p className="text-text-secondary">Begin your cosmic exploration adventure</p>
              </div>

              <form className="space-y-6" id="register-form">
                <div>
                  <label htmlFor="register-name" className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <input type="text" id="register-name" name="name" placeholder="John Doe" className="w-full bg-surface border border-cosmic rounded-cosmic px-4 py-3 focus:outline-none focus:border-accent transition-cosmic" required />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg className="w-5 h-5 text-text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="error-message hidden text-error text-sm mt-1"></div>
                </div>

                <div>
                  <label htmlFor="register-email" className="block text-sm font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <input type="email" id="register-email" name="email" placeholder="john.doe@email.com" className="w-full bg-surface border border-cosmic rounded-cosmic px-4 py-3 focus:outline-none focus:border-accent transition-cosmic" required />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg className="w-5 h-5 text-text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div className="error-message hidden text-error text-sm mt-1"></div>
                </div>

                <div>
                  <label htmlFor="register-password" className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <input type="password" id="register-password" name="password" placeholder="Create a strong password" className="w-full bg-surface border border-cosmic rounded-cosmic px-4 py-3 pr-12 focus:outline-none focus:border-accent transition-cosmic" required />
                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center toggle-password">
                      <svg className="w-5 h-5 text-text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    </button>
                  </div>
                  <div className="error-message hidden text-error text-sm mt-1"></div>
                </div>

                <div>
                  <label htmlFor="register-confirm-password" className="block text-sm font-medium mb-2">Confirm Password</label>
                  <div className="relative">
                    <input type="password" id="register-confirm-password" name="confirmPassword" placeholder="Confirm your password" className="w-full bg-surface border border-cosmic rounded-cosmic px-4 py-3 pr-12 focus:outline-none focus:border-accent transition-cosmic" required />
                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center toggle-password">
                      <svg className="w-5 h-5 text-text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    </button>
                  </div>
                  <div className="error-message hidden text-error text-sm mt-1"></div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start">
                    <input type="checkbox" className="rounded border-cosmic text-accent focus:ring-accent focus:ring-offset-0 mt-1" required />
                    <span className="ml-2 text-sm text-text-secondary">
                      I agree to the <a href="terms.html" className="text-accent hover:text-accent/80 transition-cosmic">Terms of Service</a> and <a href="policy.html" className="text-accent hover:text-accent/80 transition-cosmic">Privacy Policy</a>
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="rounded border-cosmic text-accent focus:ring-accent focus:ring-offset-0 mt-1" />
                    <span className="ml-2 text-sm text-text-secondary">
                      Subscribe to our articles for the latest space discoveries and mysteries
                    </span>
                  </label>
                </div>

                <button type="submit" className="w-full bg-accent text-white py-3 rounded-cosmic font-semibold hover:bg-accent/80 transition-cosmic cosmic-glow">
                  <span className="register-btn-text">Create Account</span>
                  <div className="register-spinner hidden">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating Account...
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginRegisterPage;
