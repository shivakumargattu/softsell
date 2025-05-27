import { useState, useRef, useEffect } from 'react'
import { FiSend, FiX } from 'react-icons/fi'

const ChatWidget = ({ showChat, setShowChat }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm SoftSell AI assistant. How can I help you today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const exampleQuestions = [
    "How do I sell my license?",
    "What software licenses do you accept?",
    "How long does the process take?",
    "What percentage do you take?"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return
    
    // Add user message
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }])
    setInputValue('')
    
    // Simulate bot response after delay
    setTimeout(() => {
      const botResponses = [
        "Our process is simple: upload your license details, get a valuation, and receive payment once verified.",
        "We accept most major software licenses including Adobe, Microsoft, Autodesk, and VMware.",
        "The valuation process is instant, and payments are typically processed within 3 business days after verification.",
        "Our commission is just 15% - significantly lower than most resale platforms."
      ]
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }])
    }, 1000)
  }

  const handleExampleQuestion = (question) => {
    setInputValue(question)
  }

  if (!showChat) return null

  return (
    <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col z-50">
      <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
        <h3 className="font-semibold">SoftSell Assistant</h3>
        <button onClick={() => setShowChat(false)} className="text-white hover:text-blue-200">
          <FiX className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto max-h-96">
        {messages.map((message, index) => (
          <div key={index} className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-gray-700'}`}>
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {exampleQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleExampleQuestion(question)}
              className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded transition-colors truncate"
            >
              {question}
            </button>
          ))}
        </div>
        
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r-lg transition-colors"
          >
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatWidget