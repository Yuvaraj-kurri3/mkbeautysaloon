import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="book" className="py-24 relative overflow-hidden bg-primary">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 z-0 transform translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full opacity-20 z-0 transform -translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-16 rounded-[40px] shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
            Ready for Your <span className="italic">Beauty</span> Transformation?
          </h2>
          
          <p className="text-rose-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Book your appointment today and experience premium beauty care from our expert stylists in a relaxing environment.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="tel:+919652259187"
              className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-rose-50 transition-colors duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Book Appointment
            </a>
            <a 
              href="tel:+919652259187"
              className="bg-transparent text-white border-2 border-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
