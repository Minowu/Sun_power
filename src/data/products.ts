// Import product images
import hybridHs1Img from '../assets/products/inverter/hybrid_inverter/hybrid-hs1.png';
import h38kHsImg from '../assets/products/inverter/hybrid_inverter/h38k-hs.png';
import h512kHtImg from '../assets/products/inverter/hybrid_inverter/h512k-ht.png';
import h1525kHtImg from '../assets/products/inverter/hybrid_inverter/h1525k-ht.png';
import h50k from '../assets/products/inverter/hybrid_inverter/h50k.png';

import m300500sSwImg from '../assets/products/inverter/microinverter/m300-500s-sw.png';
import m6001000sSwImg from '../assets/products/inverter/microinverter/m600-1000s-sw.png';
import m16002000sSwImg from '../assets/products/inverter/microinverter/m1600-2000s-sw.png';

import s2k6kS1Img from '../assets/products/inverter/string_inverter/s2k-6k-s1.png';
import s36kSImg from '../assets/products/inverter/string_inverter/s36k-s.png';
import s712kSImg from '../assets/products/inverter/string_inverter/s712k-s.png';
import s812kTImg from '../assets/products/inverter/string_inverter/s812k-t.png';

import ms2500Img from '../assets/products/energy_storage/batteries/ms-2500.png';
import e100H3Img from '../assets/products/energy_storage/batteries/e100-h3.png';
import batteryHImg from '../assets/products/energy_storage/batteries/battery-h.png';
import batteryH2Img from '../assets/products/energy_storage/batteries/battery-h2.png';

import h6kHtaImg from '../assets/products/energy_storage/all_in_one_ess/h6k-hta.png';

import ciEss125kwImg from '../assets/products/energy_storage/ci_ess/ci-ess-125kw.png';
import ef215p2MsImg from '../assets/products/energy_storage/ci_ess/ef215p2-ms.png';
import ef215p2SImg from '../assets/products/energy_storage/ci_ess/ef215p2-s.png';
import el372418p2DcImg from '../assets/products/energy_storage/ci_ess/el372-418p2-dc.png';

import el30005000p2DcImg from '../assets/products/energy_storage/container_ess/el3000-5000p2-dc.png';

import smartEcsImg from '../assets/products/accessories/smart-ecs.png';
import hyxiloggerImg from '../assets/products/accessories/hyxilogger.png';
import dcs4gWlImg from '../assets/products/accessories/dcs-4g-wl.png';
import dmu4gWImg from '../assets/products/accessories/dmu-4g-w.png';

import smartEnergyPlatformImg from '../assets/products/smart_energy_platform/smart-energy-platform.png';

export interface ProductFeature {
  title: string;
  subFeatures: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  subCategory: string;
  slug?: string;
  features?: ProductFeature[];
  datasheet?: string;
}


export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  images: string[];
  overview: {
    summary: string;
    keyFeatures: string[];
    datasheetLink: string;
  };
  features?: ProductFeature[];
  datasheet?: string;
}

export interface Category {
  id: string;
  name: string;
  subCategories: string[];
}

export const categories: Category[] = [
  {
    id: 'inverter',
    name: 'Inverter',
    subCategories: ['all', 'hybrid', 'microinverter', 'string']
  },
  {
    id: 'energy_storage',
    name: 'Energy Storage',
    subCategories: ['all', 'batteries', 'all_in_one', 'ci_ess', 'container']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    subCategories: ['all', 'controllers', 'loggers', 'communication']
  },
  {
    id: 'smart_energy_platform',
    name: 'Smart Platform',
    subCategories: ['all', 'cloud_platform']
  }
];

