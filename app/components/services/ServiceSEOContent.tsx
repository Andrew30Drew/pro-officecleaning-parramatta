import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaPhone, FaArrowRight } from 'react-icons/fa';

interface ServiceContentProps {
  title: string;
  description: string;
  benefits: string[];
  process: string[];
  whyChooseUs: string[];
  serviceAreas: string[];
  faqs: { question: string; answer: string }[];
  images: { src: string; alt: string }[];
  relatedServices?: string[];
}

export default function ServiceSEOContent({
  title,
  description,
  benefits,
  process,
  whyChooseUs,
  serviceAreas,
  faqs,
  images,
}: ServiceContentProps) {
  return (
    <div className="w-full">
      {/* Hero Content Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-darkblue leading-tight mb-6">
                {title}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                {description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center bg-greenprimary hover:bg-green-600 text-white rounded-full px-8 py-4 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="font-semibold">Get Free Quote</span>
                  <FaArrowRight className="ml-2" />
                </Link>
                
                <a
                  href="tel:1300494983"
                  className="inline-flex items-center justify-center border-2 border-greenprimary text-greenprimary hover:bg-greenprimary hover:text-white rounded-full px-8 py-4 transition-colors duration-300"
                >
                  <FaPhone className="mr-2" />
                  <span className="font-semibold">1300 494 983</span>
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="lg:w-1/2">
              {images[0] && (
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  width={600}
                  height={400}
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-darkblue mb-4">
              Benefits of Our {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why businesses across Sydney NSW choose Pro Clean Corp for their cleaning needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-greenprimary text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-darkblue mb-4">
              Our {title} Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures consistent, high-quality results every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-greenprimary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 lg:py-16 bg-greenprimary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Pro Clean Corp for {title}?
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <FaCheckCircle className="text-white text-xl mt-1 flex-shrink-0" />
                    <p className="leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              {images[1] && (
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  width={600}
                  height={400}
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-darkblue mb-4">
              {title} Service Areas in Sydney NSW
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide professional {title.toLowerCase()} services across Sydney NSW and surrounding areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-lg text-center hover:bg-slate-100 transition-colors">
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-darkblue mb-4">
              Frequently Asked Questions About {title}
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our {title.toLowerCase()} services.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-darkblue mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 lg:py-16 bg-darkblue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Professional {title}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact Pro Clean Corp today for a free quote and discover why over 1,200 businesses trust us for their cleaning needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center bg-greenprimary hover:bg-green-600 text-white rounded-full px-8 py-4 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="font-semibold">Get Your Free Quote</span>
              <FaArrowRight className="ml-2" />
            </Link>
            
            <a
              href="tel:1300494983"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-darkblue rounded-full px-8 py-4 transition-colors duration-300"
            >
              <FaPhone className="mr-2" />
              <span className="font-semibold">Call 1300 494 983</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}