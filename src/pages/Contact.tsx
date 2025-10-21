import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import aboutHero from '../assets/about_hero.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-teal-500" />,
      title: 'Địa chỉ',
      details: ['123 Đường ABC, Quận 1', 'TP. Hồ Chí Minh, Việt Nam']
    },
    {
      icon: <Phone className="h-6 w-6 text-teal-500" />,
      title: 'Điện thoại',
      details: ['+84 28 1234 5678', '+84 901 234 567']
    },
    {
      icon: <Mail className="h-6 w-6 text-teal-500" />,
      title: 'Email',
      details: ['info@sunpower.vn', 'support@sunpower.vn']
    },
    {
      icon: <Clock className="h-6 w-6 text-teal-500" />,
      title: 'Giờ làm việc',
      details: ['Thứ 2 - Thứ 6: 8:00 - 17:30', 'Thứ 7: 8:00 - 12:00']
    }
  ];

  const services = [
    'Tư vấn hệ thống điện mặt trời',
    'Khảo sát và thiết kế',
    'Lắp đặt chuyên nghiệp',
    'Bảo trì và sửa chữa',
    'Hỗ trợ kỹ thuật 24/7'
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Liên Hệ"
        subtitle="Chúng tôi sẵn sàng hỗ trợ và tư vấn cho bạn"
        backgroundImage={aboutHero}
      />

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Thông Tin Liên Hệ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Liên hệ với chúng tôi qua các kênh sau
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-navy mb-6">
                Gửi Tin Nhắn
              </h3>
              <p className="text-gray-600 mb-8">
                Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
              </p>

              {isSubmitted ? (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-green-800 mb-2">
                    Cảm ơn bạn!
                  </h4>
                  <p className="text-green-600">
                    Tin nhắn đã được gửi thành công. Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Nhập email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Chủ đề
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Chọn chủ đề</option>
                        <option value="tu-van">Tư vấn hệ thống</option>
                        <option value="bao-gia">Báo giá</option>
                        <option value="lap-dat">Lắp đặt</option>
                        <option value="bao-tri">Bảo trì</option>
                        <option value="khac">Khác</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tin nhắn *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Nhập tin nhắn của bạn..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-teal-600 transition-colors flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Gửi tin nhắn
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map & Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 h-96 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg">Bản đồ sẽ được hiển thị tại đây</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-navy mb-4">
                  Dịch Vụ Của Chúng Tôi
                </h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-xl text-gray-600">
              Những câu hỏi phổ biến về dịch vụ của chúng tôi
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Thời gian lắp đặt hệ thống điện mặt trời là bao lâu?',
                answer: 'Thời gian lắp đặt thường từ 1-3 ngày tùy thuộc vào quy mô hệ thống và điều kiện thực tế.'
              },
              {
                question: 'Hệ thống có hoạt động được trong mùa mưa không?',
                answer: 'Có, hệ thống vẫn hoạt động trong mùa mưa nhưng hiệu suất sẽ giảm khoảng 20-30%.'
              },
              {
                question: 'Chi phí bảo trì hàng năm là bao nhiêu?',
                answer: 'Chi phí bảo trì hàng năm thường từ 1-2% giá trị hệ thống, bao gồm vệ sinh và kiểm tra định kỳ.'
              },
              {
                question: 'Có hỗ trợ vay vốn không?',
                answer: 'Chúng tôi có hợp tác với các ngân hàng để hỗ trợ khách hàng vay vốn với lãi suất ưu đãi.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-navy mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