export const products: Product[] = [
  // Inverter products
  {
    id: 'h3k-3k6-5k-6k-hs1',
    name: 'H3K/3K6/5K/6K-HS1',
    description: 'Single-Phase Hybrid Inverter',
    image: hybridHs1Img,
    category: 'inverter',
    subCategory: 'hybrid',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Compact design with easy installation',
          '• User-friendly interface and monitoring app'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• High conversion efficiency up to 98.5%',
          '• Wide MPPT voltage range for optimal performance',
          '• Smart energy management system'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• IP65 protection rating',
          '• Advanced safety protection features',
          '• 10-year warranty with reliable performance'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-H(3-6)K-HS1__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'h3k-3k6-4k-4k6-5k-6k-8k-hs',
    name: 'H3K/3K6/4K/4K6/5K/6K/8K-HS',
    description: 'Single-Phase Hybrid Inverter',
    image: h38kHsImg,
    category: 'inverter',
    subCategory: 'hybrid',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Flexible power range from 3K to 8K',
          '• Simple installation and configuration',
          '• Mobile app monitoring and control'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Maximum efficiency up to 98.6%',
          '• Dual MPPT for independent string monitoring',
          '• Advanced battery management system'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Comprehensive protection systems',
          '• Anti-islanding protection',
          '• Robust design for harsh environments'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-H(3-8)K-HS__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'h5k-6k-8k-10k-12k-ht',
    name: 'H5K/6K/8K/10K/12K-HT',
    description: 'Three-Phase Hybrid Inverter',
    image: h512kHtImg,
    category: 'inverter',
    subCategory: 'hybrid',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Three-phase power output for commercial use',
          '• Easy grid-tie and off-grid operation',
          '• Remote monitoring and diagnostics'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• High efficiency up to 98.8%',
          '• Multiple MPPT inputs for optimal harvesting',
          '• Smart load management and peak shaving'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Advanced grid protection features',
          '• Surge protection and fault detection',
          '• Industrial-grade reliability'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-H(5-12)K-HT__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'h15k-20k-25k-ht',
    name: 'H15K/20K/25K-HT',
    description: 'Three-Phase Hybrid Inverter',
    image: h1525kHtImg,
    category: 'inverter',
    subCategory: 'hybrid',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• High power output for large installations',
          '• Modular design for easy maintenance',
          '• Professional monitoring and control system'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Maximum efficiency up to 99.0%',
          '• Advanced MPPT algorithms',
          '• Intelligent energy storage management'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Comprehensive safety protection',
          '• Grid code compliance',
          '• Long-term reliability and warranty'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-H(15-25)K-HT__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'h50k-75k-80k-99k9-100k-110k-125k-et',
    name: 'H50K/75K/80K/99K9/100K/110K/125K-ET',
    description: 'Hybrid Inverter',
    image: h50k,
    category: 'inverter',
    subCategory: 'hybrid',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Ultra-high power for utility-scale applications',
          '• Containerized design for easy deployment',
          '• Advanced SCADA integration'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Industry-leading efficiency up to 99.2%',
          '• Multiple MPPT channels for maximum yield',
          '• Smart grid services and revenue optimization'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Utility-grade protection and safety',
          '• Redundant systems for maximum uptime',
          '• Certified for grid interconnection'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-H(50-125)K-ET__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'm300-400-500-s-sw',
    name: 'M300-400-500-S-SW',
    description: '1-in-1 Microinverter',
    image: m300500sSwImg,
    category: 'inverter',
    subCategory: 'microinverter',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Compact and lightweight design, plug-and-play installation',
          '• App-based quick setup, simple and efficient'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• 160% PV oversizing for extended output',
          '• 98.2% efficiency with wide MPPT range',
          '• 18A design, ideal for high-power modules'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• IP66, 1400+ cumulative rigorous tests',
          '• Type II DC/AC surge protection, lightning-proof',
          '• 300m AFCI detection with 0.5s rapid shutdown'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-M(300-500)S-SW__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'm600-700-800-900-1000-s-sw',
    name: 'M600-700-800-900-1000-S-SW',
    description: '2-in-1 Microinverter',
    image: m6001000sSwImg,
    category: 'inverter',
    subCategory: 'microinverter',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• 2-in-1 design for space efficiency',
          '• Plug-and-play installation',
          '• Mobile app configuration and monitoring'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• 160% PV oversizing capability',
          '• 98.5% peak efficiency',
          '• Individual panel optimization'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• IP67 protection rating',
          '• Advanced arc fault detection',
          '• Rapid shutdown compliance'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-M(600-1000)S-SW__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'm1600-1800-2000-s-sw',
    name: 'M1600-1800-2000-S-SW',
    description: '4-in-1 Microinverter',
    image: m16002000sSwImg,
    category: 'inverter',
    subCategory: 'microinverter',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• 4-in-1 high power density design',
          '• Simplified wiring and installation',
          '• Smart monitoring and diagnostics'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Up to 2000W power handling',
          '• 98.8% maximum efficiency',
          '• Advanced MPPT for each panel'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Enhanced safety protection',
          '• Ground fault detection',
          '• Long-term reliability guarantee'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-M(1600-2000)S-SW__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 's2k-3k-3k3-3k6-4k-4k6-5k-6k-s1',
    name: 'S2K/3K/3K3/3K6/4K/4K6/5K/6K-S1',
    description: 'Single-Phase String Inverter for India',
    image: s2k6kS1Img,
    category: 'inverter',
    subCategory: 'string',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Designed specifically for Indian market',
          '• Easy installation and maintenance',
          '• Local language support and documentation'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• High efficiency up to 98.2%',
          '• Wide input voltage range',
          '• Optimized for Indian grid conditions'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• IP65 protection for outdoor use',
          '• Advanced protection features',
          '• Reliable performance in harsh climate'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-S(2-6)K-S1__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 's3k-3k6-4k-4k6-5k-6k-7k5-s',
    name: 'S3K/3K6/4K/4K6/5K/6K/7K5-S',
    description: 'Single-Phase String Inverter',
    image: s36kSImg,
    category: 'inverter',
    subCategory: 'string',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Compact single-phase design',
          '• Simple installation process',
          '• User-friendly monitoring interface'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Maximum efficiency up to 98.5%',
          '• Dual MPPT for optimal performance',
          '• Smart grid-tie functionality'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Comprehensive safety protection',
          '• Anti-islanding protection',
          '• Robust design for long-term use'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-S(3-7.5)K-S__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 's7k-8k-9k-10k-12k-s',
    name: 'S7K/8K/9K/10K/12K-S',
    description: 'Single-Phase String Inverter',
    image: s712kSImg,
    category: 'inverter',
    subCategory: 'string',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• High power single-phase solution',
          '• Easy configuration and setup',
          '• Remote monitoring capabilities'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Peak efficiency up to 98.8%',
          '• Multiple MPPT inputs',
          '• Advanced power management'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Enhanced protection systems',
          '• Grid code compliance',
          '• Reliable long-term operation'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-S(7-12)K-S__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 's8k-10k-12k-t',
    name: 'S8K/10K/12K-T',
    description: 'Three-Phase String Inverter',
    image: s812kTImg,
    category: 'inverter',
    subCategory: 'string',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Three-phase power for commercial use',
          '• Modular design for easy maintenance',
          '• Professional monitoring system'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Maximum efficiency up to 99.0%',
          '• Advanced MPPT algorithms',
          '• Smart grid integration'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Industrial-grade protection',
          '• Redundant safety systems',
          '• Certified for commercial applications'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-S(8-12)K-T__Datasheet_V1.0-2025_EN.pdf'
  },
  // Energy Storage products
  {
    id: 'ms-2500',
    name: 'MS-2500',
    description: 'Balcony Mirco Storage System',
    image: ms2500Img,
    category: 'energy_storage',
    subCategory: 'batteries',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Compact balcony-friendly design',
          '• Plug-and-play installation',
          '• Simple mobile app control'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• 2.5kWh energy storage capacity',
          '• High round-trip efficiency',
          '• Smart energy management'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• UL certified safety standards',
          '• Advanced BMS protection',
          '• Long cycle life guarantee'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-MS-2500__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'e50-100-h3',
    name: 'E50/100-H3',
    description: 'High Voltage Battery',
    image: e100H3Img,
    category: 'energy_storage',
    subCategory: 'batteries',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• High voltage design for efficiency',
          '• Easy stacking and installation',
          '• Smart monitoring and control'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• 50-100kWh capacity options',
          '• High energy density',
          '• Optimized for solar applications'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Advanced thermal management',
          '• Multi-level safety protection',
          '• 10-year warranty'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'e50-100-150-200-250-300-400-500-h2',
    name: 'E50/100/150/200/250/300/400/500-H2',
    description: 'High Voltage Energy Storage Battery Pack',
    image: batteryHImg,
    category: 'energy_storage',
    subCategory: 'batteries',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Flexible capacity from 50-500kWh',
          '• Modular design for easy expansion',
          '• Professional installation support'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• High voltage reduces losses',
          '• Excellent cycle life performance',
          '• Smart energy optimization'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Industrial-grade safety standards',
          '• Advanced battery management',
          '• Long-term reliability guarantee'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-500)H2__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'e50-100-150-200-h',
    name: 'E50/100/150/200-H',
    description: 'High Voltage Energy Storage Battery Pack',
    image: batteryH2Img,
    category: 'energy_storage',
    subCategory: 'batteries',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Compact high-voltage design',
          '• Easy integration with inverters',
          '• User-friendly monitoring system'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• 50-200kWh capacity range',
          '• High efficiency energy storage',
          '• Optimized for residential use'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Comprehensive safety features',
          '• Reliable long-term performance',
          '• Professional warranty support'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'h6k-9k-12k-15k-hta',
    name: 'H6K/9K/12K/15K-HTA',
    description: 'All-in-one',
    image: h6kHtaImg,
    category: 'energy_storage',
    subCategory: 'all_in_one',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• All-in-one integrated design',
          '• Single unit installation',
          '• Simplified maintenance'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• 6-15kW power range',
          '• High efficiency integrated system',
          '• Optimized energy management'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Integrated safety systems',
          '• Reliable all-in-one solution',
          '• Professional warranty coverage'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: '50-125kw-215kwh',
    name: '50-125KW/215KWH',
    description: 'Hybrid ESS Cabinet',
    image: ciEss125kwImg,
    category: 'energy_storage',
    subCategory: 'ci_ess',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Cabinet-style installation',
          '• Professional deployment',
          '• Easy access for maintenance'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• 50-125kW power output',
          '• 215kWh energy capacity',
          '• High efficiency hybrid system'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Industrial-grade safety',
          '• Advanced protection systems',
          '• Reliable commercial operation'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'ef215p2-m-ms',
    name: 'EF215P2-M(MS)',
    description: 'Air Cooling ESS',
    image: ef215p2MsImg,
    category: 'energy_storage',
    subCategory: 'ci_ess',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Air cooling system design',
          '• Easy installation and setup',
          '• Simple maintenance requirements'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Efficient air cooling technology',
          '• Optimized thermal management',
          '• High performance energy storage'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Reliable air cooling system',
          '• Advanced safety protection',
          '• Long-term operational reliability'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'ef215p2-s',
    name: 'EF215P2-S',
    description: 'Air Cooling ESS',
    image: ef215p2SImg,
    category: 'energy_storage',
    subCategory: 'ci_ess',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Standard air cooling design',
          '• Straightforward installation',
          '• User-friendly operation'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Efficient air cooling technology',
          '• Optimized energy storage performance',
          '• Cost-effective solution'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Proven air cooling reliability',
          '• Comprehensive safety features',
          '• Durable long-term operation'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'el372-418p2-dc',
    name: 'EL372/418P2-DC',
    description: 'Liquid Cooling ESS',
    image: el372418p2DcImg,
    category: 'energy_storage',
    subCategory: 'ci_ess',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Advanced liquid cooling system',
          '• Professional installation support',
          '• Easy maintenance access'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Superior thermal management',
          '• High efficiency liquid cooling',
          '• Optimized energy storage performance'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Advanced liquid cooling safety',
          '• Comprehensive protection systems',
          '• Reliable long-term operation'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
    {
    id: 'el3000-4000-5000p2-dc',
    name: 'EL3000/4000/5000P2-DC',
    description: 'DC ESS',
    image: el30005000p2DcImg,
    category: 'energy_storage',
    subCategory: 'container',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Containerized design for easy deployment',
          '• Plug-and-play installation',
          '• Professional installation support'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• 3-5MW power capacity',
          '• High efficiency DC system',
          '• Optimized for utility-scale applications'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Industrial-grade safety standards',
          '• Advanced protection systems',
          '• Reliable utility-scale operation'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  // Accessories products
  {
    id: 'smart-ecs',
    name: 'Smart ECS',
    description: 'Bộ điều khiển thông minh cho hệ thống năng lượng với điều khiển thông minh, giám sát từ xa và tối ưu hóa',
    image: smartEcsImg,
    category: 'accessories',
    subCategory: 'controllers',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Intuitive control interface',
          '• Easy installation and configuration',
          '• Mobile app for remote control'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Smart energy optimization',
          '• Real-time monitoring and control',
          '• Energy cost reduction'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Advanced safety protection',
          '• Reliable communication protocols',
          '• Long-term stability guarantee'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'hyxilogger',
    name: 'HyxiLogger',
    description: 'Thiết bị ghi dữ liệu và giám sát hệ thống với ghi dữ liệu chính xác, giám sát 24/7 và báo cáo chi tiết',
    image: hyxiloggerImg,
    category: 'accessories',
    subCategory: 'loggers',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Simple plug-and-play installation',
          '• User-friendly data interface',
          '• Easy data export and analysis'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Accurate data logging',
          '• 24/7 system monitoring',
          '• Detailed performance reports'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Reliable data storage',
          '• Advanced error detection',
          '• Long-term data integrity'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'dcs-4g-wl',
    name: 'DCS-4G-WL',
    description: 'Hệ thống truyền thông 4G/WiFi với kết nối 4G, WiFi tích hợp và truyền dữ liệu nhanh',
    image: dcs4gWlImg,
    category: 'accessories',
    subCategory: 'communication',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Dual connectivity (4G/WiFi)',
          '• Easy network configuration',
          '• Simple installation process'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Fast data transmission',
          '• Reliable communication',
          '• Cost-effective connectivity'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Secure data transmission',
          '• Reliable connection stability',
          '• Advanced error handling'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  {
    id: 'dmu-4g-w',
    name: 'DMU-4G-W',
    description: 'Module truyền thông 4G/WiFi với truyền thông 4G, WiFi tích hợp và độ tin cậy cao',
    image: dmu4gWImg,
    category: 'accessories',
    subCategory: 'communication',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Compact communication module',
          '• Easy integration with systems',
          '• Simple configuration interface'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• High reliability communication',
          '• Efficient data transmission',
          '• Optimized power consumption'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Secure communication protocols',
          '• Reliable connection management',
          '• Long-term operational stability'
        ]
      }
    ],
    datasheet: 'https://webfile.hyxipower.com/soft/20250226/DS_HYX-E(50-200)H__Datasheet_V1.0-2025_EN.pdf'
  },
  // Smart Energy Platform
  {
    id: 'smart-energy-platform',
    name: 'Smart Energy Platform',
    description: 'Nền tảng quản lý năng lượng thông minh với quản lý tập trung, phân tích dữ liệu và tối ưu hóa',
    image: smartEnergyPlatformImg,
    category: 'smart_energy_platform',
    subCategory: 'cloud_platform',
    features: [
      {
        title: 'Convenient & User-Friendly',
        subFeatures: [
          '• Centralized energy management platform',
          '• Intuitive dashboard and analytics',
          '• Easy integration with existing systems'
        ]
      },
      {
        title: 'Profitable & Efficient',
        subFeatures: [
          '• Advanced data analytics and insights',
          '• Energy optimization algorithms',
          '• Cost reduction through smart management'
        ]
      },
      {
        title: 'Safe & Reliable',
        subFeatures: [
          '• Secure cloud-based platform',
          '• Reliable data processing and storage',
          '• Advanced security and compliance'
        ]
      }
    ]
  }
];

// Detailed product data - Static data for all products
export const productDetails: ProductDetail[] = products.map(product => ({
  id: product.id,
  slug: product.id, // Use id as slug temporarily
  name: product.name,
  images: [product.image],
  overview: {
    summary: product.description,
    keyFeatures: [
      'High efficiency with advanced technology',
      'Durable design with long lifespan',
      'Comprehensive protection and absolute safety',
      'Smart 24/7 monitoring',
      'Easy installation and maintenance'
    ],
    datasheetLink: product.datasheet || ''
  },
  features: product.features,
}));
