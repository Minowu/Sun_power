import aboutImage from '../assets/about_hero.jpg';
import aboutVideo from '../assets/about_hero.mp4';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Định nghĩa interface cho stat
interface Stat {
  number: number;
  suffix: string;
  label: string;
}

const About = () => {
  const stats: Stat[] = [
    { number: 500, suffix: '+', label: 'MW Installed' },
    { number: 50000, suffix: '+', label: 'Happy Customers' },
    { number: 15, suffix: '+', label: 'Years Experience' },
    { number: 98, suffix: '%', label: 'Efficiency Rate' },
  ];
  const title_ref = useRef(null);
  const count_ref = useRef(null);
  const is_inview = useInView(count_ref, { once: false, amount: 0.5 });
  const is_inview_title = useInView(title_ref, { once: false, amount: 0.6 });

  // State để lưu trữ giá trị hiện tại của các số liệu
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Hàm định dạng số với kiểu rõ ràng
  const formatNumber = (value: number, label: string): string => {
    const stat = stats.find((stat) => stat.label === label);
    if (!stat) return `${Math.floor(value)}`; // Giá trị mặc định nếu không tìm thấy

    if (label === 'Happy Customers') {
      return `${Math.floor(value / 1000)}k${stat.suffix}`;
    }
    return `${Math.floor(value)}${stat.suffix}`;
  };

  // Hiệu ứng count-up
  useEffect(() => {
    if (is_inview) {
      // Bắt đầu đếm khi lọt vào khung nhìn
      const intervals = stats.map((stat, index) => {
        const target = stat.number;
        const duration = 2500; // 2.5 giây
        const increment = target / (duration / 50); // Tăng mỗi 50ms

        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < target) {
              newCounts[index] = Math.min(newCounts[index] + increment, target);
            }
            return newCounts;
          });
        }, 50);
      });

      // Dọn dẹp intervals khi component unmount hoặc is_inview thay đổi
      return () => {
        intervals.forEach((interval) => clearInterval(interval));
      };
    } else {
      // Đặt lại về 0 khi ra khỏi khung nhìn
      setCounts(stats.map(() => 0));
    }
  }, [is_inview, stats]);

  const count_animate = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const }, // Sử dụng literal type
    },
  };

  return (
    <section id="about-us" className="h-[200vh] relative">
      {/* Background Image */}
      <div className="top-0 w-screen sticky z-0">
        <video
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-screen h-screen"
        />
      </div>
      {/* Content overlaid on background */}
      <motion.div className="h-[120vh] absolute top-0 z-10 w-full flex items-center justify-center" 
      ref={title_ref}
      variants={count_animate}
      initial="hidden"
      animate={is_inview_title ? 'visible' : 'hidden'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -translate-y-30">
          <h3 className="text-teal font-semibold mb-2 text-6xl">About Thadorobot</h3>
          <p className="text-lg text-white/90 leading-relaxed mb-6 max-w-3xl mx-auto">
            Since 2020, Thadorobot has been at the forefront of the renewable energy
            revolution. We design, manufacture, and deploy cutting-edge solar solutions
            that power businesses and communities worldwide.
          </p>
        </div>
      </motion.div>
      <div className="h-[90vh] relative z-100 flex items-center justify-center text-white -translate-y-50">
        <motion.div
          ref={count_ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-40"
          variants={count_animate}
          initial="hidden"
          animate={is_inview ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-6xl font-bold mb-2"
                aria-label={`${stat.number}${stat.suffix} ${stat.label}`}
              >
                {formatNumber(counts[index], stat.label)}
              </div>
              <span className="text-xl font-semibold">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;