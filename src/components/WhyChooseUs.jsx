import { FiShield, FiClock, FiDollarSign, FiHeadphones } from 'react-icons/fi'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "Secure Transactions",
    description: "Bank-level security for all your transactions and data."
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    title: "Fast Payouts",
    description: "Get paid within 3 business days after verification."
  },
  {
    icon: <FiDollarSign className="w-6 h-6" />,
    title: "Best Prices",
    description: "We guarantee the best market prices for your licenses."
  },
  {
    icon: <FiHeadphones className="w-6 h-6" />,
    title: "Dedicated Support",
    description: "Our team is available 24/7 to answer your questions."
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoftSell?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-300 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs