import { motion } from 'framer-motion'

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
    quote: "As a startup, every dollar counts. SoftSell provided a quick and fair valuation for our unused Microsoft licenses, giving us much-needed cash flow."
  }
]

const Testimonials = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials