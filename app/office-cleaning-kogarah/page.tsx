import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Kogarah NSW | Commercial Office Cleaners | Pro Clean Corp',
    description: 'Professional office cleaning in Kogarah NSW. Servicing the St George district including Rockdale, Hurstville & Arncliffe. Flexible schedules, police-checked staff. Call 1300 494 983.',
    keywords: 'office cleaning Kogarah, office cleaners Kogarah, commercial cleaning Kogarah, professional office cleaning Kogarah, corporate cleaning Kogarah NSW, office cleaning St George',
    openGraph: {
        title: 'Office Cleaning Kogarah NSW | Commercial Office Cleaners | Pro Clean Corp',
        description: 'Expert office and commercial cleaning in Kogarah NSW. Serving the St George district — Rockdale, Hurstville, Arncliffe & surrounding suburbs. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-kogarah',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/office.webp', alt: 'Office cleaning services in Kogarah NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-kogarah' },
};

const faqs = [
    {
        question: 'What types of offices do you clean in Kogarah?',
        answer: 'We clean all types of commercial premises in Kogarah including medical and allied health practices, professional services offices, legal and accounting firms, financial planning and insurance offices, real estate agencies, corporate suites and small business premises. Kogarah\'s commercial mix includes a strong medical and healthcare sector centred around St George Hospital, and we have specific experience with the infection control protocols required in clinical and medical office environments.',
    },
    {
        question: 'How often should we have our Kogarah office professionally cleaned?',
        answer: 'Most small to medium Kogarah offices benefit from professional cleaning three to five times per week, with daily cleaning recommended for high-traffic environments such as medical practices, reception-heavy businesses or shared workspaces. We assess your office\'s specific requirements — staff numbers, visitor volumes, food preparation areas and surface types — before recommending the most appropriate frequency and scope for your budget and hygiene needs.',
    },
    {
        question: 'Do you clean medical and healthcare offices in the Kogarah area?',
        answer: 'Yes. We have specific experience cleaning medical practices, specialist consulting suites, allied health offices and dental practices in and around Kogarah and the St George area. Our medical office cleaning protocols comply with Australian infection control standards, using TGA-approved disinfectants and procedures appropriate for clinical environments where cross-contamination prevention is essential to patient and staff safety.',
    },
    {
        question: 'Can you clean our Kogarah office after business hours?',
        answer: 'Yes. We offer after-hours and early morning cleaning schedules to avoid any disruption to your business operations or client experience during the working day. Our after-hours teams are police-checked, trained for unsupervised access and hold all required credentials. We coordinate access arrangements directly with your building manager or office administrator before commencement.',
    },
    {
        question: 'How do I get a quote for office cleaning in Kogarah?',
        answer: 'Call us on 1300 494 983 or submit an enquiry through our website. We will arrange a free, no-obligation site assessment at your Kogarah office at a time convenient to you, and provide a detailed written quote covering all areas, frequency options and pricing within 24 hours of the visit.',
    },
];

