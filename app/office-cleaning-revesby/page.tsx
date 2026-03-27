import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Revesby NSW | Commercial Office Cleaners | Pro Clean Corp',
    description: 'Professional office cleaning in Revesby NSW. Serving Canterbury-Bankstown — Bankstown, Padstow, Panania & Milperra. Flexible schedules, police-checked staff. Call 1300 494 983.',
    keywords: 'office cleaning Revesby, office cleaners Revesby, commercial cleaning Revesby, professional office cleaning Revesby, corporate cleaning Revesby NSW, office cleaning Bankstown area',
    openGraph: {
        title: 'Office Cleaning Revesby NSW | Commercial Office Cleaners | Pro Clean Corp',
        description: 'Expert office and commercial cleaning in Revesby NSW. Serving the Canterbury-Bankstown area including Bankstown, Padstow, Panania & Milperra. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-revesby',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/office.webp', alt: 'Office cleaning services in Revesby NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-revesby' },
};

const faqs = [
    {
        question: 'What types of offices do you clean in Revesby?',
        answer: 'We clean a broad range of commercial premises in Revesby and the Canterbury-Bankstown area including industrial company offices, manufacturing and logistics businesses with administrative offices, professional services firms, medical and healthcare practices, retail businesses with back-office areas, and small to medium business suites. Revesby\'s mix of industrial and residential land use creates a diverse commercial environment, and we have experience with the specific cleaning requirements of each business type.',
    },
    {
        question: 'Do you service offices in Bankstown, Padstow and Panania?',
        answer: 'Yes. Our Canterbury-Bankstown office cleaning team services commercial premises across Revesby, Bankstown, Padstow, Panania, Milperra, Punchbowl, Lakemba, Condell Park, Bass Hill, Yagoona and Chester Hill on regular schedules. We are locally based in South Western Sydney and familiar with the commercial buildings, industrial estates and business parks throughout this area.',
    },
    {
        question: 'Can you clean industrial and manufacturing offices in Revesby?',
        answer: 'Yes. Revesby and Milperra have a significant industrial sector, and we have specific experience cleaning offices within manufacturing, warehousing and logistics facilities where higher dust levels, traffic from factory floors and specific contamination risks require tailored cleaning protocols. We use appropriate products and methods for these environments and can coordinate with your facility management to access any areas with restricted entry.',
    },
    {
        question: 'Do you offer after-hours office cleaning in Revesby?',
        answer: 'Yes. We offer flexible scheduling including early morning pre-opening cleans, after-hours evening services and weekend visits to avoid disrupting your business operations. Our after-hours teams are police-checked, trained for unsupervised access and hold all required credentials. Access arrangements are coordinated with your building manager or office administrator before the first service.',
    },
    {
        question: 'How do I get a quote for office cleaning in Revesby?',
        answer: 'Call 1300 494 983 or submit an online enquiry and we will arrange a free site assessment at your Revesby office at a time that suits you. We provide a detailed written quote covering all areas, frequency options and pricing within 24 hours of the visit, with no obligation and no minimum contract required to receive a quotation.',
    },
];

