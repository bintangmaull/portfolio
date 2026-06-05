// Portfolio data - Bintang Maulana Magribi

export const personal = {
  name: "Bintang Maulana Magribi",
  title: "Geodesy & Geomatics Engineer",
  tagline: "Be the star wherever you are.",
  birthDate: "September 13, 2002",
  birthPlace: "Bantul",
  address: "Bantul, Yogyakarta",
};

export const education = {
  institution: "Institut Teknologi Bandung",
  major: "Geodesy and Geomatics Engineering",
  period: "2021-2025",
  gpa: "3.67/4.00",
  thesis:
    "Automated Dashboard System for Calculating the Average Annual Loss (AAL) of Health, Education, and State-Owned Buildings Caused by Multiple Hazards in Indonesia",
};

export const stats = [
  { label: "Projects Completed", value: "15", unit: "+", accent: "primary" as const, icon: "zap" },
  { label: "Hectares Surveyed", value: "30K", unit: "+", accent: "success" as const, icon: "map-pin" },
  { label: "Specialized Fields", value: "4", unit: "", accent: "primary" as const, icon: "satellite" },
];

export const specializations = [
  {
    name: "Photogrammetry & LiDAR",
    icon: "plane",
    description: "Aerial surveys, drone mapping, point cloud processing",
  },
  {
    name: "WebGIS & GIS Analysis",
    icon: "globe",
    description: "Web-based geospatial systems, spatial analysis",
  },
  {
    name: "Land Survey",
    icon: "map",
    description: "GNSS surveys, boundary measurements, geodetic networks",
  },
  {
    name: "Hydrography",
    icon: "waves",
    description: "Bathymetric surveys, tidal analysis, marine mapping",
  },
];

export const projects = [
  {
    id: "bali-catalyst",
    title: "WebGIS Bali Catalyst",
    description:
      "WebGIS untuk analisis risiko bencana multi-hazard di Provinsi Bali. Berfokus tidak hanya visualisasi namun juga kalkulasi otomatis apabila terjadi update data.",
    techStack: ["Next.js", "Flask", "PostgreSQL"],
    liveUrl: "https://bali-catalyst.tech",
    category: "WebGIS & GIS Analysis",
    status: "active" as const,
    year: "2026",
    client: "ITB & Pemerintah Provinsi Bali",
  },
  {
    id: "thesis-aal",
    title: "Automated AAL Dashboard",
    description:
      "Sistem dashboard otomatis untuk menghitung Average Annual Loss (AAL) bangunan kesehatan, pendidikan, dan milik negara akibat multi-hazard di Indonesia.",
    techStack: ["Next.js", "Flask", "PostgreSQL"],
    category: "WebGIS & GIS Analysis",
    status: "completed" as const,
    year: "2025",
  },
  {
    id: "ai-geo-digitizer",
    title: "AI Geo Digitizer",
    description:
      "Aplikasi berbasis AI untuk ekstraksi dan digitasi objek bangunan dari citra drone/satelit secara otomatis. 10.000 bangunan: Manual 4-7 hari → Otomatis 2-3 jam.",
    techStack: ["AI/ML", "Python", "GIS"],
    category: "WebGIS & GIS Analysis",
    status: "completed" as const,
    year: "2025",
  },
];

export interface ExperienceItem {
  title: string;
  role: string;
  company: string;
  date: string;
  highlights: string[];
}

