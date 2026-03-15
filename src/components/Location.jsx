import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

const Location = () => {
  return (
    <section id="contact" className="py-20 bg-secondary relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row bg-white rounded-[40px] shadow-xl overflow-hidden">
          
          {/* Contact Details */}
          <div className="w-full lg:w-1/2 p-10 md:p-14 lg:p-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px bg-primary w-12"></div>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Visit Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-text mb-8">
                Our Location
              </h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                    <FiMapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-playfair text-text mb-2">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Pathange Residency, Chaitanyapuri Main Rd, <br/>
                      Near Ramalayam Temple, Prabhat Nagar Colony, <br/>
                      Dilsukhnagar, Hyderabad, Telangana 500060
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                    <FiPhone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-playfair text-text mb-2">Phone</h4>
                    <a href="tel:+919652259187" className="text-gray-600 hover:text-primary transition-colors block text-lg">
                      +91 9652259187
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                    <FiClock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-playfair text-text mb-2">Working Hours</h4>
                    <p className="text-gray-600 text-lg">
                      Everyday: 10:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <a 
                  href="tel:+919652259187"
                  className="bg-primary hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 shadow-md text-center"
                >
                  Call Now
                </a>
                <a 
                  href="https://maps.google.com/?q=Pathange+Residency+Chaitanyapuri+Main+Rd+Dilsukhnagar+Hyderabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-text border-2 border-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-300 text-center"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-1/2 min-h-[400px] bg-gray-200">
            <iframe 
              title="MK Beauty Saloon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15230.124508210332!2d78.5284831613919!3d17.37351631584347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e6c7c4b4b7%3A0xe1043329fc5f483c!2sChaitanyapuri%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
