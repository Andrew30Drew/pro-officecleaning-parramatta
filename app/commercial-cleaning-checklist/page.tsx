import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Checklist 2026 | ProCleanCorp Sydney',
  description: 'Free commercial cleaning checklist for offices, warehouses, gyms and medical centres. Download or print. Ensure your cleaner covers every area. ProCleanCorp.',
  keywords: 'commercial cleaning checklist, office cleaning checklist sydney, warehouse cleaning checklist, gym cleaning checklist, medical cleaning checklist, commercial cleaning checklist 2026',
  openGraph: {
    title: 'Commercial Cleaning Checklist 2026 | ProCleanCorp Sydney',
    description: 'Free commercial cleaning checklists for offices, warehouses, gyms and medical centres. Print and use to audit your cleaner.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-checklist',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning checklist 2026 Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-checklist' }
};

const faqs = [
  {
    question: 'What should be on a daily commercial cleaning checklist?',
    answer: 'A daily commercial cleaning checklist should include: bin emptying and liner replacement in all areas, wiping kitchen benches and sink, cleaning and disinfecting all bathrooms, sanitising high-touch surfaces (door handles, light switches, elevator buttons), vacuuming or mopping reception and high-traffic areas, and spot-cleaning any visible spills or stains. Daily checklists are shorter than weekly checklists — they focus on hygiene-critical tasks rather than comprehensive cleaning.'
  },
  {
    question: 'How do commercial cleaning checklists differ for offices vs warehouses?',
    answer: 'Office cleaning checklists focus on surfaces, hygiene and presentation — desks, bathrooms, kitchens, and floors. Warehouse cleaning checklists focus on safety and industrial hygiene — floor scrubbing, loading dock cleaning, spill management, aisle clearing, amenities cleaning and periodic high-bay dusting. Warehouses typically have lower surface-cleaning requirements but higher floor-cleaning and safety-compliance requirements than offices.'
  },
  {
    question: 'Can I use your cleaning checklist to audit my current cleaner\'s performance?',
    answer: 'Yes. Print the relevant checklist for your facility type and use it to do a walkthrough audit after your next clean. Check each item on the list and note any areas your current cleaner is missing. A reputable cleaning company will welcome this feedback and adjust their scope. If the same items are consistently missed, it may indicate the cleaner has not been briefed on the full scope — or that you need a different provider.'
  }
];

const checklists = {
  office: {
    daily: ['Empty all bins, replace liners', 'Wipe kitchen benches and sink', 'Clean and disinfect all toilets', 'Sanitise door handles and light switches', 'Spot-clean floors and surfaces'],
    weekly: ['Vacuum all carpeted areas', 'Mop all hard floors', 'Clean bathroom mirrors, basins and tapware', 'Wipe all desks and workstation surfaces', 'Clean exterior of kitchen appliances', 'Dust shelves, skirting boards and ledges', 'Clean internal glass and windows', 'Sanitise shared equipment (printers, phones)'],
    monthly: ['Deep clean bathrooms including grout and seals', 'Clean inside microwave and fridge', 'Dust and clean ceiling vents', 'Wipe skirting boards thoroughly', 'Clean window tracks and frames'],
  },
  warehouse: {
    daily: ['Sweep and clear main aisles', 'Empty amenities bins', 'Clean lunchroom benches', 'Address any spills immediately', 'Check loading dock for debris'],
    weekly: ['Full floor scrub or sweep', 'Clean loading dock and dock levellers', 'Clean lunchroom and amenities thoroughly', 'Remove cobwebs from low-level areas', 'Clean entry mats and entrance area'],
    monthly: ['Pressure wash loading dock', 'Clean racking and shelving accessible areas', 'High-pressure wash toilets and amenities', 'Clean skylights and accessible high-bay areas', 'Inspect drains and clear if blocked'],
  },
  gym: {
    daily: ['Disinfect all equipment contact surfaces', 'Clean and sanitise locker rooms', 'Mop studio and weight room floors', 'Disinfect wet areas and shower cubicles', 'Empty bins and replace liners', 'Restock soap and paper products'],
    weekly: ['Deep clean locker room drains', 'Clean behind and under cardio equipment', 'Disinfect water fountains', 'Wash rubber floor sections', 'Clean reception desk and entry area'],
    monthly: ['Deep clean sauna and steam room', 'Descale shower heads', 'Clean ventilation grilles', 'High-pressure clean outdoor areas', 'Inspect and treat for mould in wet areas'],
  },
  medical: {
    daily: ['Disinfect all contact surfaces with TGA-approved product', 'Clean and disinfect all consultation rooms', 'Clean and sanitise waiting room', 'Sanitise reception desk', 'Clean and disinfect bathrooms', 'Empty clinical waste bins (if applicable)'],
    weekly: ['Deep clean all floor surfaces with disinfectant', 'Wipe all walls in clinical areas', 'Clean and disinfect all equipment zones', 'Restock infection control supplies', 'Complete cleaning log documentation'],
    monthly: ['Deep clean all floor surfaces including under furniture', 'Inspect and clean ventilation grilles', 'Audit cleaning product compliance and expiry', 'Review infection control documentation', 'Conduct staff cleaning protocol review'],
  },
};

export default function CommercialCleaningChecklistPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Checklist"
        serviceDescription="A comprehensive commercial cleaning checklist should cover floors, contact surfaces, bathrooms, kitchens, bin areas and windows — with frequency guidance for daily, weekly and monthly tasks."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-checklist"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Warehouse Cleaning', 'Gym Cleaning', 'Medical Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white max-w-3xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">2026 Commercial Cleaning Guide</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Commercial Cleaning Checklist — What Should Be Cleaned in Your Business?
            </h1>
            <p className="text-xl mb-6 text-gray-100">
              Free cleaning checklists for offices, warehouses, gyms and medical centres — with daily, weekly and monthly frequency guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>A comprehensive commercial cleaning checklist should cover floors, contact surfaces, bathrooms, kitchens, bin areas and windows</strong> — with frequency guidance for daily, weekly and monthly tasks depending on your business type. Use these checklists to brief a new cleaner, audit your current provider, or build your own in-house cleaning program.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {[
            { key: 'office', label: 'Office Cleaning Checklist' },
            { key: 'warehouse', label: 'Warehouse Cleaning Checklist' },
            { key: 'gym', label: 'Gym & Fitness Centre Cleaning Checklist' },
            { key: 'medical', label: 'Medical Centre Cleaning Checklist' },
          ].map(({ key, label }) => {
            const data = checklists[key as keyof typeof checklists];
            return (
              <div key={key} className="mb-16">
                <h2 className="text-2xl font-bold text-darkblue mb-6 border-b border-gray-200 pb-3">{label}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { freq: 'Daily', tasks: data.daily, color: 'bg-green-50 border-greenprimary' },
                    { freq: 'Weekly', tasks: data.weekly, color: 'bg-blue-50 border-blueprimary' },
                    { freq: 'Monthly', tasks: data.monthly, color: 'bg-gray-50 border-gray-300' },
                  ].map(({ freq, tasks, color }) => (
                    <div key={freq} className={`rounded-xl p-6 border-l-4 ${color}`}>
                      <h3 className="font-bold text-darkblue mb-3">{freq}</h3>
                      <ul className="space-y-2">
                        {tasks.map((task, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                            <span className="text-greenprimary font-bold mt-0.5 flex-shrink-0">□</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Commercial Cleaning Checklists</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'What Is Included in Office Cleaning', href: '/what-is-included-in-office-cleaning' },
                { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning-sydney' },
                { label: 'Office Cleaning Services', href: '/office-cleaning-services' },
                { label: 'How Often Should an Office Be Cleaned', href: '/how-often-should-you-clean-an-office' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Want a Custom Cleaning Scope for Your Facility?</h3>
            <p className="text-xl mb-4 text-gray-100">ProCleanCorp will build a custom checklist and cleaning program for your specific business. Free on-site assessment.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