export const experience: Record<string, { label: string; items: ExperienceItem[] }> = {
  photogrammetry: {
    label: "Photogrammetry & LiDAR",
    items: [
      {
        title: "Hang Nadim Airport",
        role: "Freelance Surveyor",
        company: "PT Bemaco Rekaprima",
        date: "May 2026",
        highlights: [
          "Conducted aerial photogrammetric surveys across 1,700 hectares using DJI Matrice 4E",
          "Processed data in Agisoft Metashape and performed CE90/LE90 accuracy assessment",
        ],
      },
      {
        title: "PTSL Tuban",
        role: "Freelance Surveyor",
        company: "PT Bemaco Rekaprima",
        date: "Mar - April 2026",
        highlights: [
          "Led drone and GCP/ICP survey teams (10+ personnel) for data acquisition",
          "Acquired and processed 18,000+ ha of photogrammetric data using DJI Mavic 3E, Matrice 4E",
        ],
      },
      {
        title: "Balangan Coal",
        role: "Freelance Surveyor",
        company: "PT Bemaco Rekaprima",
        date: "Feb 2026",
        highlights: [
          "Conducted LiDAR, photogrammetry, and GNSS surveys using DJI Matrice 350 & Zenmuse L2",
          "Processed geospatial outputs including LAS, DTM, DSM, contour, and orthomosaic data",
        ],
      },
      {
        title: "PTSL Malang",
        role: "Freelance Surveyor",
        company: "PT Bemaco Rekaprima",
        date: "Dec 2025",
        highlights: [
          "Conducted aerial photogrammetric surveys across 1,800 hectares in 36 flight missions",
          "Processed data in Agisoft Metashape and performed CE90/LE90 accuracy assessments",
        ],
      },
      {
        title: "PTSL Malang",
        role: "Freelance Surveyor",
        company: "PT Sangga Buana Nusantara",
        date: "Nov 2025",
        highlights: [
          "Conducted aerial photogrammetric surveys across 2,500 hectares in 36 flights using DJI Matrice 4",
          "Processed photogrammetric data using Agisoft Metashape",
        ],
      },
      {
        title: "PTSL Malang",
        role: "Freelance Surveyor",
        company: "PT Bemaco Rekaprima",
        date: "Sep 2025",
        highlights: [
          "Planned flight missions and established GCP & ICP using GNSS survey network methods",
          "Acquired LiDAR and photogrammetric data across 5,000 hectares in 70 flights",
          "Processed LiDAR data in DJI Terra and photogrammetric data in Agisoft Metashape",
        ],
      },
      {
        title: "Jogja Solo Highway",
        role: "Freelance Surveyor",
        company: "PT Sangga Buana Nusantara",
        date: "Dec 2024",
        highlights: [
          "Acquired LiDAR and photogrammetric data across 40 km linear using DJI Matrice 350 with Zenmuse L2",
        ],
      },
      {
        title: "Ponorogo",
        role: "Freelance Surveyor",
        company: "PT Geo Investama Mandiri",
        date: "Nov 2024",
        highlights: [
          "Planned aerial photogrammetric survey missions and acquired data across 2,000 hectares",
          "Conducted initial photogrammetric data processing using Agisoft Metashape",
        ],
      },
    ],
  },
  landSurvey: {
    label: "Land Survey",
    items: [
      {
        title: "PTSL Pamekasan",
        role: "Freelance Surveyor",
        company: "PT Sangga Buana Nusantara",
        date: "Mar 2026",
        highlights: [
          "Planned GNSS survey activities for GCP & ICP",
          "Conducted GNSS data acquisition and processing for accurate geospatial positioning",
        ],
      },
      {
        title: "Water Pipe Planning",
        role: "Freelance Surveyor",
        company: "PT Geochem Survey",
        date: "Dec 2025",
        highlights: [
          "Conducted GNSS observation data acquisition using static method for 90 benchmarks",
          "Prepared daily survey plans and progress reports",
        ],
      },
      {
        title: "Fishpond Planning",
        role: "Freelance Surveyor",
        company: "PT Geonusa",
        date: "Dec 2025",
        highlights: [
          "Conducted GNSS observation data acquisition using static method at GCP & ICP",
          "Prepared daily survey plans and progress reports",
        ],
      },
    ],
  },
  hydrography: {
    label: "Hydrography",
    items: [
      {
        title: "Palm Oil Plantations Sampit",
        role: "Freelance Hydrographic Surveyor",
        company: "PT Bemaco Rekaprima",
        date: "Feb 2026",
        highlights: [
          "Designed bathymetric survey lines and acquired SBES data using CHCNAV D270 with Apache 4 USV",
          "Processed and validated bathymetric data for quality assurance",
        ],
      },
      {
        title: "Bulan Island Farm",
        role: "Freelance Surveyor",
        company: "PT Geo Investama Mandiri",
        date: "Aug 2025",
        highlights: [
          "Designed bathymetric survey lines for nearshore and wetland mapping",
          "Acquired SBES data using CHCNAV D230 on USV and speedboat platforms",
          "Processed and validated bathymetric data for accuracy and reliability",
        ],
      },
      {
        title: "Tidal Data Processor",
        role: "Data Processor",
        company: "PT Geo Investama Mandiri",
        date: "Oct 2024",
        highlights: [
          "Processed tidal observation data using the Admiralty method for harmonic analysis",
          "Analyzed tidal constituents to support hydrographic survey activities",
        ],
      },
    ],
  },
  internship: {
    label: "Internship",
    items: [
      {
        title: "PT Geo Investama Mandiri",
        role: "Intern",
        company: "PT Geo Investama Mandiri",
        date: "Aug 2024",
        highlights: [
          "Assisted aerial photo acquisition using DJI Mavic 3 Enterprise and Striver VTOL drones",
          "Acquired and processed GNSS static survey data for GCPs and ICPs",
        ],
      },
      {
        title: "LRT Phase 1B Jakarta",
        role: "Intern",
        company: "PT Waskita Karya",
        date: "Jul - Aug 2024",
        highlights: [
          "Planned, acquired, and processed UAV photogrammetry data with GCP and PPK methods",
          "Performed terrestrial laser scanning using Leica RTC360",
        ],
      },
      {
        title: "ATR BPN Kab Bantul",
        role: "Intern",
        company: "ATR BPN Kab Bantul",
        date: "Aug 2023",
        highlights: [
          "Conducting land boundary measurements using the RTK method",
          "Digitizing land boundary maps from the Survey Certificate using AutoCAD",
        ],
      },
    ],
  },
};

