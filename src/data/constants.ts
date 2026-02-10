import { 
  Stethoscope, 
  Sparkles, 
  Smile, 
  Syringe, 
  Drill, 
  Clock, 
  ShieldCheck, 
  Baby, 
  HeartPulse, 
  Scissors,
  Crown,
  ScanFace
} from 'lucide-react';

export const CONTACT_INFO = {
  phone: '+91 7001147440',
  whatsapp: '917001147440',
  email: 'dentalsquare00@gmail.com',
  timings: 'Tue - Sun: 10am - 1pm / 6pm - 9pm (Mon Closed)',
  logo: 'https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/Screenshot_2026-01-30_230145-268379d7-1750-4386-b6d6-78d9233ea569.webp'
};

export const SERVICES = [
  {
    id: 'cleaning',
    title: 'Teeth Cleaning',
    description: 'Professional scaling and polishing for healthy gums and fresh breath.',
    icon: Sparkles,
  },
  {
    id: 'whitening',
    title: 'Tooth Whitening',
    description: 'Safe and effective treatments for a brighter smile.',
    icon: Smile,
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Correction',
    description: 'Enhancing smile aesthetics through modern dental techniques.',
    icon: ScanFace,
  },
  {
    id: 'fillings',
    title: 'Tooth-Colored Fillings',
    description: 'Natural-looking restorations that blend with your teeth.',
    icon: ShieldCheck,
  },
  {
    id: 'rct',
    title: 'Root Canal Treatment',
    description: 'Pain-free procedures to save infected teeth.',
    icon: Drill,
  },
  {
    id: 'single-rct',
    title: 'Single Sitting RCT',
    description: 'Advanced root canal treatment completed in one visit.',
    icon: Clock,
  },
  {
    id: 'fixed-replacement',
    title: 'Fixed Tooth Replacement',
    description: 'Permanent solutions for missing teeth.',
    icon: Crown,
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Long-lasting and natural-feeling tooth replacements.',
    icon: Syringe,
  },
  {
    id: 'dentures',
    title: 'Complete / Partial Dentures',
    description: 'Custom-designed dentures for comfort and functionality.',
    icon: Smile,
  },
  {
    id: 'extractions',
    title: 'Tooth Extractions',
    description: 'Safe and gentle removal of damaged teeth.',
    icon: Scissors,
  },
  {
    id: 'wisdom',
    title: 'Third Molar Surgeries',
    description: 'Expert wisdom tooth removal with minimal discomfort.',
    icon: Scissors,
  },
  {
    id: 'gum-surgery',
    title: 'Gum Surgeries',
    description: 'Treatment for gum disease and periodontal conditions.',
    icon: HeartPulse,
  },
  {
    id: 'ortho',
    title: 'Orthodontic Corrections',
    description: 'Braces and aligners for properly aligned teeth.',
    icon: Stethoscope,
  },
  {
    id: 'crowns',
    title: 'Tooth Cap / Crown',
    description: 'Durable crowns to protect and strengthen teeth.',
    icon: Crown,
  },
  {
    id: 'smile-design',
    title: 'Smile Designing',
    description: 'Customized smile makeover plans for confident smiles.',
    icon: Sparkles,
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Specialized gentle care for children\'s dental health.',
    icon: Baby,
  },
];

export const CLINICS = [
  {
    id: 'clinic-1',
    name: 'Dental Square - Dakshineswar',
    address: '113B, MM Feeder Rd, near Ariadaha Hospital, opposite matrimangal gate, Dakshineswar, Kolkata, West Bengal 700057',
    mapLink: 'https://maps.app.goo.gl/6vEWVMDChN72FGAb8',
    image: 'https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/WhatsApp_Image_2026-01-30_at_2.59.45_PM-35114072-8dc4-4ce3-8486-0f48d1437a5f.webp',
  },
  {
    id: 'clinic-2',
    name: 'Dental Square - Belghoria',
    address: 'Jolkol more, 38/1, Feeder Rd, Beehive Garden, Belghoria, Kolkata, West Bengal 700056',
    mapLink: 'https://maps.app.goo.gl/ZDTY6GNKvtbaEWny5',
    image: 'https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/WhatsApp_Image_2026-02-09_at_9.40.21_PM-0651b2db-d763-427d-b99d-b68a65cfa0c2.webp',
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    text: 'Absolutely painless root canal treatment! The doctor is very gentle and explains everything clearly. Highly recommended.',
  },
  {
    id: 2,
    name: 'Rahul Das',
    rating: 5,
    text: 'Best dental clinic in Kolkata. The hygiene standards are top-notch and the staff is very friendly.',
  },
  {
    id: 3,
    name: 'Amit Roy',
    rating: 5,
    text: 'I got my braces here. The process was smooth and affordable. Very happy with the results!',
  },
  {
    id: 4,
    name: 'Soma Banerjee',
    rating: 5,
    text: 'State of the art equipment and very professional behavior. My implant surgery went perfectly.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    rating: 5,
    text: 'Dr. Puja is excellent with kids. My son was terrified of dentists but she made him feel so comfortable.',
  },
  {
    id: 6,
    name: 'Anjali Gupta',
    rating: 5,
    text: 'Great experience! The clinic is very clean and the appointment system is very efficient. No long waiting times.',
  },
  {
    id: 7,
    name: 'Rohan Mehta',
    rating: 5,
    text: 'Very professional and clean clinic. Dr. Puja is extremely knowledgeable and took the time to explain my treatment options.',
  },
  {
    id: 8,
    name: 'Sneha Patel',
    rating: 5,
    text: 'I was always afraid of visiting the dentist, but the warm and welcoming staff here made me feel completely at ease.',
  },
  {
    id: 9,
    name: 'Arindam Ghosh',
    rating: 5,
    text: 'Excellent service for dentures for my mother. They fit perfectly and she is very happy with them.',
  },
  {
    id: 10,
    name: 'Meera Reddy',
    rating: 5,
    text: 'Very reasonable prices for the high quality of treatment provided. I will definitely be coming back for regular checkups.',
  },
  {
    id: 11,
    name: 'Suman Kalyan',
    rating: 5,
    text: 'The clinic is very hygienic, which is my top priority. Instruments are sterilized properly. Good job!',
  },
  {
    id: 12,
    name: 'Debaraaj Sen',
    rating: 5,
    text: 'Quick and effective treatment for my sudden toothache. The emergency response was appreciated. Thank you!',
  }
];
