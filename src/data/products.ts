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

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  subCategory: string;
  slug?: string;
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
  details: {
    content: string;
    imageDescription: string;
  };
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
    subCategory: 'hybrid'
  },
  {
    id: 'h3k-3k6-4k-4k6-5k-6k-8k-hs',
    name: 'H3K/3K6/4K/4K6/5K/6K/8K-HS',
    description: 'Single-Phase Hybrid Inverter',
    image: h38kHsImg,
    category: 'inverter',
    subCategory: 'hybrid'
  },
  {
    id: 'h5k-6k-8k-10k-12k-ht',
    name: 'H5K/6K/8K/10K/12K-HT',
    description: 'Three-Phase Hybrid Inverter',
    image: h512kHtImg,
    category: 'inverter',
    subCategory: 'hybrid'
  },
  {
    id: 'h15k-20k-25k-ht',
    name: 'H15K/20K/25K-HT',
    description: 'Three-Phase Hybrid Inverter',
    image: h1525kHtImg,
    category: 'inverter',
    subCategory: 'hybrid'
  },
  {
    id: 'h50k-75k-80k-99k9-100k-110k-125k-et',
    name: 'H50K/75K/80K/99K9/100K/110K/125K-ET',
    description: 'Hybrid Inverter',
    image: h50k,
    category: 'inverter',
    subCategory: 'hybrid'
  },
  {
    id: 'm300-400-500-s-sw',
    name: 'M300-400-500-S-SW',
    description: '1-in-1 Microinverter',
    image: m300500sSwImg,
    category: 'inverter',
    subCategory: 'microinverter'
  },
  {
    id: 'm600-700-800-900-1000-s-sw',
    name: 'M600-700-800-900-1000-S-SW',
    description: '2-in-1 Microinverter',
    image: m6001000sSwImg,
    category: 'inverter',
    subCategory: 'microinverter'
  },
  {
    id: 'm1600-1800-2000-s-sw',
    name: 'M1600-1800-2000-S-SW',
    description: '4-in-1 Microinverter',
    image: m16002000sSwImg,
    category: 'inverter',
    subCategory: 'microinverter'
  },
  {
    id: 's2k-3k-3k3-3k6-4k-4k6-5k-6k-s1',
    name: 'S2K/3K/3K3/3K6/4K/4K6/5K/6K-S1',
    description: 'Single-Phase String Inverter for India',
    image: s2k6kS1Img,
    category: 'inverter',
    subCategory: 'string'
  },
  {
    id: 's3k-3k6-4k-4k6-5k-6k-7k5-s',
    name: 'S3K/3K6/4K/4K6/5K/6K/7K5-S',
    description: 'Single-Phase String Inverter',
    image: s36kSImg,
    category: 'inverter',
    subCategory: 'string'
  },
  {
    id: 's7k-8k-9k-10k-12k-s',
    name: 'S7K/8K/9K/10K/12K-S',
    description: 'Single-Phase String Inverter',
    image: s712kSImg,
    category: 'inverter',
    subCategory: 'string'
  },
  {
    id: 's8k-10k-12k-t',
    name: 'S8K/10K/12K-T',
    description: 'Three-Phase String Inverter',
    image: s812kTImg,
    category: 'inverter',
    subCategory: 'string'
  },
  // Energy Storage products
  {
    id: 'ms-2500',
    name: 'MS-2500',
    description: 'Balcony Mirco Storage System',
    image: ms2500Img,
    category: 'energy_storage',
    subCategory: 'batteries'
  },
  {
    id: 'e50-100-h3',
    name: 'E50/100-H3',
    description: 'High Voltage Battery',
    image: e100H3Img,
    category: 'energy_storage',
    subCategory: 'batteries'
  },
  {
    id: 'e50-100-150-200-250-300-400-500-h2',
    name: 'E50/100/150/200/250/300/400/500-H2',
    description: 'High Voltage Energy Storage Battery Pack',
    image: batteryHImg,
    category: 'energy_storage',
    subCategory: 'batteries'
  },
  {
    id: 'e50-100-150-200-h',
    name: 'E50/100/150/200-H',
    description: 'High Voltage Energy Storage Battery Pack',
    image: batteryH2Img,
    category: 'energy_storage',
    subCategory: 'batteries'
  },
  {
    id: 'h6k-9k-12k-15k-hta',
    name: 'H6K/9K/12K/15K-HTA',
    description: 'All-in-one',
    image: h6kHtaImg,
    category: 'energy_storage',
    subCategory: 'all_in_one'
  },
  {
    id: '50-125kw-215kwh',
    name: '50-125KW/215KWH',
    description: 'Hybrid ESS Cabinet',
    image: ciEss125kwImg,
    category: 'energy_storage',
    subCategory: 'ci_ess'
  },
  {
    id: 'ef215p2-m-ms',
    name: 'EF215P2-M(MS)',
    description: 'Air Cooling ESS',
    image: ef215p2MsImg,
    category: 'energy_storage',
    subCategory: 'ci_ess'
  },
  {
    id: 'ef215p2-s',
    name: 'EF215P2-S',
    description: 'Air Cooling ESS',
    image: ef215p2SImg,
    category: 'energy_storage',
    subCategory: 'ci_ess'
  },
  {
    id: 'el372-418p2-dc',
    name: 'EL372/418P2-DC',
    description: 'Liquid Cooling ESS',
    image: el372418p2DcImg,
    category: 'energy_storage',
    subCategory: 'ci_ess'
  },
    {
    id: 'el3000-4000-5000p2-dc',
    name: 'EL3000/4000/5000P2-DC',
    description: 'DC ESS',
    image: el30005000p2DcImg,
    category: 'energy_storage',
    subCategory: 'container'
  },
  // Accessories products
  {
    id: 'smart-ecs',
    name: 'Smart ECS',
    description: 'Bộ điều khiển thông minh cho hệ thống năng lượng với điều khiển thông minh, giám sát từ xa và tối ưu hóa',
    image: smartEcsImg,
    category: 'accessories',
    subCategory: 'controllers'
  },
  {
    id: 'hyxilogger',
    name: 'HyxiLogger',
    description: 'Thiết bị ghi dữ liệu và giám sát hệ thống với ghi dữ liệu chính xác, giám sát 24/7 và báo cáo chi tiết',
    image: hyxiloggerImg,
    category: 'accessories',
    subCategory: 'loggers'
  },
  {
    id: 'dcs-4g-wl',
    name: 'DCS-4G-WL',
    description: 'Hệ thống truyền thông 4G/WiFi với kết nối 4G, WiFi tích hợp và truyền dữ liệu nhanh',
    image: dcs4gWlImg,
    category: 'accessories',
    subCategory: 'communication'
  },
  {
    id: 'dmu-4g-w',
    name: 'DMU-4G-W',
    description: 'Module truyền thông 4G/WiFi với truyền thông 4G, WiFi tích hợp và độ tin cậy cao',
    image: dmu4gWImg,
    category: 'accessories',
    subCategory: 'communication'
  },
  // Smart Energy Platform
  {
    id: 'smart-energy-platform',
    name: 'Smart Energy Platform',
    description: 'Nền tảng quản lý năng lượng thông minh với quản lý tập trung, phân tích dữ liệu và tối ưu hóa',
    image: smartEnergyPlatformImg,
    category: 'smart_energy_platform',
    subCategory: 'cloud_platform'
  }
];

