import { motion } from 'framer-motion';
import { FiUsers, FiTag, FiHeart, FiAward, FiStar, FiCoffee } from 'react-icons/fi';

const features = [
  {
    id: 1,
    title: 'Friendly Staff',
    description: 'Our welcoming team ensures you feel comfortable and pampered throughout your visit.',
    icon: <FiUsers size={28} className="text-white" />
  },
  {
    id: 2,
    title: 'Affordable Pricing',
    description: 'Premium beauty services that give you the best value without breaking the bank.',
    icon: <FiTag size={28} className="text-white" />
  },
  {
    id: 3,
    title: 'Hygienic Environment',
    description: 'We maintain the highest standards of cleanliness and sanitization for your safety.',
    icon: <FiHeart size={28} className="text-white" />
  },
  {
    id: 4,
    title: 'Experienced Professionals',
    description: 'Skilled beauty experts with years of experience in specialized treatments.',
    icon: <FiAward size={28} className="text-white" />
  },
  {
    id: 5,
    title: 'High Customer Satisfaction',
    description: 'Rated 4.9 stars by over 70+ happy and returning customers in Chaitanyapuri.',
    icon: <FiStar size={28} className="text-white" />
  },
  {
    id: 6,
    title: 'Relaxing Beauty Experience',
    description: 'A soothing ambiance designed specifically to help you unwind and rejuvenate.',
    icon: <FiCoffee size={28} className="text-white" />
  }
];

const WhyChooseUs = () => {
  return (
    <section id="whyus" className="py-20 bg-secondary relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit mb-10 lg:mb-0 space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px bg-primary w-12"></div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Promise</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-text leading-tight">
              Why Women Love Our Salon
            </h2>
            
            <p className="text-gray-600 text-lg">
              We go above and beyond to deliver an exceptional beauty experience. Here's why our clients keep coming back.
            </p>
            
            <div className="pt-6">
              <a 
                href="#book"
                className="inline-block bg-white text-text border border-gray-200 px-8 py-4 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors shadow-sm"
              >
                Book Your Visit
              </a>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-rose-50 group group-hover:bg-primary/5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-md group-hover:-translate-y-2 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold font-playfair text-text mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
