import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary rounded-l-full opacity-50 -z-10 transform translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full opacity-5 -z-10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-text mb-2">
              <span className="text-accent">⭐</span> 
              4.9 Rating | 70+ Happy Clients
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-text leading-tight">
              Beauty That Makes You <span className="text-primary italic">Shine</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-700 font-medium">
              Premium beauty care exclusively for women in Chaitanyapuri.
            </h2>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
              Experience professional beauty services in a friendly and relaxing environment where every woman feels confident and beautiful.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
              <a 
                href="#book"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-rose-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Book Appointment
              </a>
              <a 
                href="tel:+919652259187"
                className="w-full sm:w-auto px-8 py-4 bg-white text-text border border-gray-200 font-semibold rounded-full hover:bg-gray-50 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-t-[100px] rounded-br-[100px] overflow-hidden shadow-2xl border-4 border-white h-[500px] md:h-[600px] w-full max-w-md mx-auto">
              {/* placeholder color since we don't have images right now */}
              <div className="absolute inset-0 bg-linear-to-tr from-rose-200 to-rose-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Beautiful woman receiving beauty treatment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                ⭐
              </div>
              <div>
                <p className="text-sm font-bold">100%</p>
                <p className="text-xs text-gray-500">Satisfaction</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
