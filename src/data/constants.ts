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
  whatsapp: '917001147440', // Format for API
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
    mapLink: 'https://maps.app.goo.gl/gDePZuM1FvXDM3ob7',
    image: 'https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/WhatsApp_Image_2026-01-30_at_2.59.45_PM-35114072-8dc4-4ce3-8486-0f48d1437a5f.webp', // Attachment 3
  },
  {
    id: 'clinic-2',
    name: 'Dental Square - Belghoria',
    address: 'Jolkol more, 38/1, Feeder Rd, Beehive Garden, Belghoria, Kolkata, West Bengal 700056',
    mapLink: 'https://maps.app.goo.gl/NSXg8ebas79BU5ve7',
    image: 'https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/WhatsApp_Image_2026-02-09_at_9.40.21_PM-0651b2db-d763-427d-b99d-b68a65cfa0c2.webp', // Attachment 2
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
  }
];
