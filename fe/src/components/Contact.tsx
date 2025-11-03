import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-yellow relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-navy rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-navy rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-navy rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Ready to Power Your Future?
            </h2>
            <p className="text-xl text-navy/80 mb-8 leading-relaxed">
              Join thousands of businesses and homeowners who have made the switch 
              to clean, renewable energy. Let's create a sustainable tomorrow together.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-navy/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Call Us</p>
                  <p className="text-navy/80">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-navy/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Email Us</p>
                  <p className="text-navy/80">info@ecoflowenergy.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-navy/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Visit Us</p>
                  <p className="text-navy/80">123 Solar Street, Green City, CA 90210</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-navy hover:bg-navy/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-navy font-semibold px-8 py-4 rounded-lg border border-navy/20 transition-all duration-300 hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-navy mb-6">Get in Touch</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your energy needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal hover:bg-teal/90 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;