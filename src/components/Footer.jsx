import { FiPhone, FiMapPin, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-text text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <a href="#" className="font-playfair text-3xl font-bold text-white mb-6 block">
              MK Beauty Saloon
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              A trusted beauty destination exclusively for women in Chaitanyapuri. We help every woman feel confident and beautiful.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold font-playfair mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold font-playfair mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Haircut & Styling</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Eyebrow Shaping</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Facials & Skin Care</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Hair Spa</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Bridal Makeup</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Threading</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold font-playfair mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <FiMapPin size={24} className="text-primary shrink-0" />
                <span>Pathange Residency, Chaitanyapuri Main Rd, Near Ramalayam Temple, Dilsukhnagar, Hyderabad</span>
              </li>
              <li className="flex gap-3 text-gray-400 items-center">
                <FiPhone size={20} className="text-primary shrink-0" />
                <a href="tel:+919652259187" className="hover:text-primary transition-colors">+91 9652259187</a>
              </li>
              <li className="flex gap-3 text-gray-400 items-center">
                <FiClock size={20} className="text-primary shrink-0" />
                <span>10:00 AM – 10:00 PM (Everyday)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} MK Beauty Saloon – All Rights Reserved.</p>
        </div>

    <div className="pt-8 border-t border-white/10 text-center text-gray-500 font-medium">
          <p>Developed by <a href="https://codedef.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400"> &lt;CodeDef/&gt;</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
