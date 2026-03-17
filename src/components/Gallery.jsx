import { motion } from 'framer-motion';

const images = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hair styling",
    title: "Hair Styling"
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Salon interior",
    title: "Salon Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1516975080661-462319d6dca3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Makeup work",
    title: "Bridal Makeup"
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a1dc8f06f5c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Facial treatment",
    title: "Facial Treatment"
  },
  {
    src: "https://images.unsplash.com/photo-1595054324204-6352934ff246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Manicure",
    title: "Manicure & Pedicure"
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Spa treatment",
    title: "Relaxing Spa"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-primary w-12"></div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Portfolio</span>
            <div className="h-px bg-primary w-12"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-text mb-6">
            Gallery & Work
          </h2>
          <p className="text-gray-600 text-lg">
            Take a look at our salon's beautiful interior and the stunning transformations of our happy clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-3xl aspect-square shadow-sm"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold font-playfair translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.title}
                </h3>
                <div className="h-1 w-12 bg-primary mt-4 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-text border-2 border-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Follow Us on Instagram
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
