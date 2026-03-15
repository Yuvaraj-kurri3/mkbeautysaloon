import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const reviews = [
  {
    id: 1,
    name: "Priya Reddy",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/150?img=1",
    review: "I came here for the first time and I loved the haircut and eyebrow service. Staff are very friendly and professional. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Anjali Sharma",
    role: "Bride",
    image: "https://i.pravatar.cc/150?img=5",
    review: "Got my bridal makeup done at MK Beauty Saloon. They made me look absolutely stunning! The makeup stayed flawless all night.",
    rating: 5
  },
  {
    id: 3,
    name: "Sneha V.",
    role: "Local Resident",
    image: "https://i.pravatar.cc/150?img=9",
    review: "Best salon in Chaitanyapuri! The ambiance is so relaxing and the prices are very affordable for the premium service you get.",
    rating: 4.5
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-background relative">
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
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <div className="h-px bg-primary w-12"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-text mb-6">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all relative mt-10"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-8 text-6xl text-rose-50 font-playfair leading-none pointer-events-none">
                "
              </div>
              
              <div className="flex items-center gap-4 mb-6 -mt-14">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                />
                <div className="pt-8">
                  <h4 className="font-bold text-text">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className={i < Math.floor(review.rating) ? "fill-current" : ""} />
                ))}
              </div>
              
              <p className="text-gray-600 italic leading-relaxed">
                "{review.review}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
