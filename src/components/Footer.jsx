import React from 'react';

const Footer = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Inc.",
      quote: "SoftSell helped us recover over $50,000 in unused Adobe licenses. The process was seamless and their team was incredibly professional."
    },
    {
      name: "Michael Chen",
      role: "CFO",
      company: "StartUp Ventures",
      quote: "As a startup, every dollar counts. SoftSell provided a quick and fair valuation for our unused Microsoft licenses."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Expert Valuations",
      description: "Competitive pricing for Adobe, Microsoft, VMware, and more"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Hassle-Free Process",
      description: "We handle all paperwork and logistics"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fast Payouts",
      description: "Boost your cash flow quickly"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full p-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Turn Unused Licenses into Cash?</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            SoftSell recovers value from unused software licenses—just like <span className="font-semibold text-white">TechCorp Inc.</span> and <span className="font-semibold text-white">StartUp Ventures</span>.
          </p>
          <button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Your Free Audit
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold">{benefit.title}</h4>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <blockquote className="text-gray-300 italic mb-4">"{testimonial.quote}"</blockquote>
                  <div className="text-sm">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-2">
              <a href="mailto:sales@softsell.com" className="text-gray-300 hover:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sales@softsell.com
              </a>
              <a href="tel:5551234567" className="text-gray-300 hover:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (555) 123-4567
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="mb-4">
              <a href="#" className="text-gray-400 hover:text-white mx-4">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white mx-4">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white ml-4">Careers</a>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;