// Helper function to create product detail from product
const createProductDetail = (product: Product): ProductDetail => ({
  id: product.id,
  slug: product.id, // Use id as slug temporarily
  name: product.name,
  images: [product.image],
  overview: {
    summary: `${product.name} là sản phẩm ${product.description.toLowerCase()} chất lượng cao, được thiết kế để đáp ứng nhu cầu năng lượng mặt trời hiện đại. Với công nghệ tiên tiến và hiệu suất vượt trội, sản phẩm mang lại giải pháp tối ưu cho các ứng dụng thương mại và công nghiệp.`,
    keyFeatures: [
      'Hiệu suất cao với công nghệ tiên tiến',
      'Thiết kế bền vững, tuổi thọ lâu dài',
      'Bảo vệ toàn diện và an toàn tuyệt đối',
      'Giám sát thông minh 24/7',
      'Dễ dàng lắp đặt và bảo trì'
    ],
    datasheetLink: 'https://www.sunpower-tech.com/datasheet/' + product.id + '.pdf'
  },
  details: {
    content: `${product.name} sử dụng công nghệ hiện đại nhất trong ngành năng lượng mặt trời. Sản phẩm được thiết kế với các tính năng bảo vệ tiên tiến và hệ thống giám sát thông minh, đảm bảo hoạt động ổn định và hiệu quả trong mọi điều kiện môi trường.`,
    imageDescription: 'Hình ảnh minh họa sản phẩm và các tính năng chính'
  }
});

// Detailed product data - Generate for all products
export const productDetails: ProductDetail[] = products.map(createProductDetail);
