import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="MK Beauty Saloon Interior" 
                className="rounded-3xl shadow-lg w-full object-cover h-[400px] md:h-[500px]"
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-xl text-center hidden sm:block">
                <span className="block text-4xl font-bold text-primary font-playfair">10+</span>
                <span className="text-gray-600 font-medium text-sm">Years of<br/>Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px bg-primary w-12"></div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">About MK Beauty Saloon</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-text leading-tight">
              A Trusted Beauty Destination Exclusively for Women
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Located in Chaitanyapuri, MK Beauty Saloon is dedicated to providing premium beauty care exclusively for ladies. Our goal is to help every woman feel confident, beautiful, and relaxed from the moment she walks through our doors.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              With professional beauty experts, high-quality products, and a friendly, hygienic environment, we ensure every customer leaves satisfied and glowing.
            </p>

            <div className="flex items-center gap-6 pt-6">
              <a 
                href="#services"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-600 transition-colors shadow-md"
              >
                Our Services
              </a>
              <div className="flex -space-x-3">
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1" alt="Customer" />
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=5" alt="Customer" />
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=9" alt="Customer" />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-primary">
                  70+
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
