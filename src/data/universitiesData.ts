export interface University {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  country: string;
  city: string;
  ranking: number;
  nobelPrizes: number;
  totalResearch: number;
  recentResearch: number;
  professors: number;
  students: number;
  founded: number;
  website: string;
  logo: string;
  description: string;
  specialties: string[];
  latestResearch: string[];
  stats: {
    acceptanceRate: string;
    studentFacultyRatio: string;
    internationalStudents: string;
    researchFunding: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
  };
}

export const top50Universities: University[] = [
  {
    id: '1',
    name: 'Massachusetts Institute of Technology',
    shortName: 'MIT',
    slug: 'mit',
    country: 'United States',
    city: 'Cambridge, MA',
    ranking: 1,
    nobelPrizes: 97,
    totalResearch: 1250,
    recentResearch: 45,
    professors: 680,
    students: 11500,
    founded: 1861,
    website: 'mit.edu',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/200px-MIT_logo.svg.png',
    description: 'Leading institution in technology, engineering, and scientific research.',
    specialties: ['Engineering', 'Computer Science', 'Physics', 'Economics'],
    latestResearch: [
      'Quantum Computing Breakthrough in Error Correction',
      'Revolutionary Battery Technology for Electric Vehicles',
      'AI-Powered Drug Discovery Platform'
    ],
    stats: {
      acceptanceRate: '7%',
      studentFacultyRatio: '3:1',
      internationalStudents: '33%',
      researchFunding: '$750M'
    },
    contact: {
      address: '77 Massachusetts Avenue, Cambridge, MA 02139',
      phone: '+1 (617) 253-1000',
      email: 'info@mit.edu'
    }
  },
  {
    id: '2',
    name: 'Stanford University',
    shortName: 'Stanford',
    slug: 'stanford',
    country: 'United States',
    city: 'Stanford, CA',
    ranking: 2,
    nobelPrizes: 84,
    totalResearch: 980,
    recentResearch: 38,
    professors: 540,
    students: 17000,
    founded: 1885,
    website: 'stanford.edu',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/200px-Seal_of_Leland_Stanford_Junior_University.svg.png',
    description: 'Premier research university known for innovation and entrepreneurship.',
    specialties: ['Computer Science', 'Medicine', 'Business', 'Engineering'],
    latestResearch: [
      'CRISPR Gene Editing Advances',
      'Sustainable Energy Storage Solutions',
      'Machine Learning in Healthcare'
    ],
    stats: {
      acceptanceRate: '4%',
      studentFacultyRatio: '5:1',
      internationalStudents: '22%',
      researchFunding: '$1.2B'
    },
    contact: {
      address: '450 Serra Mall, Stanford, CA 94305',
      phone: '+1 (650) 723-2300',
      email: 'info@stanford.edu'
    }
  },
  {
    id: '3',
    name: 'Harvard University',
    shortName: 'Harvard',
    slug: 'harvard',
    country: 'United States',
    city: 'Cambridge, MA',
    ranking: 3,
    nobelPrizes: 161,
    totalResearch: 1100,
    recentResearch: 42,
    professors: 720,
    students: 23000,
    founded: 1636,
    website: 'harvard.edu',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/200px-Harvard_University_coat_of_arms.svg.png',
    description: 'Oldest institution of higher education in the United States.',
    specialties: ['Medicine', 'Law', 'Business', 'Liberal Arts'],
    latestResearch: [
      'Cancer Immunotherapy Breakthroughs',
      'Climate Change Mitigation Strategies',
      'Neuroscience and Brain Mapping'
    ],
    stats: {
      acceptanceRate: '3%',
      studentFacultyRatio: '6:1',
      internationalStudents: '25%',
      researchFunding: '$900M'
    },
    contact: {
      address: 'Massachusetts Hall, Cambridge, MA 02138',
      phone: '+1 (617) 495-1000',
      email: 'info@harvard.edu'
    }
  },
  {
    id: '4',
    name: 'California Institute of Technology',
    shortName: 'Caltech',
    slug: 'caltech',
    country: 'United States',
    city: 'Pasadena, CA',
    ranking: 4,
    nobelPrizes: 76,
    totalResearch: 650,
    recentResearch: 28,
    professors: 300,
    students: 2200,
    founded: 1891,
    website: 'caltech.edu',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Caltech_logo.svg/200px-Caltech_logo.svg.png',
    description: 'World-renowned science and engineering research university.',
    specialties: ['Physics', 'Astronomy', 'Engineering', 'Chemistry'],
    latestResearch: [
      'Gravitational Wave Detection Advances',
      'Solar Cell Efficiency Breakthrough',
      'Mars Exploration Technology'
    ],
    stats: {
      acceptanceRate: '6%',
      studentFacultyRatio: '3:1',
      internationalStudents: '27%',
      researchFunding: '$400M'
    },
    contact: {
      address: '1200 E California Blvd, Pasadena, CA 91125',
      phone: '+1 (626) 395-6811',
      email: 'info@caltech.edu'
    }
  },
  {
    id: '5',
    name: 'University of Oxford',
    shortName: 'Oxford',
    slug: 'oxford',
    country: 'United Kingdom',
    city: 'Oxford',
    ranking: 5,
    nobelPrizes: 72,
    totalResearch: 890,
    recentResearch: 35,
    professors: 580,
    students: 24000,
    founded: 1096,
    website: 'ox.ac.uk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/200px-Oxford-University-Circlet.svg.png',
    description: 'One of the oldest and most prestigious universities in the world.',
    specialties: ['Medicine', 'Literature', 'Philosophy', 'History'],
    latestResearch: [
      'COVID-19 Vaccine Development',
      'Artificial Intelligence Ethics',
      'Medieval History Archives'
    ],
    stats: {
      acceptanceRate: '17%',
      studentFacultyRatio: '11:1',
      internationalStudents: '41%',
      researchFunding: '£600M'
    },
    contact: {
      address: 'University Offices, Wellington Square, Oxford OX1 2JD',
      phone: '+44 1865 270000',
      email: 'enquiries@ox.ac.uk'
    }
  },
  {
    id: '6',
    name: 'University of Cambridge',
    shortName: 'Cambridge',
    slug: 'cambridge',
    country: 'United Kingdom',
    city: 'Cambridge',
    ranking: 6,
    nobelPrizes: 121,
    totalResearch: 820,
    recentResearch: 32,
    professors: 520,
    students: 21000,
    founded: 1209,
    website: 'cam.ac.uk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Cambridge_coat_of_arms_official.svg/200px-University_of_Cambridge_coat_of_arms_official.svg.png',
    description: 'Historic university with cutting-edge research across all disciplines.',
    specialties: ['Mathematics', 'Physics', 'Engineering', 'Natural Sciences'],
    latestResearch: [
      'Quantum Computing Applications',
      'Climate Science Modeling',
      'Biotechnology Innovations'
    ],
    stats: {
      acceptanceRate: '21%',
      studentFacultyRatio: '12:1',
      internationalStudents: '38%',
      researchFunding: '£500M'
    },
    contact: {
      address: 'The Old Schools, Trinity Lane, Cambridge CB2 1TN',
      phone: '+44 1223 337733',
      email: 'enquiries@cam.ac.uk'
    }
  },
  {
    id: '7',
    name: 'ETH Zurich',
    shortName: 'ETH Zurich',
    slug: 'eth-zurich',
    country: 'Switzerland',
    city: 'Zurich',
    ranking: 7,
    nobelPrizes: 32,
    totalResearch: 720,
    recentResearch: 29,
    professors: 450,
    students: 22000,
    founded: 1855,
    website: 'ethz.ch',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ETH_Zurich_Logo_black.svg/200px-ETH_Zurich_Logo_black.svg.png',
    description: 'Leading European university for technology and natural sciences.',
    specialties: ['Engineering', 'Computer Science', 'Mathematics', 'Physics'],
    latestResearch: [
      'Robotics and Automation',
      'Sustainable Materials',
      'Quantum Technologies'
    ],
    stats: {
      acceptanceRate: '8%',
      studentFacultyRatio: '14:1',
      internationalStudents: '40%',
      researchFunding: 'CHF 1.8B'
    },
    contact: {
      address: 'Rämistrasse 101, 8092 Zürich, Switzerland',
      phone: '+41 44 632 11 11',
      email: 'info@ethz.ch'
    }
  },
  {
    id: '8',
    name: 'University College London',
    shortName: 'UCL',
    slug: 'ucl',
    country: 'United Kingdom',
    city: 'London',
    ranking: 8,
    nobelPrizes: 35,
    totalResearch: 950,
    recentResearch: 41,
    professors: 650,
    students: 42000,
    founded: 1826,
    website: 'ucl.ac.uk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/UCL_logo.svg/200px-UCL_logo.svg.png',
    description: 'London\'s leading multidisciplinary university.',
    specialties: ['Medicine', 'Engineering', 'Architecture', 'Social Sciences'],
    latestResearch: [
      'Brain-Computer Interfaces',
      'Urban Planning Innovation',
      'Medical Imaging Advances'
    ],
    stats: {
      acceptanceRate: '63%',
      studentFacultyRatio: '10:1',
      internationalStudents: '48%',
      researchFunding: '£400M'
    },
    contact: {
      address: 'Gower Street, London WC1E 6BT',
      phone: '+44 20 7679 2000',
      email: 'enquiries@ucl.ac.uk'
    }
  },
  {
    id: '9',
    name: 'Imperial College London',
    shortName: 'Imperial',
    slug: 'imperial',
    country: 'United Kingdom',
    city: 'London',
    ranking: 9,
    nobelPrizes: 14,
    totalResearch: 680,
    recentResearch: 31,
    professors: 380,
    students: 17000,
    founded: 1907,
    website: 'imperial.ac.uk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Imperial_College_London_crest.svg/200px-Imperial_College_London_crest.svg.png',
    description: 'Science, engineering, medicine and business university.',
    specialties: ['Engineering', 'Medicine', 'Natural Sciences', 'Business'],
    latestResearch: [
      'Clean Energy Technologies',
      'Pandemic Preparedness',
      'Space Technology'
    ],
    stats: {
      acceptanceRate: '14%',
      studentFacultyRatio: '11:1',
      internationalStudents: '59%',
      researchFunding: '£350M'
    },
    contact: {
      address: 'South Kensington Campus, London SW7 2AZ',
      phone: '+44 20 7589 5111',
      email: 'info@imperial.ac.uk'
    }
  },
  {
    id: '10',
    name: 'University of Chicago',
    shortName: 'UChicago',
    slug: 'uchicago',
    country: 'United States',
    city: 'Chicago, IL',
    ranking: 10,
    nobelPrizes: 92,
    totalResearch: 780,
    recentResearch: 34,
    professors: 520,
    students: 16000,
    founded: 1890,
    website: 'uchicago.edu',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/University_of_Chicago_shield.svg/200px-University_of_Chicago_shield.svg.png',
    description: 'Private research university known for rigorous academics.',
    specialties: ['Economics', 'Physics', 'Medicine', 'Social Sciences'],
    latestResearch: [
      'Economic Policy Research',
      'Particle Physics Discoveries',
      'Social Behavior Studies'
    ],
    stats: {
      acceptanceRate: '7%',
      studentFacultyRatio: '5:1',
      internationalStudents: '21%',
      researchFunding: '$450M'
    },
    contact: {
      address: '5801 S Ellis Ave, Chicago, IL 60637',
      phone: '+1 (773) 702-1234',
      email: 'info@uchicago.edu'
    }
  }
];

