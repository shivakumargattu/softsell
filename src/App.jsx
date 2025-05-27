import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import ChatWidget from './components/ChatWidget'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showChat, setShowChat] = useState(false)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <HowItWorks />
          <WhyChooseUs  darkMode={darkMode}/>
          <Testimonials />
          <ContactForm />
        </motion.main>
        
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700 mt-12">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} SoftSell. All rights reserved.
          </p>
        </footer>
      </div>
      
      <ChatWidget showChat={showChat} setShowChat={setShowChat} />
      <button 
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
      >
        {showChat ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default App