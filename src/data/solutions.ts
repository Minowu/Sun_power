// Import solution images
import solution1 from '../assets/solution_1.jpg';
import solution2 from '../assets/solution_2.jpg';
import solution3 from '../assets/solution_3.jpg';
import solution4 from '../assets/solution_4.jpg';
import solution5 from '../assets/solution_5.jpg';
import solution6 from '../assets/solution_6.jpg';
import solution7 from '../assets/solution_7.jpg';
import solution1_gif from '../assets/1.gif';

export interface SolutionOverview {
  title: string;
  description: string;
  image: string;
}

export interface SolutionSchema {
  title: string;
  gifImage: string;
}

export interface SolutionFeature {
  title: string;
  detail1: string;
  detail2: string;
  image: string;
}

export interface Solution {
  id: number;
  slug: string;
  category: 'residential' | 'ci' | 'utility';
  overview: SolutionOverview;
  schema: SolutionSchema;
  feature1: SolutionFeature;
  feature2: SolutionFeature;
  feature3: SolutionFeature;
}

export const solutionsData: Solution[] = [
  {
    id: 1,
    slug: "residential-string-inverter-pv-solution",
    category: "residential",
    overview: {
      title: "Residential String Inverter PV Solution",
      description: "Residential String Inverter PV Solution enhances system reliability and power generation efficiency through a design where each module operates independently. Its flexible configuration adapts to various roof types, offering easy installation and suitability for different household scenarios. Combined with inverters and real-time monitoring, the system enables efficient energy management, optimizes power generation, reduces electricity costs, and helps users maximize self-consumption of green energy.",
      image: solution1
    },
    schema: {
      title: "Scheme Framework",
      gifImage: solution1_gif
    },
    feature1: {
      title: "Hiệu Suất Cao & Tiết Kiệm",
      detail1: "Hiệu suất chuyển đổi DC-AC lên đến 98.5%, tối đa hóa năng lượng thu được từ tấm pin mặt trời",
      detail2: "Tiết kiệm 70-90% hóa đơn điện hàng tháng với khả năng tự tiêu thụ năng lượng tối ưu",
      image: solution1
    },
    feature2: {
      title: "An Toàn Tuyệt Đối",
      detail1: "Pin lithium-ion với công nghệ LFP an toàn, không cháy nổ và tuổi thọ lên đến 6000 chu kỳ",
      detail2: "Hệ thống bảo vệ đa lớp với GFCI, AFCI và các thiết bị an toàn điện tiên tiến",
      image: solution2
    },
    feature3: {
      title: "Quản Lý Thông Minh",
      detail1: "Ứng dụng di động giám sát real-time hiệu suất hệ thống và điều khiển từ xa",
      detail2: "AI tự động tối ưu hóa lịch sạc/xả pin dựa trên thói quen sử dụng và giá điện",
      image: solution3
    }
  },
  {
    id: 2,
    slug: "residential-ess-solution",
    category: "residential",
    overview: {
      title: "Residential ESS Solution",
      description: "Residential ESS Solution provides intelligent energy storage capabilities with lithium-ion batteries ranging from 5kWh to 20kWh capacity. Its advanced battery management system automatically optimizes charge and discharge cycles based on usage patterns and electricity pricing. The solution ensures reliable backup power with seamless grid-tie and off-grid operation, enabling homeowners to maximize energy independence and reduce electricity costs through smart energy management.",
      image: solution2
    },
    schema: {
      title: "Scheme Framework",
      gifImage: solution1_gif
    },
    feature1: {
      title: "Lưu Trữ Năng Lượng Thông Minh",
      detail1: "Hệ thống lưu trữ năng lượng lithium-ion với dung lượng từ 5kWh đến 20kWh",
      detail2: "Tự động quản lý sạc/xả pin dựa trên nhu cầu sử dụng và giá điện",
      image: solution2
    },
    feature2: {
      title: "Backup Power Đáng Tin Cậy",
      detail1: "Đảm bảo nguồn điện dự phòng khi mất điện với thời gian chuyển đổi < 10ms",
      detail2: "Hỗ trợ cả chế độ on-grid và off-grid linh hoạt",
      image: solution3
    },
    feature3: {
      title: "Giám Sát & Điều Khiển",
      detail1: "Ứng dụng di động giám sát real-time và điều khiển từ xa",
      detail2: "Tích hợp với hệ thống nhà thông minh và IoT devices",
      image: solution1
    }
  },
  {
    id: 3,
    slug: "microinverter-solution",
    category: "residential",
    overview: {
      title: "Microinverter Solution",
      description: "Microinverter Solution maximizes energy harvest through module-level power optimization, where each solar panel operates independently with its own inverter. This advanced technology minimizes shading effects and module mismatch issues, ensuring optimal performance even in challenging installation conditions. The low-voltage DC design enhances safety during installation and maintenance, while comprehensive monitoring capabilities provide real-time insights into individual panel performance for maximum system efficiency.",
      image: solution3
    },
    schema: {
      title: "Scheme Framework",
      gifImage: solution1_gif
    },
    feature1: {
      title: "Tối Ưu Module-Level",
      detail1: "Mỗi tấm pin có inverter riêng, tối đa hóa hiệu suất từng module độc lập",
      detail2: "Giảm thiểu tác động của bóng râm và sự cố trên một số tấm pin",
      image: solution3
    },
    feature2: {
      title: "An Toàn & Dễ Bảo Trì",
      detail1: "Điện áp DC thấp, an toàn cho người lắp đặt và bảo trì",
      detail2: "Thay thế module dễ dàng mà không ảnh hưởng đến toàn bộ hệ thống",
      image: solution2
    },
    feature3: {
      title: "Giám Sát Chi Tiết",
      detail1: "Theo dõi hiệu suất từng tấm pin riêng lẻ qua ứng dụng di động",
      detail2: "Cảnh báo sớm khi có sự cố và đề xuất giải pháp khắc phục",
      image: solution1
    }
  },
  {
    id: 4,
    slug: "ci-pv-solution",
    category: "ci",
    overview: {
      title: "C&I PV Solution",
      description: "C&I PV Solution delivers integrated solar power systems designed for commercial and industrial applications, combining PV inverters and battery inverters in a unified platform. Its advanced MPPT technology ensures maximum energy conversion efficiency while supporting both grid-tie and off-grid configurations. The intelligent control system automatically manages power sources based on load demand and electricity pricing, providing businesses with reliable renewable energy solutions and significant cost savings.",
      image: solution4
    },
    schema: {
      title: "Scheme Framework",
      gifImage: solution1_gif
    },
    feature1: {
      title: "Tích Hợp Đa Chức Năng",
      detail1: "Kết hợp inverter PV và inverter pin trong một thiết bị duy nhất",
      detail2: "Hỗ trợ cả chế độ on-grid và off-grid linh hoạt",
      image: solution2
    },
    feature2: {
      title: "Hiệu Suất Vượt Trội",
      detail1: "Hiệu suất chuyển đổi cao với công nghệ MPPT tiên tiến",
      detail2: "Tối ưu hóa năng lượng từ cả tấm pin và pin lưu trữ",
      image: solution3
    },
    feature3: {
      title: "Điều Khiển Thông Minh",
      detail1: "Tự động chuyển đổi giữa các nguồn điện dựa trên tải và giá điện",
      detail2: "Tích hợp với hệ thống quản lý năng lượng thông minh",
      image: solution4
    }
  },
  {
    id: 5,
    slug: "ci-ess-solution",
    category: "ci",
    overview: {
      title: "C&I ESS Solution",
      description: "C&I ESS Solution offers cost-effective energy storage systems for large-scale commercial and industrial projects with simplified design and minimal maintenance requirements. Its modular architecture enables easy system expansion and compatibility with various solar panel configurations. The robust construction ensures long-term reliability in harsh environments, while the streamlined design reduces potential failure points, delivering optimal performance and rapid return on investment for business applications.",
      image: solution5
    },
    schema: {
      title: "Scheme Framework",
      gifImage: solution1_gif
    },
    feature1: {
      title: "Chi Phí Hiệu Quả",
      detail1: "Giải pháp kinh tế cho các dự án quy mô lớn với chi phí đầu tư thấp",
      detail2: "Tỷ lệ hoàn vốn nhanh với hiệu suất cao và chi phí bảo trì thấp",
      image: solution5
    },
    feature2: {
      title: "Độ Tin Cậy Cao",
      detail1: "Thiết kế đơn giản, ít thành phần, giảm thiểu điểm sự cố",
      detail2: "Tuổi thọ dài với khả năng chống chịu tốt trong môi trường khắc nghiệt",
      image: solution6
    },
    feature3: {
      title: "Dễ Dàng Mở Rộng",
      detail1: "Thiết kế modular cho phép mở rộng hệ thống dễ dàng",
      detail2: "Tương thích với nhiều loại tấm pin và cấu hình khác nhau",
      image: solution7
    }
  },
  {
    id: 6,
    slug: "utility-pv-system",
    category: "utility",
    overview: {
      title: "Utility PV System",
      description: "Utility PV System provides megawatt-scale solar power solutions for utility-scale projects, ranging from 1MW to hundreds of megawatts for large solar farms. Its centralized inverter technology delivers superior efficiency and grid control capabilities, seamlessly integrating with national power grids and large-scale energy storage systems. The comprehensive SCADA integration and advanced energy management tools enable professional remote monitoring and control, ensuring optimal performance and detailed operational reporting.",
      image: solution6
    },
    schema: {
      title: "Scheme Framework",
      gifImage: solution1_gif
    },
    feature1: {
      title: "Quy Mô Megawatt",
      detail1: "Hệ thống công suất từ 1MW đến hàng trăm MW cho các trang trại điện mặt trời",
      detail2: "Tích hợp với lưới điện quốc gia và các hệ thống lưu trữ năng lượng lớn",
      image: solution6
    },
    feature2: {
      title: "Hiệu Suất Tối Ưu",
      detail1: "Công nghệ inverter tập trung với hiệu suất cao và khả năng điều khiển tốt",
      detail2: "Tích hợp với hệ thống SCADA và các công cụ quản lý năng lượng tiên tiến",
      image: solution7
    },
    feature3: {
      title: "Quản Lý Chuyên Nghiệp",
      detail1: "Hệ thống giám sát và điều khiển từ xa với đội ngũ kỹ thuật chuyên nghiệp",
      detail2: "Báo cáo chi tiết về hiệu suất, sản lượng và tình trạng vận hành",
      image: solution1
    }
  },
  {
    id: 7,
    slug: "utility-ess-solution",
    category: "utility",
    overview: {
      title: "Utility ESS Solution",
      description: "Utility ESS Solution delivers containerized energy storage systems with capacities from 1MWh to 10MWh, designed for utility-scale applications and renewable energy integration. Its modular container design enables easy transportation and installation at various locations, with pre-integrated control systems, cooling, and safety features. The plug-and-play connectivity seamlessly integrates with existing PV systems and power grids, supporting diverse applications including peak shaving, frequency regulation, and microgrid projects.",
      image: solution7
    },
    schema: {
      title: "Scheme Framework",
      gifImage: solution1_gif
    },
    feature1: {
      title: "Lưu Trữ Quy Mô Lớn",
      detail1: "Hệ thống lưu trữ năng lượng container với dung lượng từ 1MWh đến 10MWh",
      detail2: "Thiết kế modular, dễ dàng vận chuyển và lắp đặt tại các địa điểm khác nhau",
      image: solution7
    },
    feature2: {
      title: "Tích Hợp Hoàn Chỉnh",
      detail1: "Tích hợp sẵn hệ thống điều khiển, làm mát và an toàn trong container",
      detail2: "Kết nối plug-and-play với các hệ thống PV và lưới điện hiện có",
      image: solution1
    },
    feature3: {
      title: "Ứng Dụng Đa Dạng",
      detail1: "Phù hợp cho peak shaving, frequency regulation và backup power",
      detail2: "Tích hợp với các dự án năng lượng tái tạo và microgrid",
      image: solution2
    }
  }
];
