import Link from 'next/link';
import { FaQuoteLeft, FaStar, FaPhone, FaEnvelope, FaCheckCircle, FaUsers, FaClock, FaAward, FaChevronDown } from 'react-icons/fa';
import Ourservices from '../components/Ourservices';

export default function CommercialOfficeCleaningServicePage() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Tech Solutions Ltd",
      location: "Sydney CBD", 
      rating: 5,
      text: "Pro Clean Corp's commercial office cleaning service has transformed our workplace. Our employees are happier and more productive in the clean environment."
    },
    {
      name: "David Chen",
      company: "Legal Partners",
      location: "North Sydney",
      rating: 5,
      text: "Professional, reliable, and thorough. Their office cleaning service exceeds our expectations every single time."
    },
    {
      name: "Emma Rodriguez", 
      company: "Marketing Agency",
      location: "Parramatta",
      rating: 5,
      text: "Best commercial office cleaning service in Sydney. They work around our schedule and deliver consistent quality."
    }
  ];

  const faqs = [
    {
      question: "What does your commercial office cleaning service include?",
      answer: "Our comprehensive service includes workstation cleaning, floor maintenance, restroom sanitization, kitchen cleaning, waste removal, window cleaning, carpet care, and specialized office equipment cleaning."
    },
    {
      question: "How often should we book commercial office cleaning service?",
      answer: "Most offices benefit from daily cleaning for high-traffic areas, weekly deep cleaning, and monthly comprehensive maintenance. We customize frequency based on your office size and needs."
    },
    {
      question: "Can your office cleaning service work after hours?",
      answer: "Yes, we specialize in after-hours commercial office cleaning to avoid disrupting business operations. We can clean evenings, early mornings, or weekends."
    },
    {
      question: "What makes your commercial office cleaning service different?",
      answer: "Our service combines professional expertise, eco-friendly products, flexible scheduling, competitive rates, comprehensive insurance, and a 100% satisfaction guarantee."
    },
    {
      question: "How do you ensure quality in your office cleaning service?",
      answer: "We use detailed checklists, conduct regular inspections, gather client feedback, provide supervisor oversight, and maintain ongoing staff training programs."
    },
    {
      question: "Is your commercial office cleaning service insured?",
      answer: "Yes, we carry comprehensive public liability insurance, professional indemnity coverage, and workers compensation specifically for commercial cleaning services."
    }
  ];

  const services = [
    'Executive Office Suites',
    'Open Plan Workspaces', 
    'Meeting & Conference Rooms',
    'Reception & Lobby Areas',
    'Kitchen & Break Rooms',
    'Restroom Facilities',
    'Storage & Utility Areas',
    'After Hours Cleaning'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Testimonial Cards */}
      <section className="relative bg-gradient-to-br from-darkblue via-blueprimary to-greenprimary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="inline-flex items-center bg-greenprimary rounded-full px-6 py-3 mb-6">
                  <FaAward className="text-white mr-2" />
                  <span className="text-white font-semibold">Premium Office Cleaning Service</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Commercial 
                  <span className="block text-greenprimary">Office Cleaning</span>
                  <span className="block text-3xl md:text-4xl font-normal">Service Sydney NSW</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
                  Transform your office environment with our premium commercial office cleaning service. 
                  Professional results that enhance productivity and impress clients.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a 
                    href="tel:1300494983"
                    className="bg-greenprimary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all duration-300 shadow-lg"
                  >
                    <FaPhone className="mr-3" />
                    Get Service Quote
                  </a>
                  <Link 
                    href="/contact-us"
                    className="bg-white text-darkblue hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all duration-300"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Floating Testimonial Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-2xl relative">
                <FaQuoteLeft className="text-greenprimary text-3xl mb-4" />
                <p className="text-gray-700 mb-6 italic text-lg">
                  "{testimonials[0].text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-greenprimary rounded-full flex items-center justify-center mr-4">
                    <FaUsers className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-darkblue">{testimonials[0].name}</div>
                    <div className="text-gray-600 text-sm">{testimonials[0].company}</div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Icons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
              Complete Office Cleaning Service Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commercial office cleaning service covers every area of your workplace, 
              ensuring a professional environment that enhances your business image.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-greenprimary">
                <div className="w-16 h-16 bg-gradient-to-br from-greenprimary to-blueprimary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-darkblue mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">Professional cleaning tailored to your specific office requirements.</p>
              </div>
            ))}
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-greenprimary mb-2">500+</div>
              <div className="text-gray-600">Office Clients</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blueprimary mb-2">24/7</div>
              <div className="text-gray-600">Service Available</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-greenprimary mb-2">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blueprimary mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
              Commercial Office Cleaning Service FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our professional office cleaning services.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-darkblue mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                  <FaChevronDown className="text-greenprimary ml-4 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-greenprimary to-blueprimary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Office Clients Say
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real feedback from businesses who trust our commercial office cleaning service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <FaQuoteLeft className="text-greenprimary text-2xl mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-greenprimary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-darkblue">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                    <div className="text-greenprimary text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-darkblue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready for Premium Office Cleaning Service?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
            Join 500+ satisfied businesses who trust Pro Clean Corp for their commercial office cleaning needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-greenprimary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Now</h3>
              <a href="tel:1300494983" className="text-greenprimary hover:underline text-lg">1300 494 983</a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-greenprimary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href="mailto:hello@procleancorp.com.au" className="text-greenprimary hover:underline">hello@procleancorp.com.au</a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-greenprimary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Hours</h3>
              <p className="text-gray-300">24/7 Emergency Available</p>
            </div>
          </div>
          
          <Link 
            href="/contact-us"
            className="inline-flex items-center bg-greenprimary hover:bg-green-600 text-white px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 shadow-lg"
          >
            Book Your Office Cleaning Service
          </Link>
        </div>
      </section>

      <Ourservices bg_color="bg-gray-50" />
    </div>
  );
}