export interface Country {
  name: string;
  slug: string;
  flag: string;
  universities: number;
  totalResearch: number;
  nobelPrizes: number;
  topUniversities: string[];
  description: string;
}

export const countries: Country[] = [
  {
    name: 'United States',
    slug: 'united-states',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/200px-Flag_of_the_United_States.svg.png',
    universities: 25,
    totalResearch: 15420,
    nobelPrizes: 892,
    topUniversities: ['MIT', 'Stanford', 'Harvard', 'Caltech', 'UChicago'],
    description: 'Home to the world\'s leading research universities and innovation centers.'
  },
  {
    name: 'United Kingdom',
    slug: 'united-kingdom',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/200px-Flag_of_the_United_Kingdom.svg.png',
    universities: 8,
    totalResearch: 6240,
    nobelPrizes: 342,
    topUniversities: ['Oxford', 'Cambridge', 'UCL', 'Imperial'],
    description: 'Historic centers of learning with centuries of academic excellence.'
  },
  {
    name: 'Switzerland',
    slug: 'switzerland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/200px-Flag_of_Switzerland.svg.png',
    universities: 3,
    totalResearch: 1890,
    nobelPrizes: 45,
    topUniversities: ['ETH Zurich', 'EPFL'],
    description: 'Leading European institutions in science and technology.'
  },
  {
    name: 'Germany',
    slug: 'germany',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/200px-Flag_of_Germany.svg.png',
    universities: 4,
    totalResearch: 3420,
    nobelPrizes: 156,
    topUniversities: ['TU Munich', 'Heidelberg', 'Max Planck'],
    description: 'Strong tradition in engineering, physics, and research excellence.'
  },
  {
    name: 'Canada',
    slug: 'canada',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/200px-Flag_of_Canada_%28Pantone%29.svg.png',
    universities: 3,
    totalResearch: 2180,
    nobelPrizes: 67,
    topUniversities: ['University of Toronto', 'McGill', 'UBC'],
    description: 'Leading North American research institutions.'
  },
  {
    name: 'Australia',
    slug: 'australia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/200px-Flag_of_Australia_%28converted%29.svg.png',
    universities: 2,
    totalResearch: 1560,
    nobelPrizes: 34,
    topUniversities: ['University of Melbourne', 'ANU'],
    description: 'Premier research universities in the Asia-Pacific region.'
  },
  {
    name: 'Singapore',
    slug: 'singapore',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/200px-Flag_of_Singapore.svg.png',
    universities: 2,
    totalResearch: 980,
    nobelPrizes: 12,
    topUniversities: ['NUS', 'NTU'],
    description: 'Rising Asian research powerhouses in technology and innovation.'
  },
  {
    name: 'Japan',
    slug: 'japan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/200px-Flag_of_Japan.svg.png',
    universities: 3,
    totalResearch: 2340,
    nobelPrizes: 89,
    topUniversities: ['University of Tokyo', 'Kyoto University', 'Osaka University'],
    description: 'Leading Asian institutions with strong research traditions.'
  }
];