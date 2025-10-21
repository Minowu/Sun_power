// Import product images
import hybridHs1Img from '../assets/products/inverter/hybrid_inverter/hybrid-hs1.png';
import h38kHsImg from '../assets/products/inverter/hybrid_inverter/h38k-hs.png';
import h512kHtImg from '../assets/products/inverter/hybrid_inverter/h512k-ht.png';
import h1525kHtImg from '../assets/products/inverter/hybrid_inverter/h1525k-ht.png';

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
    id: 'hybrid-hs1',
    name: 'Hybrid HS1',
    description: 'Biến tần hybrid 1 pha tích hợp pin lưu trữ với công nghệ tiên tiến, quản lý thông minh và hiệu suất cao',
    image: hybridHs1Img,
    category: 'inverter',
    subCategory: 'hybrid'
  },
  {
    id: 'h38k-hs',
    name: 'H38K-HS',
    description: 'Biến tần hybrid 38kW cho hệ thống thương mại với công suất cao, độ bền cao và dễ lắp đặt',
    image: h38kHsImg,
    category: 'inverter',
    subCategory: 'hybrid'
  },
  {
    id: 'h512k-ht',
    name: 'H512K-HT',
    description: 'Biến tần hybrid 512kW cho hệ thống công nghiệp với công suất lớn, hiệu suất cao và bảo hành dài hạn',
    image: h512kHtImg,
    category: 'inverter',
    subCategory: 'hybrid'
  },
  {
    id: 'h1525k-ht',
    name: 'H1525K-HT',
    description: 'Biến tần hybrid 1.525MW cho hệ thống quy mô lớn với công suất cực lớn, hiệu suất tối ưu và độ tin cậy cao',
    image: h1525kHtImg,
    category: 'inverter',
    subCategory: 'hybrid'
  },
  {
    id: 'm300-500s-sw',
    name: 'M300-500S-SW',
    description: 'Microinverter 300-500W cho từng tấm pin với hiệu suất cao, dễ bảo trì và an toàn',
    image: m300500sSwImg,
    category: 'inverter',
    subCategory: 'microinverter'
  },
  {
    id: 'm600-1000s-sw',
    name: 'M600-1000S-SW',
    description: 'Microinverter 600-1000W cho tấm pin công suất cao với hiệu suất tối ưu và độ bền bỉ',
    image: m6001000sSwImg,
    category: 'inverter',
    subCategory: 'microinverter'
  },
  {
    id: 'm1600-2000s-sw',
    name: 'M1600-2000S-SW',
    description: 'Microinverter 1.6-2kW cho hệ thống công nghiệp với công suất lớn, hiệu suất cao và độ tin cậy',
    image: m16002000sSwImg,
    category: 'inverter',
    subCategory: 'microinverter'
  },
  {
    id: 's2k-6k-s1',
    name: 'S2K-6K-S1',
    description: 'String inverter 2-6kW cho hệ thống dân dụng với tiết kiệm chi phí, dễ lắp đặt và hiệu suất cao',
    image: s2k6kS1Img,
    category: 'inverter',
    subCategory: 'string'
  },
  {
    id: 's36k-s',
    name: 'S36K-S',
    description: 'String inverter 36kW cho hệ thống thương mại với công suất cao, hiệu suất tối ưu và độ bền bỉ',
    image: s36kSImg,
    category: 'inverter',
    subCategory: 'string'
  },
  {
    id: 's712k-s',
    name: 'S712K-S',
    description: 'String inverter 712kW cho hệ thống công nghiệp với công suất lớn, hiệu suất cao và độ tin cậy',
    image: s712kSImg,
    category: 'inverter',
    subCategory: 'string'
  },
  {
    id: 's812k-t',
    name: 'S812K-T',
    description: 'String inverter 812kW cho hệ thống quy mô lớn với công suất cực lớn, hiệu suất tối ưu và bảo hành dài hạn',
    image: s812kTImg,
    category: 'inverter',
    subCategory: 'string'
  },
  // Energy Storage products
  {
    id: 'ms-2500',
    name: 'MS-2500',
    description: 'Pin lưu trữ lithium-ion 2.5kWh với dung lượng cao, tuổi thọ dài và độ an toàn tuyệt đối',
    image: ms2500Img,
    category: 'energy_storage',
    subCategory: 'batteries'
  },
  {
    id: 'e100-h3',
    name: 'E100-H3',
    description: 'Pin lưu trữ lithium-ion 100kWh với dung lượng lớn, hiệu suất cao và độ bền bỉ',
    image: e100H3Img,
    category: 'energy_storage',
    subCategory: 'batteries'
  },
  {
    id: 'battery-h',
    name: 'Battery H',
    description: 'Pin lưu trữ lithium-ion công nghệ cao với công nghệ tiên tiến, hiệu suất cao và độ an toàn',
    image: batteryHImg,
    category: 'energy_storage',
    subCategory: 'batteries'
  },
  {
    id: 'battery-h2',
    name: 'Battery H2',
    description: 'Pin lưu trữ lithium-ion thế hệ mới với hiệu suất tối ưu và tuổi thọ dài',
    image: batteryH2Img,
    category: 'energy_storage',
    subCategory: 'batteries'
  },
  {
    id: 'h6k-hta',
    name: 'H6K-HTA',
    description: 'Hệ thống lưu trữ tích hợp 6kW với tích hợp hoàn chỉnh, dễ lắp đặt và hiệu suất cao',
    image: h6kHtaImg,
    category: 'energy_storage',
    subCategory: 'all_in_one'
  },
  {
    id: 'ci-ess-125kw',
    name: 'CI-ESS-125KW',
    description: 'Hệ thống lưu trữ thương mại 125kW với công suất cao, hiệu suất tối ưu và độ tin cậy',
    image: ciEss125kwImg,
    category: 'energy_storage',
    subCategory: 'ci_ess'
  },
  {
    id: 'ef215p2-ms',
    name: 'EF215P2-MS',
    description: 'Hệ thống lưu trữ công nghiệp 215kW với công suất lớn, hiệu suất cao và độ bền bỉ',
    image: ef215p2MsImg,
    category: 'energy_storage',
    subCategory: 'ci_ess'
  },
  {
    id: 'ef215p2-s',
    name: 'EF215P2-S',
    description: 'Hệ thống lưu trữ công nghiệp 215kW với công suất lớn, hiệu suất cao và độ tin cậy',
    image: ef215p2SImg,
    category: 'energy_storage',
    subCategory: 'ci_ess'
  },
  {
    id: 'el372-418p2-dc',
    name: 'EL372-418P2-DC',
    description: 'Hệ thống lưu trữ container 372-418kW với công suất cực lớn, hiệu suất tối ưu và bảo hành dài hạn',
    image: el372418p2DcImg,
    category: 'energy_storage',
    subCategory: 'container'
  },
  {
    id: 'el3000-5000p2-dc',
    name: 'EL3000-5000P2-DC',
    description: 'Hệ thống lưu trữ container 3-5MW với công suất cực lớn, hiệu suất tối ưu và độ tin cậy cao',
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
