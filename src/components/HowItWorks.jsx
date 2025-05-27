import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: <FaUpload className="w-8 h-8" />,
    title: "Upload License Details",
    description: "Provide information about your unused software licenses through our secure portal."
  },
  {
    icon: <FaSearchDollar className="w-8 h-8" />,
    title: "Get Instant Valuation",
    description: "Our system analyzes market demand and provides a fair valuation within minutes."
  },
  {
    icon: <FaMoneyBillWave className="w-8 h-8" />,
    title: "Receive Payment",
    description: "Once verified, we handle the sale and transfer funds directly to your account."
  }
]

const HowItWorks = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-300">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks