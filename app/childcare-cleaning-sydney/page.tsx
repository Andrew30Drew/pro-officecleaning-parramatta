import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Childcare Cleaning Sydney NSW | Professional Early Learning Centre Cleaning',
  description: 'Expert childcare cleaning services in Sydney NSW. Professional daycare centre cleaning, early learning facility sanitization, child-safe cleaning products for childcare centers & preschools.',
  keywords: 'childcare cleaning Sydney, daycare cleaning NSW, early learning centre cleaning, preschool cleaning services, childcare facility maintenance',
  openGraph: {
    title: 'Childcare Cleaning Sydney NSW | Professional Early Learning Centre Cleaning',
    description: 'Expert childcare cleaning services in Sydney NSW. Professional daycare centre cleaning, early learning facility sanitization, child-safe cleaning products for childcare centers & preschools.',
    url: '/childcare-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Childcare cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/childcare-cleaning-sydney' }
};

export default function ChildcareCleaningSydneyPage() {
  const faqs = [
    {
      question: 'What childcare cleaning services do you provide in Sydney NSW?',
      answer: 'We provide comprehensive childcare cleaning including toy sanitization, classroom deep cleaning, play area maintenance, bathroom sanitization, kitchen cleaning, sleep room care, art room maintenance, and playground cleaning. Our services address all areas of childcare operations from infant rooms to outdoor play spaces using child-safe, non-toxic cleaning products.'
    },
    {
      question: 'Do you use child-safe cleaning products and comply with childcare regulations?',
      answer: 'Yes, our childcare cleaning uses exclusively child-safe, non-toxic, eco-friendly cleaning products that comply with Australian childcare standards and National Quality Framework requirements. Our cleaning protocols address infection control, safety procedures, and documentation requirements for licensing inspections and regulatory compliance.'
    },
    {
      question: 'How do you sanitize toys and prevent illness transmission in childcare centres?',
      answer: 'Our toy sanitization includes systematic cleaning of all play materials using child-safe disinfectants, proper dwell times, and age-appropriate cleaning procedures. We employ color-coded cleaning systems, separate cleaning protocols for different toy types, and comprehensive sanitization schedules designed to prevent cross-contamination and illness transmission.'
    },
    {
      question: 'Can you clean during childcare operating hours or after closing?',
      answer: "We provide flexible childcare cleaning scheduling including after-hours deep cleaning, nap-time maintenance, weekend comprehensive cleaning, and holiday intensive cleaning. Our scheduling accommodates children's routines, nap schedules, and program activities to maintain cleaning effectiveness while minimizing disruption to childcare operations throughout Sydney NSW."
    },
    {
      question: 'What measures do you take to ensure child safety during cleaning?',
      answer: 'We maintain strict child safety protocols including non-toxic product selection, secure chemical storage, child-proof cleaning procedures, and staff training in childcare environments. Our safety measures include background-checked staff, child-friendly cleaning schedules, hazard prevention protocols, and compliance with Working with Children Check requirements for childcare facility access.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Childcare Cleaning Sydney NSW"
        serviceDescription="Expert childcare cleaning services in Sydney NSW. Professional daycare centre cleaning, early learning facility sanitization, child-safe cleaning products."
        serviceUrl="/childcare-cleaning-sydney"
        serviceType="Childcare Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Toy Sanitization',
          'Playground Cleaning',
          'Classroom Cleaning',
          'Infection Control',
          'Nursery Cleaning',
          'Eco-friendly Cleaning'
        ]}
        faqs={faqs}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary via-greenprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Childcare Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional childcare and early learning centre cleaning services ensuring safe, hygienic environments for children. Expert sanitization, child-safe cleaning products, and comprehensive facility maintenance for daycare centres, preschools, and childcare facilities across Sydney NSW.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/children.jpg"
                alt="Childcare cleaning Sydney NSW - Professional early learning centre cleaning"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
                />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Childcare Cleaning Services in Sydney NSW</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp provides specialized childcare cleaning services throughout Sydney NSW, ensuring safe, hygienic, and nurturing environments for children in daycare centres, early learning facilities, preschools, and childcare centers. Our childcare cleaning specialists understand the critical importance of maintaining sanitized play areas, clean learning spaces, and healthy environments that protect children's wellbeing while supporting early childhood development and education.
                </p>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Childcare cleaning requires specialized knowledge of child safety protocols, non-toxic cleaning products, infection control procedures, and regulatory compliance that are essential for successful childcare operations. Our experienced childcare cleaning teams provide comprehensive cleaning solutions including toy sanitization, playground maintenance, bathroom deep cleaning, and compliance with Australian childcare standards and National Quality Framework requirements.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Child Safety & Health Focus</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Professional childcare cleaning is essential for preventing illness transmission, maintaining child safety, and ensuring regulatory compliance. Our cleaning services support childcare operations by creating hygienic learning environments, reducing infection risks, and maintaining clean, safe spaces that enhance child development and parent confidence throughout Sydney NSW childcare facilities.
                </p>
              </div>

              <div>
                <Image
                  src="/images/services/commercial.webp"
                  alt="Professional childcare cleaning Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Childcare Services</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Toy cleaning & sanitization</li>
                    <li>✓ Play area maintenance</li>
                    <li>✓ Classroom deep cleaning</li>
                    <li>✓ Child-safe cleaning products</li>
                    <li>✓ Infection control protocols</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Childcare Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Safety Assessment & Planning</h4>
                <p className="text-gray-700 mb-4">
                  Our childcare cleaning specialists conduct comprehensive safety assessments, identifying high-touch surfaces, play areas, eating spaces, and hygiene-critical zones. We develop customized cleaning protocols that address toys, furniture, playground equipment, and common areas while ensuring adherence to Australian childcare standards and National Quality Framework requirements.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Child-Safe Sanitization</h4>
                <p className="text-gray-700 mb-4">
                  We perform intensive sanitization using child-safe, non-toxic cleaning products including toy disinfection, surface cleaning, equipment sanitization, and area decontamination. Our cleaning addresses germs, bacteria, and viral contamination using eco-friendly, child-approved products that ensure safety while maintaining effective cleaning standards.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Play Area & Classroom Maintenance</h4>
                <p className="text-gray-700 mb-4">
                  Our comprehensive facility cleaning includes classroom sanitization, play area maintenance, art room cleaning, library care, and outdoor playground cleaning. We focus on creating safe learning environments, removing hazards, and maintaining cleanliness standards that support child development and educational activities.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Compliance Documentation</h4>
                <p className="text-gray-700 mb-4">
                  We provide detailed cleaning documentation, compliance checklists, and regulatory inspection preparation support. Our documentation system helps childcare operators maintain records required for licensing inspections and demonstrates ongoing commitment to child safety and hygiene standards.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Childcare Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Toy cleaning & sanitization',
                  'Classroom deep cleaning',
                  'Play area maintenance',
                  'Bathroom sanitization',
                  'Kitchen & eating area cleaning',
                  'Sleep room cleaning',
                  'Art room maintenance',
                  'Library & reading corner',
                  'Outdoor playground cleaning',
                  'Reception area cleaning',
                  'Staff room cleaning',
                  'Emergency cleaning response'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Professional Childcare Cleaning</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/services/school.jpg"
                  alt="Clean childcare facility Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Child Health & Safety</h4>
                    <p className="text-gray-700">Professional childcare cleaning prevents illness transmission, reduces infection risks, and creates safer environments for children.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Regulatory Compliance</h4>
                    <p className="text-gray-700">Our cleaning services ensure compliance with Australian childcare standards and National Quality Framework requirements.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Parent Confidence</h4>
                    <p className="text-gray-700">Clean, well-maintained facilities build parent trust and support positive childcare reputation and enrollment.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Enhanced Learning Environment</h4>
                    <p className="text-gray-700">Clean, organized spaces support effective learning, reduce distractions, and promote positive child development.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Childcare Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides childcare cleaning services throughout Sydney NSW's family-friendly suburbs and early learning districts. Our specialized teams service childcare facilities in:
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Hornsby', 'Turramurra', 'Wahroonga', 'Pymble',
                'Castle Hill', 'Baulkham Hills', 'Kellyville', 'Rouse Hill',
                'Epping', 'Carlingford', 'Dundas', 'Telopea',
                'Chatswood', 'Lane Cove', 'Willoughby', 'Artarmon',
                'Mosman', 'Neutral Bay', 'Cremorne', 'Cammeray',
                'Manly', 'Brookvale', 'Dee Why', 'Frenchs Forest',
                'Bondi Junction', 'Woollahra', 'Double Bay', 'Rose Bay',
                'Randwick', 'Coogee', 'Maroubra', 'Little Bay'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary via-greenprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Childcare Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for specialized childcare cleaning services. Child-safe products, expert teams, regulatory compliance.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Childcare Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}