export default function OfficeCleaningKogarahPage() {
    const serviceInfo = {
        title: 'Office Cleaning Kogarah NSW',
        description: 'Pro Clean Corp provides professional office and commercial cleaning services throughout Kogarah and the wider St George district of Sydney\'s south. Kogarah is a significant commercial and medical hub, home to St George Hospital and a dense concentration of professional services offices, specialist medical practices, allied health clinics, real estate agencies and corporate suites serving the communities of the St George area. Maintaining a clean, hygienic and well-presented workplace is essential for staff productivity, client confidence and regulatory compliance — particularly in the healthcare sector.\n\nOur Kogarah office cleaning teams are locally based in the St George district, thoroughly familiar with the area\'s commercial buildings and management requirements, and equipped to deliver a comprehensive, reliable office cleaning service at any frequency. Whether you need a daily pre-opening clean for a busy medical practice, an after-hours tidy for a professional office suite or a weekly deep clean for a smaller business premises, Pro Clean Corp delivers a consistent, high-quality result on every visit. We are fully insured, use hospital-grade cleaning products and maintain the same rigorous standards for a two-room office as we do for a multi-floor corporate headquarters.',
        benefits: [
            'Thorough desk and workstation cleaning including wipe-down of all surfaces, monitor screens, keyboards, telephones and shared equipment with appropriate disinfectant products safe for electronics and office materials',
            'Kitchen and breakroom deep cleaning covering all benchtops, appliance exteriors, sink and tap sanitisation, microwave interior cleaning, refrigerator exterior wiping and floor mopping with slip-resistant products',
            'Restroom maintenance to a consistently high standard including full toilet and basin sanitisation, mirror polishing, floor mopping, bin emptying and restocking of soap, paper towels and sanitary items',
            'Hard floor and carpet cleaning covering all floor types with appropriate vacuuming, mopping and spot treatment, maintaining safe, presentable flooring throughout your Kogarah office on every visit',
            'Window and glass cleaning covering all internal glass partitions, entry doors, meeting room walls and windows visible to the street, ensuring a professional, streak-free presentation at all times',
            'Waste removal and recycling management including all general waste, paper recycling and organic waste bins emptied and replaced with fresh liners, and recycling streams correctly separated on every visit'
        ],
        process: [
            'Complimentary site assessment of your Kogarah office covering all areas, surface types and special requirements such as medical or food-safe protocols, followed by a detailed written service proposal within 24 hours',
            'Customised cleaning schedule agreed with your office manager or building administrator covering the most appropriate days, times and service scope for your business operations and budget',
            'Consistent delivery by a dedicated cleaning team using approved products, systematic checklists and a rigorous sign-off process to ensure every area of your Kogarah office is cleaned to standard on every visit',
            'Regular account manager check-ins and open communication channels to address any feedback, adjust the scope as your business grows or changes, and ensure long-term service excellence'
        ],
        whyChooseUs: [
            'Deep experience cleaning commercial offices, medical practices and professional suites across Kogarah, Rockdale, Hurstville, Arncliffe, Bexley and the broader St George district of Sydney',
            'Fully insured with $20M public liability coverage and police-checked staff trained in both standard office hygiene and clinical-grade infection control protocols for medical and healthcare environments',
            'Hospital-grade cleaning products used across all office environments, providing genuine disinfection efficacy that eliminates pathogens rather than simply cleaning visible soil from surfaces',
            'Flexible scheduling including early morning, after-hours and weekend services to avoid disrupting your staff, clients or patients during business hours at your Kogarah premises',
            'Transparent, itemised pricing with no hidden fees and no lock-in contracts — pay for exactly what your office requires at a frequency that suits your budget and hygiene standards',
            'Dedicated account manager providing a single point of contact for all service matters, ensuring fast response, consistent communication and proactive management of your office cleaning programme'
        ],
        serviceAreas: ['Rockdale', 'Arncliffe', 'Bexley', 'Hurstville', 'Carlton', 'Beverley Park', 'Sans Souci', 'Ramsgate', 'Brighton-Le-Sands', 'Banksia'],
        faqs,
        images: [
            { src: '/images/services/office.webp', alt: 'Professional office cleaning services in Kogarah NSW' },
            { src: '/images/services/office.webp', alt: 'Commercial office cleaning Kogarah St George district' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Kogarah NSW"
                serviceDescription="Professional office and commercial cleaning services in Kogarah NSW. Servicing all commercial premises across the St George district including medical practices, professional suites and corporate offices."
                serviceUrl="/office-cleaning-kogarah"
                serviceType="Office & Commercial Cleaning"
                price="$$"
                additionalServices={['Medical Office Cleaning', 'Desk & Workstation Sanitisation', 'Restroom Maintenance', 'Kitchen & Breakroom Cleaning', 'After-Hours Office Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6">Related Office & Cleaning Services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { href: '/office-cleaning-sydney', label: 'Office Cleaning Sydney' },
                            { href: '/commercial-cleaning', label: 'Commercial Cleaning Services' },
                            { href: '/strata-cleaning-arncliffe', label: 'Strata Cleaning Arncliffe' },
                            { href: '/gym-cleaning-kogarah', label: 'Gym Cleaning Kogarah' },
                            { href: '/medical-office-cleaning-sydney', label: 'Medical Office Cleaning Sydney' },
                            { href: '/strata-cleaning-sydney', label: 'Strata Cleaning Sydney' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="block p-4 bg-slate-50 rounded-lg hover:bg-green-50 hover:text-greenprimary transition-colors font-medium text-gray-700">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
