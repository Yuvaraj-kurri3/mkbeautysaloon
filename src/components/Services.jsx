import { motion } from 'framer-motion';
import { FiScissors, FiFeather, FiSmile, FiDroplet, FiStar, FiWind } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Haircut & Styling',
    description: 'Trendy haircuts and styling that match your personality and face shape perfectly.',
    icon: <FiScissors size={32} className="text-primary" />
  },
  {
    id: 2,
    title: 'Eyebrow Shaping',
    description: 'Perfectly shaped eyebrows using the best techniques to enhance your facial features.',
    icon: <FiFeather size={32} className="text-primary" />
  },
  {
    id: 3,
    title: 'Facials & Skin Care',
    description: 'Rejuvenating facials to give your skin a beautiful, healthy, and natural glow.',
    icon: <FiSmile size={32} className="text-primary" />
  },
  {
    id: 4,
    title: 'Hair Spa',
    description: 'Deep conditioning and spa treatments for smooth, shiny, and healthy hair.',
    icon: <FiDroplet size={32} className="text-primary" />
  },
  {
    id: 5,
    title: 'Bridal Makeup',
    description: 'Flawless makeup to make you look like a queen on your most special day.',
    icon: <FiStar size={32} className="text-primary" />
  },
  {
    id: 6,
    title: 'Threading',
    description: 'Precise and gentle threading services for a clean and flawless look.',
    icon: <FiWind size={32} className="text-primary" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full opacity-10 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary rounded-full opacity-10 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-primary w-12"></div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
            <div className="h-px bg-primary w-12"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-text mb-6">
            Premium Beauty Services
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our wide range of professional beauty treatments designed to bring out your best look in a relaxing environment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group relative overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold font-playfair text-text mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 grow">
                  {service.description}
                </p>
                
                <a 
                  href="#book"
                  className="font-semibold text-primary inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-wide text-sm"
                >
                  Book Now 
                  <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