export default function OfficeCleaningRevesbyPage() {
    const serviceInfo = {
        title: 'Office Cleaning Revesby NSW',
        description: 'Pro Clean Corp provides professional office and commercial cleaning services throughout Revesby and the wider Canterbury-Bankstown region of South Western Sydney. Revesby is a strategically located commercial and industrial suburb with proximity to the M5 motorway, Liverpool Road and the Canterbury-Bankstown business corridor. The area hosts a diverse mix of commercial businesses — from industrial and manufacturing companies operating out of the Milperra industrial precinct to professional services firms, healthcare practices and small business operators serving the local community.\n\nOur Revesby office cleaning teams are locally based in South Western Sydney and thoroughly experienced in the area\'s commercial property types, from the offices within larger industrial complexes on the Milperra Road precinct to the professional suites and healthcare practices along Revesby\'s commercial strips. We deliver reliable, high-quality office cleaning at any frequency your business requires — daily, three times per week or weekly — using commercial-grade products, systematic protocols and fully vetted, police-checked staff who understand the importance of consistency and discretion in a professional office environment.',
        benefits: [
            'Complete desk, workstation and shared surface cleaning with appropriate disinfectant products applied to all office surfaces including keyboards, telephones, monitors and all items regularly touched by staff',
            'Kitchen and breakroom servicing including benchtop cleaning, appliance exterior wiping, sink and basin sanitisation, microwave and fridge exterior cleaning and thorough floor mopping on every visit',
            'Restroom maintenance to a commercial hygiene standard with full toilet and basin sanitisation, mirror polishing, floor mopping, waste bin emptying and restocking of all consumable supplies',
            'Complete floor care covering all types of office flooring with vacuuming of carpet areas and appropriate mopping of hard floors using products safe for the specific surface type in each area',
            'Window, glass and mirror cleaning covering internal partitions, boardroom and meeting room glass, entry glass doors and all mirrors visible to clients and visitors throughout the premises',
            'Waste management including emptying and relining all general waste and recycling bins, correctly separating waste streams and maintaining a clean, odour-free waste area throughout the building'
        ],
        process: [
            'Free site assessment of your Revesby office covering all areas, surface types and any special requirements such as industrial dust management, security-sensitive areas or specific product preferences',
            'Tailored service programme agreed with your office manager or business owner, covering appropriate scheduling around your business hours and scope matched to your specific premises and staff needs',
            'Consistent delivery by a dedicated cleaning team with zone checklists and a team leader sign-off after each visit, ensuring every area is cleaned to standard without exception on each service appointment',
            'Regular account manager contact and open communication to address any feedback, adjust the service scope as your business evolves and maintain the quality standards your Revesby business requires'
        ],
        whyChooseUs: [
            'Canterbury-Bankstown area experience with an established track record cleaning commercial offices, industrial premises and professional suites across Revesby, Bankstown, Padstow, Panania and surrounding suburbs',
            'Fully insured with $20M public liability coverage and police-checked staff trained in commercial office hygiene, with capability for industrial environments where additional dust and contamination management is required',
            'Commercial-grade cleaning products appropriate for the range of environments found in Revesby — from standard professional offices to manufacturing and logistics businesses with above-average cleaning demands',
            'Flexible scheduling including pre-opening, after-hours and weekend services to ensure your Revesby office is always clean and ready without any disruption to your business operations or client visits',
            'Transparent, itemised pricing with no hidden fees and no lock-in contracts — every cost is clearly outlined before commencement and you remain free to adjust the service at any time without penalties',
            'Locally based team in South Western Sydney providing fast response for urgent additional cleans, emergency incidents or new service requirements at your Revesby business premises'
        ],
        serviceAreas: ['Bankstown', 'Padstow', 'Panania', 'Milperra', 'Punchbowl', 'Lakemba', 'Condell Park', 'Bass Hill', 'Yagoona', 'Chester Hill'],
        faqs,
        images: [
            { src: '/images/services/office.webp', alt: 'Professional office cleaning services in Revesby NSW' },
            { src: '/images/services/office.webp', alt: 'Commercial office cleaning Revesby Canterbury Bankstown' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Revesby NSW"
                serviceDescription="Professional office and commercial cleaning services in Revesby NSW. Serving the Canterbury-Bankstown area including Bankstown, Padstow, Panania, Milperra and surrounding suburbs."
                serviceUrl="/office-cleaning-revesby"
                serviceType="Office & Commercial Cleaning"
                price="$$"
                additionalServices={['Industrial Office Cleaning', 'Workstation Sanitisation', 'Kitchen & Breakroom Cleaning', 'Restroom Maintenance', 'After-Hours Office Cleaning']}
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
                            { href: '/strata-cleaning-sydney', label: 'Strata Cleaning Sydney' },
                            { href: '/commercial-cleaning-sydney', label: 'Commercial Cleaning Sydney' },
                            { href: '/industrial-cleaning-sydney', label: 'Industrial Cleaning Sydney' },
                            { href: '/office-cleaning-kogarah', label: 'Office Cleaning Kogarah' },
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