export const organizations = [
  {
    name: "Ikatan Mahasiswa Geodesi",
    role: "Head of Media, Communication, and Information Division",
    period: "Jun 2024 - Mar 2025",
  },
  {
    name: "Parade Wisuda Oktober IMG 2023",
    role: "Head of Publication and Documentation Division",
    period: "May 2023 - Oct 2023",
  },
  {
    name: "Earth Day ITB 2022",
    role: "Head of Visual and Creative Division",
    period: "Feb 2022 - Dec 2022",
  },
];

export const skills = [
  // Survey & Geospatial
  { name: "Photogrammetry (Agisoft Metashape)", level: 95, category: "Survey & Geospatial" },
  { name: "LiDAR Processing (DJI Terra)", level: 90, category: "Survey & Geospatial" },
  { name: "GNSS Survey & Processing", level: 90, category: "Survey & Geospatial" },
  { name: "Drone Operations (DJI)", level: 95, category: "Survey & Geospatial" },
  { name: "Bathymetric Survey", level: 80, category: "Survey & Geospatial" },
  // GIS & WebGIS
  { name: "QGIS", level: 90, category: "GIS & Development" },
  { name: "ArcGIS", level: 80, category: "GIS & Development" },
  { name: "Next.js / React", level: 85, category: "GIS & Development" },
  { name: "Flask (Python)", level: 85, category: "GIS & Development" },
  { name: "PostgreSQL / PostGIS", level: 80, category: "GIS & Development" },
  // Tools
  { name: "AutoCAD / Civil3D", level: 75, category: "Tools" },
  { name: "Python", level: 85, category: "Tools" },
  { name: "Git", level: 80, category: "Tools" },
];

export const contact = {
  email: "bintang1350@gmail.com",
  linkedin: "https://linkedin.com/in/bintangmaulana/",
  phone: "+62 821 3583 9218",
};
